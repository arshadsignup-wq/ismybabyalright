import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-card-alt border-t border-card-border mt-auto"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto px-5 py-8 sm:py-10">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
