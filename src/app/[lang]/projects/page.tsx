import { ChevronRight, Lightbulb, Target, Wrench, TrendingUp, BookOpen } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = getTranslations(l);
  const d = getData(l);
  const companies = [...new Set(d.projects.map((p) => p.company))];

  return (
    <section className="bg-bg pb-24 pt-10">
      <div className="site-shell">
        <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.projectsPage.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-text md:text-5xl">{t.projectsPage.title}</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-text-secondary">{t.projectsPage.desc}</p>

        {companies.map((company) => {
          const cp = d.projects.filter((p) => p.company === company);
          return (
            <div key={company} className="mt-14">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <h2 className="font-serif text-xl text-text">{company}</h2>
                <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[11px] text-accent">{cp.length}</span>
              </div>

              <div className="mt-6 grid gap-6">
                {cp.map((p) => (
                  <article key={p.slug} id={p.slug} className="scroll-mt-20 rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">{p.category}</span>
                      <span className="text-[11px] text-text-tertiary">{p.period}</span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl text-text">{p.title}</h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.impact.map((item) => (
                        <span key={item} className="flex items-center gap-1.5 rounded-full bg-accent-bg px-3 py-1 text-[11px] font-medium text-accent">
                          <TrendingUp size={11} /> {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-surface-warm p-5">
                        <div className="flex items-center gap-2">
                          <Lightbulb size={13} className="text-blue-600" />
                          <h4 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.situation}</h4>
                        </div>
                        <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">{p.context}</p>
                      </div>
                      <div className="rounded-lg bg-surface-warm p-5">
                        <div className="flex items-center gap-2">
                          <Target size={13} className="text-orange-600" />
                          <h4 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.problem}</h4>
                        </div>
                        <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">{p.problem}</p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-surface-warm p-5">
                      <div className="flex items-center gap-2">
                        <Wrench size={13} className="text-violet-600" />
                        <h4 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.actions}</h4>
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
                          <h4 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.results}</h4>
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
                          <h4 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{t.projectsPage.learning}</h4>
                        </div>
                        <p className="mt-3 text-[13px] italic leading-[1.8] text-text-secondary">&ldquo;{p.learning}&rdquo;</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.skills.map((s) => (
                        <span key={s} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-text-tertiary">{s}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
