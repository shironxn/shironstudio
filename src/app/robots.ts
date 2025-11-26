import type { MetadataRoute } from "next";

const baseUrl = "https://shironstudio.com";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
};

export default robots;
