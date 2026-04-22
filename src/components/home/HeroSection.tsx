import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary-light), #fef5f0 55%, var(--color-background))",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Animated floating decorative elements — respects prefers-reduced-motion via globals.css */}
      <div
        className="pointer-events-none absolute top-8 right-[10%] h-16 w-16 rounded-full bg-primary/8"
        style={{ animation: "float 6s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 left-[8%] h-10 w-10 rounded-full bg-[#f5c6a0]/30"
        style={{ animation: "float-delayed 7s ease-in-out infinite 1s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-16 right-[15%] h-8 w-8 rounded-full bg-primary/6"
        style={{ animation: "float-slow 8s ease-in-out infinite 0.5s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-24 left-[12%] h-12 w-12 rounded-full bg-[#f5c6a0]/20"
        style={{ animation: "float 9s ease-in-out infinite 2s" }}
        aria-hidden="true"
      />

      {/* CSS illustration: sleeping baby motif (moon + stars) */}
      <div className="pointer-events-none mx-auto mb-8 flex items-center justify-center gap-3" aria-hidden="true">
        {/* Star */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary/40" style={{ animation: "twinkle 3s ease-in-out infinite" }}>
          <path d="M12 2l2.09 6.26L20.18 9l-4.91 3.82L16.54 19 12 15.77 7.46 19l1.27-6.18L3.82 9l6.09-.74L12 2z" fill="currentColor" />
        </svg>
        {/* Moon */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary/30">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
        </svg>
        {/* Star */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#f5c6a0]/60" style={{ animation: "twinkle 4s ease-in-out infinite 1s" }}>
          <path d="M12 2l2.09 6.26L20.18 9l-4.91 3.82L16.54 19 12 15.77 7.46 19l1.27-6.18L3.82 9l6.09-.74L12 2z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <h1
          id="hero-heading"
          className="text-foreground leading-tight tracking-tight"
        >
          Is your baby developing{" "}
          <span className="text-primary font-extrabold">on track</span>?
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Evidence-based milestone guidance from CDC, WHO, and AAP — no signup,
          no judgment, just the information you need.
        </p>

        <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-muted/80">
          Most babies develop at their own pace. We&rsquo;ll help you know when
          to celebrate and when to ask.
        </p>

        {/* Dual CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/milestones"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg no-underline"
          >
            Check Milestones
          </Link>
          <Link
            href="/concerns"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground no-underline"
          >
            I Have a Concern
          </Link>
        </div>

        {/* Trust badges — elegant horizontal strip */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-card/70 px-5 py-2.5 shadow-sm backdrop-blur-sm">
          <span className="text-xs font-medium text-muted">Based on guidelines from</span>
          <span className="source-badge source-badge-cdc">CDC</span>
          <span className="source-badge source-badge-who">WHO</span>
          <span className="source-badge source-badge-aap">AAP</span>
        </div>

        {/* Privacy tagline */}
        <p className="mt-4 text-sm text-muted-light">
          Free forever. No signup. 100% private.
        </p>
      </div>
    </section>
  );
}
