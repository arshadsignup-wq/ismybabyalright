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

        {/* Social links */}
        <div className="mb-6 pb-6 border-b border-border">
          <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Follow us</p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/ismybabyalright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="Follow us on X"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://facebook.com/ismybabyalright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="Follow us on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://instagram.com/ismybabyalright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
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
