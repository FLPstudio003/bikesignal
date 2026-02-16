export default function Card({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href?: string;
  tag?: string;
}) {
  const inner = (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      {tag ? <div className="text-xs text-white/60 mb-3">{tag}</div> : null}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
      {href ? <div className="mt-4 text-sm text-green-400">Viac →</div> : null}
    </div>
  );

  if (!href) return inner;

  return (
    <a href={href} className="block">
      {inner}
    </a>
  );
}
