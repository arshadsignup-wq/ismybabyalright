export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-primary-light px-5 py-16 sm:px-8 sm:py-24"
      aria-labelledby="hero-heading"
    >
      {/* Subtle decorative background circles */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h1
          id="hero-heading"
          className="text-foreground leading-tight tracking-tight"
        >
          Is your baby developing{" "}
          <span className="text-primary">on track</span>?
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Evidence-based milestone guidance from CDC, WHO, and AAP — no signup,
          no judgment, just the information you need.
        </p>

        {/* Trust indicators */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          aria-label="Trusted sources"
        >
          <span className="source-badge source-badge-cdc">CDC</span>
          <span className="source-badge source-badge-who">WHO</span>
          <span className="source-badge source-badge-aap">AAP</span>
        </div>
      </div>
    </section>
  );
}
