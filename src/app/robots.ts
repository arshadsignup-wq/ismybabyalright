import type { MetadataRoute } from "next";

const disallowPaths = ["/tracker/", "/settings/", "/sharing/", "/shared/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "meta-externalagent",
        allow: "/",
        disallow: disallowPaths,
      },
    ],
    sitemap: "https://www.ismybabyalright.com/sitemap.xml",
  };
}
