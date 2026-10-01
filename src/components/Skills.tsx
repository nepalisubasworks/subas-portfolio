import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {skills.map((g) => (
        <div key={g.group}>
          <h3 className="mb-3 font-semibold text-white">{g.group}</h3>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <li
                key={s}
                className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-neutral-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
