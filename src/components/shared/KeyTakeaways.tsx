export default function KeyTakeaways({
  takeaways,
  label = 'Key takeaways',
}: {
  takeaways: string[];
  label?: string;
}) {
  return (
    <div
      role="region"
      aria-label={label}
      className="key-takeaways rounded-xl bg-primary-light border border-primary/20 px-5 py-6 mb-6"
    >
      <p className="text-sm font-bold text-foreground mb-3">{label}</p>
      <ul className="space-y-2">
        {takeaways.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
          >
            <span
              className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
