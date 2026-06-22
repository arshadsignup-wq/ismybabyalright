import Link from "next/link";

const footerNav = [
  {
    heading: "Milestones & Development",
    links: [
      { href: "/milestones", label: "Milestones by Age" },
      { href: "/concerns", label: "Common Concerns" },
      { href: "/triage", label: "Symptom Checker" },
      { href: "/developmental-activities", label: "Play Activities" },
      { href: "/growth-spurts", label: "Growth Spurts" },
      { href: "/age-advice", label: "Age-Based Advice" },
    ],
  },
  {
    heading: "Tools & Calculators",
    links: [
      { href: "/tools", label: "All Tools" },
      { href: "/tools/growth", label: "Growth Calculator" },
      { href: "/tools/due-date", label: "Due Date Calculator" },
      { href: "/tools/medicine-dosage", label: "Medicine Dosage" },
      { href: "/tools/sleep-schedule", label: "Sleep Schedule" },
      { href: "/tools/feeding-amount", label: "Feeding Amount" },
      { href: "/tools/pregnancy-tracker", label: "Pregnancy Tracker" },
    ],
  },
  {
    heading: "Guides & Resources",
    links: [
      { href: "/food", label: "Food Introduction" },
      { href: "/sleep", label: "Sleep Guide" },
      { href: "/feeding", label: "Feeding Guide" },
      { href: "/teething", label: "Teething Guide" },
      { href: "/poop-guide", label: "Poop Guide" },
      { href: "/skin-guide", label: "Skin Guide" },
      { href: "/tummy-time", label: "Tummy Time" },
      { href: "/first-aid", label: "First Aid" },
    ],
  },
  {
    heading: "Health & Support",
    links: [
      { href: "/vaccines", label: "Vaccine Tracker" },
      { href: "/doctor-visits", label: "Doctor Visit Prep" },
      { href: "/mental-health", label: "Mental Health" },
      { href: "/mental-health/check-in", label: "Am I Okay? Check-in" },
      { href: "/resources/early-intervention", label: "Early Intervention" },
      { href: "/resources/guides", label: "Condition Guides" },
      { href: "/checklists", label: "Checklists" },
      { href: "/baby-names", label: "Baby Names" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-card-alt border-t border-card-border mt-auto"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-5 py-8 sm:py-10">
        {/* Site navigation */}
        <nav aria-label="Footer navigation" className="mb-8 pb-8 border-b border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerNav.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                  {section.heading}
                </h2>
                <ul className="space-y-2" role="list">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-muted hover:text-primary transition-colors no-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Disclaimer */}
        <div className="mb-6 pb-6 border-b border-border">
          <p className="text-sm text-muted leading-relaxed">
            <strong className="font-semibold text-foreground">
              Disclaimer:
            </strong>{" "}
            This site provides general information based on CDC, WHO, and AAP
            guidelines. It is not medical advice. Always consult your
            pediatrician.
          </p>
        </div>

        {/* Crisis helplines */}
        <div className="mb-6 pb-6 border-b border-border">
          <p className="text-sm font-semibold text-foreground mb-2">
            If you&apos;re in crisis:
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <p>
              <span className="font-medium text-foreground">
                Postpartum Support International:
              </span>{" "}
              <a
                href="tel:1-800-944-4773"
                className="font-semibold text-primary underline"
              >
                1-800-944-4773
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">
                Crisis Text Line:
              </span>{" "}
              Text{" "}
              <span className="font-semibold text-primary">HOME</span> to{" "}
              <a
                href="sms:741741&body=HOME"
                className="font-semibold text-primary underline"
              >
                741741
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">
                Suicide &amp; Crisis Lifeline:
              </span>{" "}
              <a
                href="tel:988"
                className="font-semibold text-primary underline"
              >
                988
              </a>
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-muted-light">
            &copy; {currentYear} ismybabyalright. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/sources"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Sources &amp; References
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Privacy
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Disclaimer
            </Link>
            <Link
              href="/about"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
