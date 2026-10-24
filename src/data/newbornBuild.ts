// Resolved once in astro.config.mjs; normal builds keep all Newborn routes disabled.
export const newbornBuild = {
  enabled: import.meta.env.NEWBORN_BUILD_MODE !== "disabled",
  review: import.meta.env.NEWBORN_BUILD_MODE === "review",
  releaseCandidate: import.meta.env.NEWBORN_BUILD_MODE === "release-candidate",
  ogpVariant: "A" as const,
};
export const newbornPublicPaths = ["/newborn/", "/newborn/lifestyle/", "/newborn/art/"];
