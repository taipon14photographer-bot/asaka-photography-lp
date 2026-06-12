const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? "https://asaka-photography.example.com";

export const GET = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", siteUrl).toString()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
