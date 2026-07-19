import Link from 'next/link';

interface MedicalReviewAttributionProps {
  sources?: string[];
  reviewDate?: string;
  showEditorialPolicyLink?: boolean;
}

export default function MedicalReviewAttribution({
  sources,
  reviewDate,
  showEditorialPolicyLink = true,
}: MedicalReviewAttributionProps) {
  const sourceList = sources && sources.length > 0 ? sources.join(', ') : 'CDC, WHO, AAP';

  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white p-4 flex items-start gap-3">
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
        className="flex-shrink-0 mt-0.5 text-muted"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <div className="text-xs text-muted leading-relaxed">
        <p>Content reviewed against published {sourceList} guidelines</p>
        <p className="mt-1">
          {reviewDate && (
            <span>Last reviewed: {reviewDate}</span>
          )}
          {reviewDate && showEditorialPolicyLink && <span> · </span>}
          {showEditorialPolicyLink && (
            <Link
              href="/editorial-policy"
              className="text-primary hover:underline"
            >
              Editorial policy
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
