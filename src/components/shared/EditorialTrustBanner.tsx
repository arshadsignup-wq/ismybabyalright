import Link from 'next/link';
import { allConcerns } from '@/data/concerns';
import { reviewers, editorialProcess } from '@/data/editorial';

interface EditorialTrustBannerProps {
  variant?: 'compact' | 'full';
}

export default function EditorialTrustBanner({
  variant = 'compact',
}: EditorialTrustBannerProps) {
  if (variant === 'compact') {
    return (
      <div className="rounded-xl border border-[#E8E2D9] bg-white p-4 text-xs text-muted">
        <p>
          All content follows our{' '}
          <Link href="/editorial-policy" className="text-primary hover:underline font-semibold">
            editorial policy
          </Link>{' '}
          and is reviewed against published clinical guidelines.
        </p>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span>{allConcerns.length.toLocaleString()} evidence-based guides</span>
          <span>{editorialProcess.sourceHierarchy.length} authoritative medical sources</span>
          <span>{reviewers.length} medical advisory board members</span>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-3">
        Our commitment to accuracy
      </h2>
      <div className="text-sm text-muted leading-relaxed space-y-3">
        <p>
          Every page is reviewed against published guidelines from authoritative
          medical organizations including the CDC, WHO, AAP, ACOG, ASHA, and NIH.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium">
          <span>{allConcerns.length.toLocaleString()} evidence-based guides</span>
          <span>{editorialProcess.sourceHierarchy.length} authoritative medical sources</span>
          <span>{reviewers.length} medical advisory board members</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/editorial-policy"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Editorial Policy
          </Link>
          <Link
            href="/medical-review"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Medical Review Process
          </Link>
          <Link
            href="/sources"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Sources &amp; References
          </Link>
        </div>
      </div>
    </div>
  );
}
