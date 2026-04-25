import Link from "next/link";
import ConcernSearch from "./ConcernSearch";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
      style={{
        background: "linear-gradient(135deg, #FFF0E6 0%, #FDE8F0 35%, #EDE5FB 65%, #E0F5F2 100%)",
      }}
    >
      {/* Decorative gradient circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[8%] h-24 w-24 rounded-full bg-[#38BDF8] opacity-[0.07] blur-2xl" />
        <div className="absolute top-[55%] right-[10%] h-32 w-32 rounded-full bg-[#34D399] opacity-[0.07] blur-2xl" />
        <div className="absolute bottom-[25%] left-[20%] h-20 w-20 rounded-full bg-[#F4A261] opacity-[0.06] blur-2xl" />
        <div className="absolute top-[10%] right-[25%] h-16 w-16 rounded-full bg-[#A78BFA] opacity-[0.06] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#34D399]">
              <span className="inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-50" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
              Evidence-Based &middot; 100% Free
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.75rem]"
          >
            Is your baby{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #F07167, #A78BFA, #38BDF8)",
              }}
            >
              on track
            </span>
            ?
            <span className="mt-3 block text-xl font-bold text-[#64748B] sm:text-2xl lg:text-3xl">
              We&rsquo;ll help you find out.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#64748B] sm:text-lg">
            Milestone checklists, growth charts, symptom triage, and daily tracking  -  all based on{" "}
            <strong className="text-[#1B2838]">CDC</strong>,{" "}
            <strong className="text-[#1B2838]">WHO</strong>, and{" "}
            <strong className="text-[#1B2838]">AAP</strong> guidelines.
          </p>

          {/* Concern search bar */}
          <div className="mt-8 w-full">
            <ConcernSearch />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/milestones"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#F07167] px-10 py-4 text-lg font-extrabold text-white shadow-lg shadow-[#F07167]/30 transition-all duration-200 hover:bg-[#E85D52] hover:shadow-xl hover:shadow-[#F07167]/40 hover:-translate-y-1 no-underline"
            >
              Check Milestones
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/concerns"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-extrabold text-[#1B2838] shadow-lg shadow-black/5 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 no-underline"
            >
              I Have a Concern
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F07167]" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="source-badge source-badge-cdc">CDC</span>
              <span className="source-badge source-badge-who">WHO</span>
              <span className="source-badge source-badge-aap">AAP</span>
              <span className="ml-1 text-xs font-semibold text-[#64748B]">guidelines</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16A34A]" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-semibold">No signup &middot; No tracking &middot; 100% private</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-8 w-full sm:h-12" fill="var(--color-background)">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}
