import { profile } from "@/data/portfolio";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-white">
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-neutral-400 sm:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-emerald-400">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
