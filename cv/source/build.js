const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, AlignmentType,
  TabStopType, BorderStyle, LevelFormat,
} = require("docx");
const data = require("./cv-data");

const OUT = process.argv[2];
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const NAVY = "1F3A68";
const GREY = "555555";
const FONT = "Calibri";
const RIGHT = 10466; // A4 width 11906 - 2 * 720 margins

// "**bold** rest" -> [{text, bold}]
const parts = (s) => s.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((p) =>
  p.startsWith("**") ? { text: p.slice(2, -2), bold: true } : { text: p, bold: false });

// ---------- DOCX ----------
const runs = (s, opts = {}) => parts(s).map((p) => new TextRun({ text: p.text, bold: p.bold || opts.bold, size: opts.size || 20, color: opts.color, font: FONT }));
const link = (text, url) => new ExternalHyperlink({ link: url, children: [new TextRun({ text, style: "Hyperlink", size: 19, font: FONT })] });
const sep = () => new TextRun({ text: "  |  ", size: 19, color: GREY, font: FONT });

const heading = (text) => new Paragraph({
  spacing: { before: 160, after: 80 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 2 } },
  children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 22, color: NAVY, font: FONT })],
});
const bullet = (s) => new Paragraph({ numbering: { reference: "b", level: 0 }, spacing: { after: 30 }, children: runs(s) });
const datedLine = (leftRuns, date, before = 100) => new Paragraph({
  spacing: { before, after: 30 },
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
  children: [...leftRuns, new TextRun({ text: `\t${date}`, size: 20, color: GREY, font: FONT })],
});
const job = (j) => [
  datedLine([
    new TextRun({ text: j.role, bold: true, size: 21, font: FONT }),
    new TextRun({ text: ` — ${j.org}`, bold: true, size: 21, color: NAVY, font: FONT }),
    new TextRun({ text: `  ·  ${j.meta}`, size: 19, color: GREY, font: FONT }),
  ], j.dates),
  ...j.bullets.map(bullet),
];

function buildDocx(cv) {
  const c = cv.contact;
  const children = [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [new TextRun({ text: cv.name, bold: true, size: 40, color: NAVY, font: FONT })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: cv.title, bold: true, size: 22, font: FONT })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [
      link(c.email, `mailto:${c.email}`), sep(), new TextRun({ text: c.phone, size: 19, font: FONT }), sep(),
      link(c.linkedin, `https://${c.linkedin}`), sep(), link(c.github, `https://${c.github}`), sep(),
      link(c.portfolio, `https://${c.portfolio}`),
    ] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: cv.infoLine, size: 19, color: GREY, font: FONT })] }),
    heading(cv.labels.summary),
    new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: 40 }, children: runs(cv.summary) }),
    heading(cv.labels.skills),
    ...cv.skills.map(([k, v]) => new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: `${k}: `, bold: true, size: 20, font: FONT }), ...runs(v)] })),
    heading(cv.labels.experience),
    ...cv.experience.flatMap(job),
    heading(cv.labels.projects),
    ...cv.projects.flatMap(job),
    heading(cv.labels.education),
    ...cv.education.map(([l, d]) => datedLine(runs(l), d, 40)),
    heading(cv.labels.languages),
    new Paragraph({ children: runs(cv.languages) }),
  ];
  return new Document({
    creator: "Iyed Khouildi",
    title: `${cv.name} — CV`,
    styles: { default: { document: { run: { font: FONT, size: 20 } } } },
    numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] }] },
    sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 640, bottom: 640, left: 720, right: 720 } } }, children }],
  });
}

// ---------- HTML -> PDF ----------
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const md = (s) => parts(s).map((p) => (p.bold ? `<b>${esc(p.text)}</b>` : esc(p.text))).join("");
const jobHtml = (j) => `
  <div class="job"><div class="row"><span><b>${esc(j.role)}</b> <b class="org">— ${esc(j.org)}</b> <span class="meta">· ${esc(j.meta)}</span></span><span class="date">${esc(j.dates)}</span></div>
  <ul>${j.bullets.map((b) => `<li>${md(b)}</li>`).join("")}</ul></div>`;

function buildHtml(cv) {
  const c = cv.contact;
  return `<!doctype html><html lang="${cv.lang}"><head><meta charset="utf-8"><title>${cv.name} — CV</title><style>
  @page { size: A4; margin: 9mm 12mm; }
  body { font-family: Calibri, Carlito, Arial, sans-serif; font-size: 10pt; line-height: 1.24; color: #111; margin: 0; }
  h1 { text-align: center; color: #${NAVY}; font-size: 20pt; margin: 0; letter-spacing: .5px; }
  .title { text-align: center; font-weight: bold; font-size: 11pt; margin: 2px 0 4px; }
  .contact, .info { text-align: center; font-size: 8.8pt; color: #${GREY}; margin: 1px 0; }
  .contact a { color: #1155CC; text-decoration: none; }
  h2 { color: #${NAVY}; font-size: 11pt; border-bottom: 1.2px solid #${NAVY}; margin: 9px 0 4px; padding-bottom: 1px; }
  p { margin: 0; text-align: justify; }
  .skill { margin: 1.5px 0; }
  .row { display: flex; justify-content: space-between; gap: 12px; margin-top: 5px; }
  .org { color: #${NAVY}; } .meta, .date { color: #${GREY}; font-size: 9.5pt; } .date { white-space: nowrap; }
  ul { margin: 2px 0 0; padding-left: 16px; } li { margin: 1.5px 0; }
  .job { break-inside: avoid; }
  </style></head><body>
  <h1>${cv.name}</h1>
  <div class="title">${esc(cv.title)}</div>
  <div class="contact"><a href="mailto:${c.email}">${c.email}</a> | ${c.phone} | <a href="https://${c.linkedin}">${c.linkedin}</a> | <a href="https://${c.github}">${c.github}</a> | <a href="https://${c.portfolio}">${c.portfolio}</a></div>
  <div class="info">${esc(cv.infoLine)}</div>
  <h2>${cv.labels.summary.toUpperCase()}</h2><p>${md(cv.summary)}</p>
  <h2>${cv.labels.skills.toUpperCase()}</h2>${cv.skills.map(([k, v]) => `<div class="skill"><b>${esc(k)}:</b> ${md(v)}</div>`).join("")}
  <h2>${cv.labels.experience.toUpperCase()}</h2>${cv.experience.map(jobHtml).join("")}
  <h2>${cv.labels.projects.toUpperCase()}</h2>${cv.projects.map(jobHtml).join("")}
  <h2>${cv.labels.education.toUpperCase()}</h2>${cv.education.map(([l, d]) => `<div class="row" style="margin-top:2px"><span>${md(l)}</span><span class="date">${d}</span></div>`).join("")}
  <h2>${cv.labels.languages.toUpperCase()}</h2><p>${md(cv.languages)}</p>
  </body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const cv of [data.en, data.fr]) {
    fs.writeFileSync(path.join(OUT, `${cv.file}.docx`), await Packer.toBuffer(buildDocx(cv)));
    const html = path.join(OUT, `${cv.file}.html`);
    fs.writeFileSync(html, buildHtml(cv));
    const pdf = path.join(OUT, `${cv.file}.pdf`);
    execFileSync(EDGE, ["--headless=new", "--disable-gpu", `--user-data-dir=${path.join(__dirname, "edge-profile")}`, "--no-pdf-header-footer", `--print-to-pdf=${pdf}`, `file:///${html.replace(/\\/g, "/")}`], { stdio: "inherit", timeout: 60000 });
    fs.copyFileSync(html, path.join(__dirname, `${cv.file}.html`)); fs.unlinkSync(html); console.log("built", cv.file);
  }
})();
