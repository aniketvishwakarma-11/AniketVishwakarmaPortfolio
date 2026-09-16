import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://aniketvishwakarma.me",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://aniket-vishwakarma-portfolio.vercel.app",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://aniketvishwakarma.me/#projects",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://aniket-vishwakarma-portfolio.vercel.app/#projects",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://aniketvishwakarma.me/#about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aniket-vishwakarma-portfolio.vercel.app/#about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aniketvishwakarma.me/#experience",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aniket-vishwakarma-portfolio.vercel.app/#experience",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aniketvishwakarma.me/#skills",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aniket-vishwakarma-portfolio.vercel.app/#skills",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aniketvishwakarma.me/#contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://aniket-vishwakarma-portfolio.vercel.app/#contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
