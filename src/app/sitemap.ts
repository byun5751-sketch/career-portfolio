import type { MetadataRoute } from "next";

const SITE_URL = "https://brasley-byun.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/experience", "/projects", "/education"];
  const langs = ["en", "ko"];

  return pages.flatMap((page) =>
    langs.map((lang) => ({
      url: `${SITE_URL}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          langs.map((l) => [l, `${SITE_URL}/${l}${page}`])
        ),
      },
    }))
  );
}
