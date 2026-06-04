import type { Lang } from "@/lib/i18n";

const SITE_URL = "https://brasley-byun.vercel.app";

export function JsonLd({ lang }: { lang: Lang }) {
  const isKo = lang === "ko";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: isKo ? "변재일" : "Brasley Byun",
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/profile.jpeg`,
    jobTitle: "Business Development",
    worksFor: {
      "@type": "Organization",
      name: "BIGO Live",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: isKo ? "중앙대학교" : "Chung-Ang University",
    },
    knowsAbout: [
      "Business Development",
      "Sales Operations",
      "Marketing Operations",
      "Stakeholder Coordination",
      "Process Improvement",
    ],
    sameAs: [
      "https://www.linkedin.com/in/brasleybyun/",
      "https://open.kakao.com/me/JaeilByun",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isKo ? "변재일 포트폴리오" : "Brasley Byun Portfolio",
    url: SITE_URL,
    inLanguage: [isKo ? "ko" : "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
