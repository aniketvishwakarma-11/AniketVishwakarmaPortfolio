import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Baiduspider",
          "Yandex",
          "DuckDuckBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: [
      "https://aniketvishwakarma.me/sitemap.xml",
      "https://aniket-vishwakarma-portfolio.vercel.app/sitemap.xml",
    ],
    host: "https://aniketvishwakarma.me",
  };
}
