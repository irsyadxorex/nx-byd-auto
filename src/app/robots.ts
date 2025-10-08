import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bydautoidn.com";
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) {
    // Block all crawlers in development/staging
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // Allow all crawlers in production
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
