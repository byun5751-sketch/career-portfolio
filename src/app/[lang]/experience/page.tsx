import type { Metadata } from "next";
import { ChevronRight, Building2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";

const SITE_URL = "https://brasley-byun.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isKo = lang === "ko";
  return {
    title: isKo ? "경력 사항" : "Work Experience",
    description: isKo
      ? "변재일의 경력 사항. BIGO Live, ZEISS Vision Korea, SAP Korea에서의 Business Development 및 Operations 경험."
      : "Work experience of Brasley Byun. Business Development and Operations roles at BIGO Live, ZEISS Vision Korea, and SAP Korea.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/experience`,
      languages: { en: `${SITE_URL}/en/experience`, ko: `${SITE_URL}/ko/experience` },
    },
    openGraph: {
      title: isKo ? "변재일 - 경력 사항" : "Brasley Byun - Work Experience",
      url: `${SITE_URL}/${lang}/experience`,
      locale: isKo ? "ko_KR" : "en_US",
    },
  };
}

export default async function ExperiencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = getTranslations(l);
  const d = getData(l);

  return (
    <section className="bg-bg pb-24 pt-10">
      <div className="site-shell">
        <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.experience.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-text md:text-5xl">{t.experience.title}</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-text-secondary">{t.experience.desc}</p>

        <div className="mt-12 grid gap-6">
          {d.experiences.map((exp, i) => {
            const isCurrent = i === 0;
            return (
              <div key={exp.company} className="rounded-lg border border-border bg-surface shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                      <Building2 size={18} />
                    </span>
                    <div>
                      <h2 className="font-serif text-xl text-text">{exp.company}</h2>
                      <p className="mt-0.5 text-[13px] text-accent">{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {isCurrent && (
                      <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-medium text-green-700">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-600" />
                        </span>
                        {l === "ko" ? "재직중" : "Current"}
                      </span>
                    )}
                    <span className="text-xs text-text-tertiary">{exp.period}</span>
                  </div>
                </div>

                <div className="px-5 py-5 sm:px-6">
                  <p className="text-sm leading-[1.85] text-text-secondary">{exp.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.keyFocus.map((kf) => (
                      <span key={kf} className="rounded-full bg-surface-warm px-2.5 py-0.5 text-[11px] text-text-tertiary">{kf}</span>
                    ))}
                  </div>

                  {exp.impact.length > 0 && (
                    <div className="mt-5 border-t border-border pt-5">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.experience.keyImpact}</p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {exp.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.7] text-text-secondary">
                            <ChevronRight size={13} className="mt-[3px] shrink-0 text-accent" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
