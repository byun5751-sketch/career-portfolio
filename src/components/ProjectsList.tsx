"use client";

import { useMemo, useState } from "react";
import { ChevronRight, ChevronDown, Lightbulb, Target, Wrench, TrendingUp, BookOpen } from "lucide-react";
import type { Project } from "@/lib/data";

type Labels = {
  situation: string;
  problem: string;
  actions: string;
  results: string;
  learning: string;
  all: string;
};

export default function ProjectsList({ projects, labels }: { projects: Project[]; labels: Labels }) {
  const [company, setCompany] = useState<string>("__all__");

  // Unique companies in the order they first appear in the (already sorted) list.
  const companies = useMemo(() => {
    const seen: string[] = [];
    for (const p of projects) if (!seen.includes(p.company)) seen.push(p.company);
    return seen;
  }, [projects]);

  const filtered = company === "__all__" ? projects : projects.filter((p) => p.company === company);

  const tabs = [{ key: "__all__", label: labels.all }, ...companies.map((c) => ({ key: c, label: c }))];

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = company === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setCompany(tab.key)}
              aria-pressed={active}
              className={
                active
                  ? "rounded-full border border-accent bg-accent px-4 py-1.5 text-[13px] font-medium text-white transition-colors"
                  : "rounded-full border border-border bg-surface px-4 py-1.5 text-[13px] font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent"
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4">
        {filtered.map((p) => (
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
                    <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{labels.situation}</h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">{p.context}</p>
                </div>
                <div className="rounded-lg bg-surface-warm p-5">
                  <div className="flex items-center gap-2">
                    <Target size={13} className="text-orange-600" />
                    <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{labels.problem}</h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">{p.problem}</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-surface-warm p-5">
                <div className="flex items-center gap-2">
                  <Wrench size={13} className="text-violet-600" />
                  <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{labels.actions}</h3>
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
                    <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{labels.results}</h3>
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
                    <h3 className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">{labels.learning}</h3>
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
    </>
  );
}
