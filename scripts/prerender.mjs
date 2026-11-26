// Turns the single-page app into real static HTML files, one per page,
// so search engines and social sites see each page's content and get
// a normal "200 OK" instead of "404".
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const { render, PAGES, pageMeta, SITE_URL, structuredData } = await import(
  pathToFileURL(path.resolve("dist-ssr/entry-server.mjs")).href
);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const route of Object.keys(PAGES)) {
  const { title, description } = pageMeta(route);
  const url = SITE_URL + route;
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Grandeur Advisors" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/images/og-card.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Grandeur Advisors - outsourced bookkeeping and accounting" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData(route)).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");

  const html = template
    .replace(/<title>.*?<\/title>/s, head)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);

  const out =
    route === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log("pre-rendered", route, "->", path.relative(dist, out));
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(PAGES)
  .map((r) => `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });
console.log("wrote sitemap.xml");
