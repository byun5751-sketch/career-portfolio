import type { Metadata } from "next";
import { ChevronRight, ChevronDown, Lightbulb, Target, Wrench, TrendingUp, BookOpen } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";

const SITE_URL = "https://brasley-byun.vercel.app";

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

        <div className="mt-12 grid gap-4">
          {projects.map((p) => (
            <details
              key={p.slug}
              id={p.slug}
              className="group scroll-mt-20 rounded-lg border border-border bg-surface shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">{p.category}</span>
                    <span className="text-[11px] text-text-tertiary">{p.company}</span>
                    <span className="text-[11px] text-text-tertiary">·</span>
                    <span className="text-[11px] text-text-tertiary">{p.period}</span>
                  </div>

                  <h2 className="mt-3 font-serif text-xl text-text">{p.title}</h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.impact.map((item) => (
                      <span key={item} className="flex items-center gap-1.5 rounded-full bg-accent-bg px-3 py-1 text-[11px] font-medium text-accent">
                        <TrendingUp size={11} /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                <ChevronDown
                  size={20}
                  className="mt-1 shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-surface-warm p-5">
                    <div className="flex items-center gap-2">
                      <Lightbulb size={13} className="text-blue-600" />
                      <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.situation}</h3>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">{p.context}</p>
                  </div>
                  <div className="rounded-lg bg-surface-warm p-5">
                    <div className="flex items-center gap-2">
                      <Target size={13} className="text-orange-600" />
                      <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.problem}</h3>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">{p.problem}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-surface-warm p-5">
                  <div className="flex items-center gap-2">
                    <Wrench size={13} className="text-violet-600" />
                    <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.actions}</h3>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {p.actions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] leading-[1.8] text-text-secondary">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-bg text-[10px] font-bold text-accent">{i + 1}</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-surface-warm p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={13} className="text-green-600" />
                      <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.results}</h3>
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-[13px] leading-[1.8] text-text-secondary">
                          <ChevronRight size={13} className="mt-0.5 shrink-0 text-green-600" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-accent-bg bg-accent-bg/30 p-5">
                    <div className="flex items-center gap-2">
                      <BookOpen size={13} className="text-accent" />
                      <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.learning}</h3>
                    </div>
                    <p className="mt-3 text-[13px] italic leading-[1.8] text-text-secondary">&ldquo;{p.learning}&rdquo;</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <span key={s} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-text-tertiary">{s}</span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
