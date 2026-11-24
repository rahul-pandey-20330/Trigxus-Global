
import type { MetadataRoute } from "next";
import { services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://trigxus.com";

  const pages = [
    "",
    "/about",
    "/portfolio",
    "/contact",
    "/book-a-call",
    "/privacy-policy",
    "/terms"
  ];

  return [
    ...pages.map((page) => ({
      url: `${base}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
