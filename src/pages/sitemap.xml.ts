const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? "https://asaka-photography.example.com";
const pages = ["/", "/about/", "/works/", "/price/", "/flow/", "/faq/"];

const xmlEscape = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export const GET = () => {
  const lastmod = new Date().toISOString();
  const entries = pages
    .map((path) => {
      const loc = new URL(path, siteUrl).toString();

      return [
        "  <url>",
        `    <loc>${xmlEscape(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
