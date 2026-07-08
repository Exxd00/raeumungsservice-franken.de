import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const baseUrl = "https://raeumungsservice-franken.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/leistungen", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/staedte", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/referenzen", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/kontakt", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/agb", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  staticPages.forEach((page) => {
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Service pages
  services.forEach((service) => {
    sitemap.push({
      url: `${baseUrl}/leistungen/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  // City pages
  cities.forEach((city) => {
    sitemap.push({
      url: `${baseUrl}/staedte/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    // City + Service pages
    services.forEach((service) => {
      sitemap.push({
        url: `${baseUrl}/staedte/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return sitemap;
}
