import Link from 'next/link';

interface CrossContentLink {
  label: string;
  href: string;
  description: string;
  type: 'milestone' | 'triage' | 'guide' | 'tool' | 'illness';
}

interface CrossContentLinksProps {
  links: CrossContentLink[];
}

const typeStyles: Record<CrossContentLink['type'], { bg: string; text: string; label: string }> = {
  milestone: { bg: 'bg-blue-50', text: 'text-blue-700', label: 'Milestone' },
  triage: { bg: 'bg-red-50', text: 'text-red-700', label: 'Triage' },
  guide: { bg: 'bg-purple-50', text: 'text-purple-700', label: 'Guide' },
  tool: { bg: 'bg-green-50', text: 'text-green-700', label: 'Tool' },
  illness: { bg: 'bg-orange-50', text: 'text-orange-700', label: 'Illness Guide' },
};

export default function CrossContentLinks({ links }: CrossContentLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="related-resources-heading">
      <h2 id="related-resources-heading">Related Resources</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          const style = typeStyles[link.type];
          return (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text}`}>
                  {style.label}
                </span>
              </div>
              <p className="font-semibold text-sm text-foreground">{link.label}</p>
              <p className="text-xs text-muted mt-1">{link.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export type { CrossContentLink };
