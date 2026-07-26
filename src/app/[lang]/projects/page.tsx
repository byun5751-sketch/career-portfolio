import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";
import { SITE_URL } from "@/lib/site";
import ProjectsList from "@/components/ProjectsList";

// Sort key from a period string like "2025.02 ~ 2026.03" or "2021.12" — uses the start month.
function startKey(period: string): number {
  const m = period.match(/(\d{4})\.(\d{2})/);
  return m ? Number(m[1]) * 100 + Number(m[2]) : 0;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isKo = lang === "ko";
  return {
    title: isKo ? "프로젝트" : "Projects",
    description: isKo
      ? "변재일의 프로젝트 케이스 스터디. VTS 계약 프로세스 정상화, 경쟁사 인텔리전스, PR 운영, 글로벌 이벤트 등."
      : "Project case studies by Brasley Byun. VTS contract process normalization, competitor intelligence, PR operations, global events, and more.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/projects`,
      languages: { en: `${SITE_URL}/en/projects`, ko: `${SITE_URL}/ko/projects` },
    },
    openGraph: {
      title: isKo ? "변재일 - 프로젝트" : "Brasley Byun - Projects",
      url: `${SITE_URL}/${lang}/projects`,
      locale: isKo ? "ko_KR" : "en_US",
    },
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = getTranslations(l);
  const d = getData(l);
  const projects = [...d.projects].sort((a, b) => startKey(b.period) - startKey(a.period));

  return (
    <section className="bg-bg pb-24 pt-10">
      <div className="site-shell">
        <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.projectsPage.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-text md:text-5xl">{t.projectsPage.title}</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-text-secondary">{t.projectsPage.desc}</p>

        <ProjectsList
          projects={projects}
          labels={{
            situation: t.projectsPage.situation,
            problem: t.projectsPage.problem,
            actions: t.projectsPage.actions,
            results: t.projectsPage.results,
            learning: t.projectsPage.learning,
            all: t.projectsPage.all,
          }}
        />
      </div>
    </section>
  );
}
