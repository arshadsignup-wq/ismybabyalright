interface BottomLineProps {
  summary: string;
  supportiveMessage?: string;
}

export default function BottomLine({
  summary,
  supportiveMessage = 'Trust your instincts. If something feels wrong, reach out to your pediatrician. Worrying about your baby means you care — that is a good thing.',
}: BottomLineProps) {
  return (
    <div
      role="region"
      aria-label="Bottom line"
      className="bottom-line rounded-xl bg-primary-light border border-primary/20 px-5 py-6 mt-10"
    >
      <p className="text-sm font-bold text-foreground mb-2">Bottom line</p>
      <p className="text-sm text-muted leading-relaxed">{summary}</p>
      {supportiveMessage && (
        <p className="text-sm text-muted leading-relaxed mt-3 pt-3 border-t border-primary/10">
          {supportiveMessage}
        </p>
      )}
    </div>
  );
}
