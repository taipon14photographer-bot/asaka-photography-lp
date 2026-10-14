import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const canonicalSite = "https://asaka-photography.com/";
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "PUBLIC_SITE_URL");

if (
  PUBLIC_SITE_URL !== undefined &&
  PUBLIC_SITE_URL !== canonicalSite &&
  PUBLIC_SITE_URL !== canonicalSite.slice(0, -1)
) {
  throw new Error(`PUBLIC_SITE_URL must be ${canonicalSite} (with or without the trailing slash), or unset.`);
}

export default defineConfig({
  site: canonicalSite,
});
