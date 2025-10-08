import { MetadataRoute } from "next";
import modelsData from "@/data/models.json";
import promosData from "@/data/promos.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bydautoidn.com";

  // Get all model and promo slugs
  const allProducts = [...modelsData, ...promosData];
  const modelUrls = allProducts.map((model) => ({
    url: `${baseUrl}/models/${model.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...modelUrls,
  ];
}
