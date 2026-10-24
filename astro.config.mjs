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

const review = process.env.NEWBORN_LOCAL_PREVIEW === "1";
const releaseCandidate = process.env.NEWBORN_RELEASE_CANDIDATE === "1";
for (const key of ["NEWBORN_LOCAL_PREVIEW", "NEWBORN_RELEASE_CANDIDATE"]) {
  if (process.env[key] !== undefined && !["0", "1"].includes(process.env[key])) {
    throw new Error(`${key} must be 0, 1, or unset.`);
  }
}
if (review && releaseCandidate) throw new Error("Choose either local review or release candidate, never both.");
const newbornMode = releaseCandidate ? "release-candidate" : review ? "review" : "disabled";
// Phase 5: OGP A is approved. B stays in historical review materials only.
const ogpVariant = process.env.NEWBORN_OGP_VARIANT ?? "A";
if (ogpVariant !== "A") throw new Error("Only approved Newborn OGP A may be built.");

export default defineConfig({
  site: canonicalSite,
  // An explicit release-candidate build stays separate from the normal deployable directory.
  outDir: newbornMode === "release-candidate" ? "./dist-newborn-release-candidate/" : "./dist/",
  vite: { define: {
    "import.meta.env.NEWBORN_BUILD_MODE": JSON.stringify(newbornMode),
    "import.meta.env.NEWBORN_OGP_VARIANT": JSON.stringify(ogpVariant),
  } },
  // Newborn routes and assets remain absent from an ordinary build.
  integrations: newbornMode !== "disabled" ? [{
    name: "newborn-local-preview",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        injectRoute({ pattern: "/newborn/[...page]", entrypoint: "./src/preview/newborn-route.astro" });
        if (review) injectRoute({ pattern: "/works/review/[variant]", entrypoint: "./src/preview/works-newborn-route.astro" });
      },
    },
  }] : [],
});
