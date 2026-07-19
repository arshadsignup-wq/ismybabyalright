import Link from "next/link";

const footerNav = [
  {
    heading: "Milestones & Development",
    links: [
      { href: "/milestones", label: "Milestones by Age" },
      { href: "/development", label: "Development by Month" },
      { href: "/concerns", label: "Common Concerns" },
      { href: "/conditions", label: "Conditions A-Z" },
      { href: "/triage", label: "Symptom Checker" },
      { href: "/symptoms", label: "Symptom Index" },
      { href: "/developmental-activities", label: "Play Activities" },
      { href: "/growth-spurts", label: "Growth Spurts" },
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
      { href: "/newborn", label: "Newborn Guide" },
      { href: "/toddler", label: "Toddler Guide" },
      { href: "/food", label: "Food Introduction" },
      { href: "/sleep", label: "Sleep Guide" },
      { href: "/feeding", label: "Feeding Guide" },
      { href: "/safety", label: "Safety Guide" },
      { href: "/potty-training", label: "Potty Training" },
      { href: "/first-aid", label: "First Aid" },
    ],
  },
  {
    heading: "Health & Support",
    links: [
      { href: "/when-to-call-the-doctor", label: "When to Call the Doctor" },
      { href: "/vaccines", label: "Vaccine Tracker" },
      { href: "/doctor-visits", label: "Doctor Visit Prep" },
      { href: "/pregnancy", label: "Pregnancy" },
      { href: "/postpartum", label: "Postpartum Recovery" },
      { href: "/mental-health", label: "Mental Health" },
      { href: "/resources/early-intervention", label: "Early Intervention" },
      { href: "/glossary", label: "Medical Glossary" },
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
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3" aria-hidden="true">
                  {section.heading}
                </p>
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
            <Link
              href="/editorial-policy"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Editorial Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
