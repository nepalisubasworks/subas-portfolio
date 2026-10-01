type Item = { title: string; place: string; period: string; description: string };

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-8 border-l border-neutral-800 pl-6">
      {items.map((i) => (
        <li key={i.title + i.period} className="relative">
          <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-emerald-400" />
          <h3 className="font-semibold text-white">
            {i.title} <span className="text-neutral-500">· {i.place}</span>
          </h3>
          <p className="font-mono text-xs text-neutral-500">{i.period}</p>
          <p className="mt-2 text-neutral-400">{i.description}</p>
        </li>
      ))}
    </ol>
  );
}
