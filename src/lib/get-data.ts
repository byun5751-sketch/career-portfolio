import type { Lang } from "./i18n";
import {
  experiences,
  projects,
  skills,
  awards,
  certifications,
  getFeaturedProjects,
} from "./data";
import {
  experiencesKo,
  projectsKo,
  skillsKo,
  awardsKo,
  certificationsKo,
  academicFocusKo,
} from "./data-ko";

export function getData(lang: Lang) {
  if (lang === "ko") {
    return {
      experiences: experiencesKo,
      projects: projectsKo,
      skills: skillsKo as Record<string, string[]>,
      awards: awardsKo,
      certifications: certificationsKo,
      academicFocus: academicFocusKo,
      featured: projectsKo.filter((p) =>
        ["zeiss-vts-contract-process", "sap-customer-advisory", "sap-global-events"].includes(p.slug)
      ),
    };
  }
  return {
    experiences,
    projects,
    skills: skills as Record<string, string[]>,
    awards,
    certifications,
    academicFocus: [
      "International Logistics",
      "Business Administration",
      "Supply Chain Management",
      "Trade and Distribution",
      "ESG and Sustainable Logistics",
      "Business Communication",
      "Analytical Writing",
    ],
    featured: getFeaturedProjects(),
  };
}
