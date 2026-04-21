import Link from "next/link";

interface SelfReferralBoxProps {
  showPhone?: boolean;
}

export default function SelfReferralBox({
  showPhone = false,
}: SelfReferralBoxProps) {
  return (
    <aside
      className="card border-l-4 border-l-primary"
      aria-label="Early Intervention self-referral information"
    >
      <div className="flex gap-3">
        {/* Info icon */}
        <div className="flex-shrink-0 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>

        <div>
          <p className="text-base font-semibold text-foreground mb-1.5">
            You can self-refer to Early Intervention
          </p>
          <p className="text-sm text-muted leading-relaxed mb-3">
            You don&apos;t need a doctor&apos;s referral. You can contact your
            state&apos;s Early Intervention program directly. Evaluations are
            free and provided regardless of income.
          </p>

          <Link
            href="/resources/early-intervention"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors min-h-[44px]"
          >
            Find your state&apos;s Early Intervention program
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>

          {showPhone && (
            <p className="mt-2 text-sm text-muted">
              <span className="font-medium text-foreground">
                National Hotline:
              </span>{" "}
              <a
                href="tel:1-800-522-3274"
                className="font-semibold text-primary underline"
              >
                1-800-522-3274
              </a>{" "}
              <span className="text-muted-light">(NICHD Information)</span>
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
