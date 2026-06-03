import Link from "next/link";
import Image from "next/image";
import {
  Search, Settings, Users, Briefcase, BarChart3, Megaphone,
  Database, FolderKanban, ArrowRight, Building2, GraduationCap, Award,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";
import { ProjectCard } from "@/components/ProjectCard";

const skillIcons: Record<string, React.ReactNode> = {
  "Business Development": <Briefcase size={18} />,
  "Sales Operations": <BarChart3 size={18} />,
  "Marketing Operations": <Megaphone size={18} />,
  "Data & Intelligence": <Database size={18} />,
  "Project Management": <FolderKanban size={18} />,
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = getTranslations(l);
  const d = getData(l);
  const skillKeys = Object.keys(d.skills);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="site-shell grid items-center gap-12 pb-20 pt-20 md:grid-cols-[minmax(0,1fr)_340px] md:pt-24">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
              </span>
              <span className="text-xs text-text-secondary">{t.hero.status}</span>
            </div>

            <h1 className="mt-8 font-serif text-5xl text-text md:text-7xl">
              {t.hero.name}
            </h1>
            <p className="mt-4 text-lg text-accent md:text-xl">
              {t.hero.role}
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.8] text-text-secondary">
              {t.hero.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={`/${lang}/projects`} className="group flex items-center gap-2 rounded-lg bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text">
                {t.hero.viewProjects} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href={`/${lang}/experience`} className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong">
                {t.hero.experience}
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[320px] md:max-w-none">
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
              <Image
                src="/profile.jpeg"
                alt={t.hero.name}
                width={640}
                height={640}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-surface-warm">
        <div className="site-shell grid grid-cols-2 gap-0 md:grid-cols-4">
          {[
            { icon: <Building2 size={16} />, value: "3", label: t.stats.companies },
            { icon: <FolderKanban size={16} />, value: "10+", label: t.stats.projects },
            { icon: <GraduationCap size={16} />, value: "4.41", label: t.stats.gpa },
            { icon: <Award size={16} />, value: "10+", label: t.stats.awards },
          ].map((s, i) => (
            <div key={s.label} className={`flex justify-center py-7 ${i < 3 ? "md:border-r md:border-border" : ""}`}>
              <div className="flex min-w-32 items-center gap-3.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-bg text-accent">{s.icon}</span>
                <div>
                  <p className="text-xl font-semibold text-text">{s.value}</p>
                  <p className="text-[11px] text-text-tertiary">{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Keywords */}
      <section className="py-24">
        <div className="site-shell">
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.direction.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-text md:text-4xl">{t.direction.title}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.direction.items.map((item, i) => {
              const icons = [<Search key="s" size={20} />, <Settings key="g" size={20} />, <Users key="u" size={20} />];
              return (
                <div key={item.num} className="group">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      {icons[i]}
                    </span>
                    <span className="font-serif text-4xl text-border-strong">{item.num}</span>
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold text-text">{item.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-[1.8] text-text-secondary">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border bg-surface-warm py-24">
        <div className="site-shell">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.featured.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl text-text md:text-4xl">{t.featured.title}</h2>
              <p className="mt-3 max-w-md text-[14px] leading-[1.8] text-text-secondary">{t.featured.desc}</p>
            </div>
            <Link href={`/${lang}/projects`} className="group flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-accent">
              {t.featured.allProjects} <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {d.featured.map((p) => <ProjectCard key={p.slug} project={p} lang={l} />)}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="site-shell">
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{t.skills.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-text md:text-4xl">{t.skills.title}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillKeys.map((key) => (
              <div key={key} className="rounded-lg border border-border bg-surface p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-accent">{skillIcons[key]}</span>
                  <h3 className="text-[13px] font-semibold text-text">{key}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {d.skills[key].map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-text-secondary">
                      <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface-warm py-24">
        <div className="site-shell text-center">
          <h2 className="font-serif text-3xl text-text md:text-4xl">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.8] text-text-secondary">{t.cta.desc}</p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="mailto:byunjaeil77@gmail.com" className="group flex items-center gap-2 rounded-lg bg-highlight px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-text">
              {t.cta.email} <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="https://www.linkedin.com/in/jaeilbyun" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-surface px-5 py-2.5 text-[13px] font-medium text-text hover:border-border-strong">
              {t.cta.linkedin}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
