import { MetadataRoute } from "next";

const baseUrl = "https://shironstudio.com";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
};

export default sitemap;
