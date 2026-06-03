import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <Link
      href={`/${lang}/projects#${project.slug}`}
      className="group block rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-strong hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">{project.category}</span>
        <ArrowUpRight size={14} className="text-text-tertiary transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="mt-4 font-serif text-lg text-text">{project.title}</h3>
      <p className="mt-1 text-[12px] text-text-tertiary">{project.company} &middot; {project.period}</p>
      <ul className="mt-4 space-y-2">
        {project.impact.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-text-secondary">
            <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
