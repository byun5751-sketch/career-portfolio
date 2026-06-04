import type { Metadata } from "next";
import { GraduationCap, Trophy, Award, BadgeCheck, Star, Calendar, BookOpen, Medal } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";

const SITE_URL = "https://brasley-byun.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isKo = lang === "ko";
  return {
    title: isKo ? "학력" : "Education",
    description: isKo
      ? "변재일의 학력 사항. 중앙대학교 국제물류학과/경영학 학사, 최우등 졸업(차석), GPA 4.41/4.50."
      : "Education of Brasley Byun. B.A. International Logistics / Business Administration at Chung-Ang University. Summa Cum Laude, Salutatorian, GPA 4.41/4.50.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/education`,
      languages: { en: `${SITE_URL}/en/education`, ko: `${SITE_URL}/ko/education` },
    },
    openGraph: {
      title: isKo ? "변재일 - 학력" : "Brasley Byun - Education",
      url: `${SITE_URL}/${lang}/education`,
      locale: isKo ? "ko_KR" : "en_US",
    },
  };
}

export default async function EducationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = getTranslations(l);
  const d = getData(l);

  const highlights = [
    { label: t.educationPage.gpaLabel, value: "4.41", sub: "/ 4.50", icon: <Star size={16} /> },
    { label: t.educationPage.graduation, value: t.educationPage.summaCumLaude, sub: "", icon: <Trophy size={16} /> },
    { label: t.educationPage.standing, value: t.educationPage.salutatorian, sub: t.educationPage.secondInClass, icon: <Award size={16} /> },
    { label: t.educationPage.timeline, value: t.educationPage.earlyGraduation, sub: "", icon: <GraduationCap size={16} /> },
  ];

  return (
    <section className="education-page bg-bg">
      <div className="site-shell">
        <div className="education-layout">
          <aside className="education-sidebar">
            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
              <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.educationPage.eyebrow}</p>
              <h1 className="mt-3 font-serif text-4xl leading-tight text-text md:text-5xl">{t.educationPage.title}</h1>

              <div className="mt-8 flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                  <GraduationCap size={26} />
                </span>
                <div className="min-w-0">
                  <h2 className="font-serif text-2xl leading-tight text-text">{t.educationPage.university}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{t.educationPage.degree}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-xs text-text-tertiary">
                    <Calendar size={12} />
                    2019.03 ~ 2024.02
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <BookOpen size={15} className="text-accent" />
                <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
                  {t.educationPage.academicFocus}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {d.academicFocus.map((focus) => (
                  <span key={focus} className="rounded-full bg-surface-warm px-3 py-1 text-xs text-text-secondary">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="education-main">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="min-h-32 rounded-lg border border-border bg-surface p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-text-tertiary">{item.label}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                      {item.icon}
                    </span>
                  </div>
                  <p className="mt-5 text-xl font-semibold leading-snug text-text">{item.value}</p>
                  {item.sub && <p className="mt-1 text-xs text-text-tertiary">{item.sub}</p>}
                </div>
              ))}
            </div>

            <section className="rounded-lg border border-border bg-surface shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Trophy size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.educationPage.recognition}</p>
                    <h2 className="font-serif text-2xl leading-tight text-text">{t.educationPage.awardsTitle}</h2>
                  </div>
                </div>
                <span className="rounded-full bg-surface-warm px-3 py-1 text-xs text-text-tertiary">
                  {d.awards.length}
                </span>
              </div>

              <div className="divide-y divide-border">
                {d.awards.map((award) => (
                  <div key={`${award.date}-${award.award}`} className="grid gap-3 px-5 py-4 transition-colors hover:bg-surface-warm sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center sm:px-6">
                    <span className="text-xs tabular-nums text-text-tertiary">{award.date}</span>
                    <div className="min-w-0">
                      <p className="break-words text-sm font-medium leading-relaxed text-text">{award.award}</p>
                      <p className="mt-1 text-xs text-text-tertiary">{award.org}</p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        award.category === "Company" || award.category === "?뚯궗"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {award.category}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700">
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.educationPage.qualifications}</p>
                  <h2 className="font-serif text-2xl leading-tight text-text">{t.educationPage.certsTitle}</h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {d.certifications.map((cert) => (
                  <div key={cert.name} className="rounded-lg border border-border bg-bg p-4 transition-colors hover:border-accent/40 hover:bg-surface">
                    <div className="flex items-start justify-between gap-3">
                      <p className="break-words text-sm font-medium leading-relaxed text-text">{cert.name}</p>
                      <Medal size={15} className="shrink-0 text-text-tertiary" />
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {cert.level && (
                        <span className="rounded-md bg-accent-bg px-2 py-0.5 text-xs font-semibold text-accent">
                          {cert.level}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-text-tertiary">
                        <Calendar size={11} />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
