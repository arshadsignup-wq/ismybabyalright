import Link from "next/link";

interface GuideLink {
  href: string;
  label: string;
  icon: string;
}

const allGuideLinks: GuideLink[] = [
  { href: "/food", label: "Food Introduction Guide", icon: "🥕" },
  { href: "/sleep", label: "Sleep Guide by Age", icon: "🌙" },
  { href: "/teething", label: "Teething Guide", icon: "🦷" },
  { href: "/poop-guide", label: "Poop Color Guide", icon: "💩" },
  { href: "/feeding", label: "Breastfeeding & Pumping", icon: "🍼" },
  { href: "/tummy-time", label: "Tummy Time Guide", icon: "👶" },
  { href: "/growth-spurts", label: "Growth Spurts Timeline", icon: "📈" },
  { href: "/skin-guide", label: "Baby Skin Conditions", icon: "🧴" },
  { href: "/doctor-visits", label: "Well-Baby Visit Prep", icon: "🩺" },
];

interface RelatedGuidesProps {
  currentPath: string;
}

export default function RelatedGuides({ currentPath }: RelatedGuidesProps) {
  const links = allGuideLinks.filter((g) => g.href !== currentPath).slice(0, 4);

  return (
    <section className="mt-8 pt-6 border-t border-border">
      <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
        Related Guides
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-card-border hover:border-primary hover:bg-primary-light transition-colors no-underline"
          >
            <span aria-hidden="true" className="text-lg">{guide.icon}</span>
            <span className="text-sm font-medium text-foreground">{guide.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
