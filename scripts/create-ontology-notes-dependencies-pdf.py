from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter
from pypdf import PdfReader
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth


ROOT = Path(__file__).resolve().parents[1]
CONNECTIONS = ROOT / "content" / "06-Infpump FlowGuard ontology notes" / "connections"
TMP = ROOT / "tmp" / "pdfs" / "ontology-notes-dependencies"
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_PDF = OUTPUT_DIR / "ontology-notes-and-dependencies.pdf"
CONTACT_SHEET = TMP / "diagram-contact-sheet.png"

PAGE_W, PAGE_H = A4
NAVY = HexColor("#15324A")
BLUE = HexColor("#286A8B")
TEAL = HexColor("#2C8C83")
PALE = HexColor("#EEF5F6")
LIGHT = HexColor("#F6F8FA")
MID = HexColor("#607080")
INK = HexColor("#17242E")
RULE = HexColor("#D7E0E5")
ORANGE = HexColor("#D97841")


def ascii_hyphens(text: str) -> str:
    return (
        text.replace("\u2011", "-")
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .replace("\u2212", "-")
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
    )


def parse_connection(path: Path) -> dict:
    source = path.read_text(encoding="utf-8")
    source = re.sub(r"^---\s*\n[\s\S]*?\n---\s*\n", "", source, count=1)
    title_match = re.search(r"^# (.+)$", source, re.MULTILINE)
    if not title_match:
        raise ValueError(f"Missing title in {path}")
    title = title_match.group(1).strip()
    before_diagram = source[: source.index("```mermaid")]
    paragraphs = [
        block.strip()
        for block in re.split(r"\n\s*\n", before_diagram)
        if block.strip() and not block.strip().startswith("#")
    ]
    purpose = paragraphs[0]
    instruction = paragraphs[1]
    linked_section = source.split("## Linked ontology notes", 1)[1]
    links = []
    for target, label in re.findall(r"^- \[\[([^|]+)\|([^\]]+)\]\]$", linked_section, re.MULTILINE):
        links.append({"target": target, "label": label})
    after_links = re.sub(r"^- \[\[[^\n]+\n?", "", linked_section, flags=re.MULTILINE).strip()
    guardrail = after_links.split("\n\n")[-1].strip()
    return {
        "slug": path.stem,
        "title": ascii_hyphens(title),
        "purpose": ascii_hyphens(purpose),
        "instruction": ascii_hyphens(instruction),
        "links": [{**item, "label": ascii_hyphens(item["label"])} for item in links],
        "guardrail": ascii_hyphens(guardrail),
    }


def content_bbox(image: Image.Image) -> tuple[int, int, int, int]:
    rgb = image.convert("RGB")
    mask = Image.new("1", rgb.size, 0)
    pixels = rgb.load()
    mask_pixels = mask.load()
    for y in range(rgb.height):
        for x in range(rgb.width):
            r, g, b = pixels[x, y]
            if min(r, g, b) < 238:
                mask_pixels[x, y] = 1
    bbox = mask.getbbox()
    if bbox is None:
        return (0, 0, image.width, image.height)
    left, top, right, bottom = bbox
    pad = 24
    return (
        max(0, left - pad),
        max(0, top - pad),
        min(image.width, right + pad),
        min(image.height, bottom + pad),
    )


def process_graph_images(connections: list[dict]) -> list[Path]:
    processed_dir = TMP / "processed"
    processed_dir.mkdir(parents=True, exist_ok=True)
    outputs = []
    for connection in connections:
        source = TMP / f"{connection['slug']}-viewer.png"
        if not source.exists():
            raise FileNotFoundError(f"Missing captured Mermaid graph: {source}")
        image = Image.open(source).convert("RGB")
        # The expanded Quartz graph viewer occupies this stable central panel.
        image = image.crop((126, 70, 1139, 643))
        draw = ImageDraw.Draw(image)
        # Remove the viewer's zoom controls without altering the diagram area.
        draw.rectangle((805, 0, image.width, image.height), fill="white")
        image = image.crop(content_bbox(image))
        image = ImageEnhance.Contrast(image).enhance(1.08)
        image = image.filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
        output = processed_dir / f"{connection['slug']}.png"
        image.save(output, optimize=True)
        outputs.append(output)
    return outputs


def wrap_text(text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    max_width: float,
    font: str = "Helvetica",
    size: float = 10,
    leading: float = 13,
    color=INK,
    max_lines: int | None = None,
) -> float:
    lines = wrap_text(ascii_hyphens(text), font, size, max_width)
    if max_lines is not None and len(lines) > max_lines:
        lines = lines[:max_lines]
        last = lines[-1]
        while stringWidth(last + "...", font, size) > max_width and last:
            last = last[:-1]
        lines[-1] = last.rstrip() + "..."
    c.setFillColor(color)
    c.setFont(font, size)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_footer(c: canvas.Canvas, page_number: int) -> None:
    c.setStrokeColor(RULE)
    c.setLineWidth(0.6)
    c.line(42, 35, PAGE_W - 42, 35)
    c.setFillColor(MID)
    c.setFont("Helvetica-Oblique", 7.5)
    c.drawString(42, 21, "Footnote: This content is AI generated.")
    c.setFont("Helvetica", 7.5)
    c.drawRightString(PAGE_W - 42, 21, f"Page {page_number} of 11")


def draw_cover(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 245, PAGE_W, 245, fill=1, stroke=0)
    c.setFillColor(TEAL)
    c.rect(0, PAGE_H - 253, PAGE_W, 8, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(46, PAGE_H - 60, "EU MDR MANUFACTURER ONTOLOGY")
    c.setFont("Helvetica-Bold", 31)
    c.drawString(46, PAGE_H - 110, "Ontology notes")
    c.drawString(46, PAGE_H - 148, "and their dependencies")
    c.setFont("Helvetica", 13)
    c.setFillColor(HexColor("#D7E9EE"))
    c.drawString(46, PAGE_H - 183, "Traceability overview and ten worked connection maps")
    c.setFont("Helvetica", 10)
    c.drawString(46, PAGE_H - 215, "Imaginary Infpump FlowGuard infusion-pump context")

    # Small dependency motif on the cover.
    motif = [(420, PAGE_H - 82), (490, PAGE_H - 132), (420, PAGE_H - 190), (535, PAGE_H - 205)]
    c.setStrokeColor(HexColor("#8AC7C0"))
    c.setLineWidth(1.5)
    for a, b in [(0, 1), (1, 2), (1, 3)]:
        c.line(motif[a][0], motif[a][1], motif[b][0], motif[b][1])
    for index, (x, y) in enumerate(motif):
        c.setFillColor(TEAL if index == 1 else BLUE)
        c.circle(x, y, 15 if index == 1 else 11, fill=1, stroke=0)

    x = 46
    y = PAGE_H - 300
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(x, y, "Overview")
    y -= 23
    overview = (
        "An ontology note represents one independently identifiable regulatory object - for example a device configuration, intended purpose, risk, control, evidence item, change or post-market signal. Stable identifiers, structured metadata and human-readable text let people and software refer to the same object consistently."
    )
    y = draw_wrapped(c, overview, x, y, PAGE_W - 92, size=10.2, leading=14)
    y -= 11
    dependencies = (
        "Dependencies express how those objects rely on one another. Incoming links identify the records that lead into a note; outgoing links identify the decisions, controls, evidence or lifecycle activities that follow. Typed arrows make the reasoning route inspectable without turning the diagram itself into a new regulatory fact."
    )
    y = draw_wrapped(c, dependencies, x, y, PAGE_W - 92, size=10.2, leading=14)

    y -= 18
    c.setFont("Helvetica-Bold", 15)
    c.setFillColor(INK)
    c.drawString(x, y, "Typical traceability problems")
    y -= 22
    problems = [
        ("Orphaned records", "A note has no governed route to its device, decision or evidence context."),
        ("Ambiguous relationships", "A generic link exists, but its regulatory meaning or direction is not typed."),
        ("Broken configuration scope", "Evidence or conclusions are reused across variants without confirmed coverage."),
        ("Version drift", "A changed baseline, software version or document is not propagated to dependent notes."),
        ("One-way traceability", "A downstream claim can be found, but its upstream requirement or control cannot."),
        ("Unsupported conclusions", "A decision appears complete although required evidence, provenance or review is missing."),
    ]
    col_width = (PAGE_W - 106) / 2
    for index, (heading, description) in enumerate(problems):
        col = index % 2
        row = index // 2
        bx = x + col * (col_width + 14)
        by = y - row * 72
        c.setFillColor(PALE)
        c.roundRect(bx, by - 53, col_width, 58, 7, fill=1, stroke=0)
        c.setFillColor(ORANGE)
        c.circle(bx + 13, by - 11, 3.5, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9.5)
        c.drawString(bx + 23, by - 15, heading)
        draw_wrapped(c, description, bx + 13, by - 31, col_width - 24, size=8.2, leading=10, max_lines=2)

    c.setFillColor(BLUE)
    c.roundRect(46, 57, PAGE_W - 92, 50, 8, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(60, 88, "How to use pages 2-11")
    draw_wrapped(
        c,
        "Read each graph as a reasoning path, then use the traceability text and linked note identifiers to inspect the governed records behind it.",
        60,
        72,
        PAGE_W - 120,
        size=8.5,
        leading=10,
        color=white,
        max_lines=2,
    )
    draw_footer(c, 1)


def draw_connection_page(c: canvas.Canvas, connection: dict, image_path: Path, index: int) -> None:
    page_number = index + 2
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 85, PAGE_W, 85, fill=1, stroke=0)
    c.setFillColor(TEAL)
    c.rect(0, PAGE_H - 91, PAGE_W, 6, fill=1, stroke=0)
    c.setFillColor(HexColor("#CDE7E4"))
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(42, PAGE_H - 28, f"CONNECTION {index + 1:02d} / 10")
    c.setFillColor(white)
    title_size = 22 if len(connection["title"]) < 43 else 19
    c.setFont("Helvetica-Bold", title_size)
    c.drawString(42, PAGE_H - 59, connection["title"])

    draw_wrapped(c, connection["purpose"], 42, PAGE_H - 117, PAGE_W - 84, size=9.7, leading=12.5, max_lines=3)

    panel_x, panel_y, panel_w, panel_h = 42, 330, PAGE_W - 84, 350
    c.setFillColor(LIGHT)
    c.roundRect(panel_x, panel_y, panel_w, panel_h, 8, fill=1, stroke=0)
    c.setStrokeColor(RULE)
    c.roundRect(panel_x, panel_y, panel_w, panel_h, 8, fill=0, stroke=1)
    image = Image.open(image_path)
    iw, ih = image.size
    scale = min((panel_w - 24) / iw, (panel_h - 24) / ih)
    dw, dh = iw * scale, ih * scale
    c.drawImage(
        ImageReader(image),
        panel_x + (panel_w - dw) / 2,
        panel_y + (panel_h - dh) / 2,
        dw,
        dh,
        preserveAspectRatio=True,
        mask="auto",
    )

    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(42, 305, "Traceability text")
    y = draw_wrapped(c, connection["instruction"], 42, 288, PAGE_W - 84, size=8.5, leading=10.5, max_lines=2)
    y -= 4
    y = draw_wrapped(c, connection["guardrail"], 42, y, PAGE_W - 84, size=8.5, leading=10.5, color=MID, max_lines=2)

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(BLUE)
    c.drawString(42, 225, "Linked ontology notes")
    links = connection["links"]
    col_width = (PAGE_W - 100) / 2
    rows = (len(links) + 1) // 2
    for item_index, item in enumerate(links):
        col = item_index // rows
        row = item_index % rows
        lx = 42 + col * (col_width + 16)
        ly = 208 - row * 19
        label = item["label"]
        if " - " in label:
            identifier, name = label.split(" - ", 1)
        else:
            identifier, name = label, ""
        c.setFillColor(TEAL)
        c.circle(lx + 3, ly + 2, 2.4, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 7.6)
        c.drawString(lx + 11, ly, identifier)
        id_width = stringWidth(identifier, "Helvetica-Bold", 7.6)
        c.setFont("Helvetica", 7.6)
        available = col_width - id_width - 17
        name_lines = wrap_text(name, "Helvetica", 7.6, available)
        suffix = name_lines[0] if name_lines else ""
        c.drawString(lx + 15 + id_width, ly, suffix)

    draw_footer(c, page_number)


def make_contact_sheet(processed: list[Path], connections: list[dict]) -> None:
    thumb_w, thumb_h = 500, 300
    sheet = Image.new("RGB", (thumb_w * 2, thumb_h * 5), "white")
    draw = ImageDraw.Draw(sheet)
    for index, (path, connection) in enumerate(zip(processed, connections)):
        image = Image.open(path).convert("RGB")
        image.thumbnail((thumb_w - 20, thumb_h - 45), Image.Resampling.LANCZOS)
        x = (index % 2) * thumb_w + (thumb_w - image.width) // 2
        y = (index // 2) * thumb_h + 30 + (thumb_h - 40 - image.height) // 2
        sheet.paste(image, (x, y))
        draw.text(((index % 2) * thumb_w + 10, (index // 2) * thumb_h + 8), f"{index + 1:02d} {connection['title']}", fill="black")
    sheet.save(CONTACT_SHEET, optimize=True)


def build_pdf() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    connection_files = sorted(CONNECTIONS.glob("[0-9][0-9]-*.md"))
    if len(connection_files) != 10:
        raise ValueError(f"Expected 10 Connections pages, found {len(connection_files)}")
    connections = [parse_connection(path) for path in connection_files]
    processed = process_graph_images(connections)
    make_contact_sheet(processed, connections)

    c = canvas.Canvas(str(OUTPUT_PDF), pagesize=A4, pageCompression=1)
    c.setTitle("Ontology notes and their dependencies")
    c.setAuthor("AI-generated project artifact")
    c.setSubject("Ontology-note traceability overview and connection diagrams")
    draw_cover(c)
    c.showPage()
    for index, (connection, image_path) in enumerate(zip(connections, processed)):
        draw_connection_page(c, connection, image_path, index)
        c.showPage()
    c.save()

    reader = PdfReader(str(OUTPUT_PDF))
    if len(reader.pages) != 11:
        raise ValueError(f"Expected 11 PDF pages, found {len(reader.pages)}")
    print(json.dumps({
        "pdf": str(OUTPUT_PDF),
        "pages": len(reader.pages),
        "contact_sheet": str(CONTACT_SHEET),
        "connections": [item["title"] for item in connections],
    }, indent=2))


if __name__ == "__main__":
    build_pdf()
