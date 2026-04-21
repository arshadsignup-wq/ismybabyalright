import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Page Not Found
      </h2>
      <p className="text-muted mb-8 max-w-md mx-auto">
        We couldn&apos;t find the page you&apos;re looking for. Here are some
        helpful places to start:
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors no-underline"
        >
          Go Home
        </Link>
        <Link
          href="/milestones"
          className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm font-semibold hover:bg-card-alt transition-colors no-underline"
        >
          Browse Milestones
        </Link>
        <Link
          href="/concerns"
          className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm font-semibold hover:bg-card-alt transition-colors no-underline"
        >
          Common Concerns
        </Link>
      </div>
    </div>
  );
}
