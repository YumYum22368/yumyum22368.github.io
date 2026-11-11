import { education, experience, highlights, profile, projects, skillIcons, skills } from "@/data/profile";

const nav = ["about", "experience", "skills", "projects", "contact"];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/10 py-16">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-emerald-400">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <a href="#" className="font-mono font-semibold text-white">
            methe<span className="text-emerald-400">.dev</span>
          </a>
          <ul className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => (
              <li key={n}>
                <a href={`#${n}`} className="capitalize hover:text-white">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4">
        <section id="about" className="py-20 sm:py-28">
          <p className="font-mono text-emerald-400">Hi, I&apos;m</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-slate-400 sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl leading-relaxed">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-emerald-500 px-5 py-2.5 font-medium text-black hover:bg-emerald-400"
            >
              Contact me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/20 px-5 py-2.5 font-medium text-white hover:border-white/40"
            >
              GitHub
            </a>
          </div>
          <dl className="mt-14 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <dt className="text-2xl font-bold text-white">{h.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{h.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="experience" title="Experience">
          {experience.map((job) => (
            <article key={job.company} className="border-l-2 border-emerald-500/40 pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <span className="font-mono text-sm text-slate-400">{job.period}</span>
              </div>
              <p className="text-emerald-400">{job.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-emerald-500">
                {job.points.map((p) => (
                  <li key={p} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <img
            src={`https://skillicons.dev/icons?i=${skillIcons}&perline=11`}
            alt="Tech stack icons"
            className="w-full max-w-2xl"
          />
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-semibold text-white">{s.group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-sm">
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" title="Projects">
          {projects.length === 0 ? (
            <p className="rounded-lg border border-dashed border-white/15 p-8 text-center text-slate-400">
              Personal projects coming soon.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((p) => (
                <article key={p.name} className="flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed">{p.description}</p>
                  <p className="mt-4 font-mono text-xs text-slate-400">{p.tech.join(" · ")}</p>
                  <div className="mt-4 flex gap-4 text-sm">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                        Live demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </Section>

        <Section id="education" title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
            <span className="font-mono text-sm text-slate-400">Graduated {education.graduated}</span>
          </div>
          <p className="text-emerald-400">{education.school}</p>
          <p className="mt-2">GPAX {education.gpax}</p>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl leading-relaxed">
            Open to new opportunities. The fastest way to reach me is by email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-xl font-semibold text-white underline decoration-emerald-500 underline-offset-4 hover:text-emerald-400"
          >
            {profile.email}
          </a>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
