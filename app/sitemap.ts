import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Only list the canonical primary domain.
  // Do NOT include the Vercel URL — it has a canonical pointing to aniketvishwakarma.me,
  // which causes Google to flag it as "Alternative page with proper canonical tag".
  //
  // Hash fragment (#about, #skills, etc.) URLs are excluded: Google strips the fragment
  // and treats them all as the same page — listing them wastes crawl budget and
  // causes "Discovered – currently not indexed" warnings in Search Console.
  return [
    {
      url: "https://aniketvishwakarma.me",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
