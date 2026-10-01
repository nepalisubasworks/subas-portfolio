import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-4xl flex-col justify-center px-6">
      <p className="mb-4 font-mono text-sm text-emerald-400">Hi, my name is</p>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">{profile.name}.</h1>
      <h2 className="mt-2 text-3xl font-bold text-neutral-500 sm:text-5xl">{profile.role}.</h2>
      <p className="mt-6 max-w-xl text-lg text-neutral-400">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
        >
          View My Work
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
        >
          GitHub
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
