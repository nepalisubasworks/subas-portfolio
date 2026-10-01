import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <div>
      <p className="max-w-xl text-lg text-neutral-400">
        I&apos;m open to internships, collaborations and learning opportunities. Say hello anytime.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
      >
        {profile.email}
      </a>
      <div className="mt-6 flex gap-6 text-sm text-neutral-400">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
