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
          // Traditional search crawlers
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Baiduspider",
          "Yandex",
          "DuckDuckBot",
          // AI & LLM crawlers
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "Bytespider",
          "Amazonbot",
          "anthropic-ai",
          "Diffbot",
          "YouBot",
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
