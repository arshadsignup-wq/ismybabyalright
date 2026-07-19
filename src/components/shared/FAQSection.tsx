export default function FAQSection({
  items,
  heading = 'Frequently asked questions',
}: {
  items: { question: string; answer: string }[];
  heading?: string;
}) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-3">{heading}</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <details
            key={i}
            className="rounded-lg border border-[#E8E2D9] bg-card-alt"
          >
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {item.question}
            </summary>
            <div className="px-4 pb-3 text-sm text-muted leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
