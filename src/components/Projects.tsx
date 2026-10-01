import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <article
          key={p.title}
          className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-emerald-400/60"
        >
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-neutral-400">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-emerald-400">
            {p.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-neutral-300 hover:text-emerald-400"
            >
              View project →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
