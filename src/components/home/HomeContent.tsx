"use client";

import { useProfile, useEvents } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import HeroSection from "./HeroSection";
import EntryPathCards from "./EntryPathCards";
import GentleRedirect from "@/components/shared/GentleRedirect";
import RightNowCard from "@/components/tracker/RightNowCard";
import QuickTapGrid from "@/components/tracker/QuickTapGrid";
import Link from "next/link";
import { allConcerns } from "@/data/concerns";
import type { ConcernCategory } from "@/data/concerns/types";

const categoryColors: Record<ConcernCategory, string> = {
  physical: "#38BDF8",
  communication: "#A78BFA",
  feeding: "#F4A261",
  sleep: "#818CF8",
  skin: "#F472B6",
  digestive: "#34D399",
  behavior: "#FBBF24",
  medical: "#F07167",
};

const categoryLabels: Record<ConcernCategory, string> = {
  physical: "Physical",
  communication: "Speech",
  feeding: "Feeding",
  sleep: "Sleep",
  skin: "Skin",
  digestive: "Digestive",
  behavior: "Behavior",
  medical: "Medical",
};

/* ------------------------------------------------------------------ */
/*  Returning-user quick-access cards                                  */
/* ------------------------------------------------------------------ */

const quickLinks = [
  {
    label: "Milestones",
    href: "/milestones",
    bg: "#FEF6EC",
    color: "#F4A261",
    textColor: "#7A4D1E",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l5.5 11.2 12.3 1.8-8.9 8.7 2.1 12.3L24 31.7 12.9 38l2.1-12.3-8.9-8.7 12.3-1.8z" fill="#F4A261" />
      </svg>
    ),
  },
  {
    label: "Concerns",
    href: "/concerns",
    bg: "#FEF0EE",
    color: "#F07167",
    textColor: "#9B2C2C",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F07167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Health",
    href: "/triage",
    bg: "#FFF1F5",
    color: "#F472B6",
    textColor: "#831843",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
        <path d="M24 42S4 30 4 17a10 10 0 0 1 20 0 10 10 0 0 1 20 0c0 13-20 25-20 25z" fill="#F472B6" />
      </svg>
    ),
  },
  {
    label: "Food",
    href: "/food",
    bg: "#FEF6EC",
    color: "#F4A261",
    textColor: "#7A4D1E",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4A261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Popular concerns for new-visitor preview                           */
/* ------------------------------------------------------------------ */

const popularSlugs = [
  "not-walking",
  "not-talking",
  "not-crawling",
  "not-rolling-over",
  "not-responding-to-name",
  "green-poop",
];

const popularConcerns = popularSlugs
  .map((slug) => allConcerns.find((c) => c.slug === slug))
  .filter(Boolean);

/* ------------------------------------------------------------------ */
/*  Greeting helper                                                    */
/* ------------------------------------------------------------------ */

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HomeContent() {
  const { profile } = useProfile();
  const { events, addEvent, updateEvent } = useEvents();

  /* ---- Returning user ---- */
  if (profile) {
    const ageMonths = getAgeInMonthsFromDate(profile.birthDate);

    return (
      <div className="mx-auto w-full max-w-lg px-4 py-6 sm:py-10 flex flex-col gap-5">
        {/* Greeting */}
        <div className="text-center">
          <p className="text-lg font-bold text-foreground">
            {getGreeting()}, {profile.name}&rsquo;s parent
          </p>
          <span className="mt-1 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary">
            {ageMonths} {ageMonths === 1 ? "month" : "months"} old
          </span>
        </div>

        <RightNowCard
          events={events}
          babyName={profile.name}
          ageMonths={ageMonths}
        />

        <QuickTapGrid
          babyId={profile.id}
          events={events}
          volumeUnit="oz"
          onLog={addEvent}
          onUpdate={updateEvent}
        />

        {/* Quick-access cards */}
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl border border-[#E8E2D9] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 no-underline"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
              </div>
              <span className="text-sm font-bold text-foreground">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <GentleRedirect />
      </div>
    );
  }

  /* ---- New visitor ---- */
  return (
    <>
      <HeroSection />

      <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <EntryPathCards />

        {/* Popular Concerns  -  content preview */}
        <section className="mt-20" aria-labelledby="popular-concerns-heading">
          <h2
            id="popular-concerns-heading"
            className="mb-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            What parents are asking
          </h2>
          <p className="mx-auto mb-10 max-w-md text-center text-muted">
            Real answers to the most common worries  -  backed by pediatric guidelines.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularConcerns.map((c, i) => {
              const color = categoryColors[c!.category];
              return (
                <Link
                  key={c!.slug}
                  href={`/concerns/${c!.slug}`}
                  className="group relative flex flex-col gap-2 rounded-2xl border border-[#E8E2D9] bg-white p-5 no-underline transition-all duration-200 hover:shadow-lg hover:-translate-y-1 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Category accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {categoryLabels[c!.category]}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-foreground group-hover:text-[#F07167] transition-colors sm:text-base">
                    {c!.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted line-clamp-2 sm:text-sm">
                    {c!.quickAnswer}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-[#F07167] opacity-70 transition-opacity duration-200 group-hover:opacity-100">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/concerns"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
            >
              See all {allConcerns.length}+ concerns
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Trust + Privacy */}
        <div className="mt-20 rounded-[1.5rem] p-6 text-center sm:p-8" style={{ background: "linear-gradient(135deg, #E0F5F2, #EFF8FF, #F5F3FF)" }}>
          <div className="flex flex-col items-center gap-5">
            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-foreground">
              <span>{allConcerns.length}+ Concerns</span>
              <span className="text-muted/40">&middot;</span>
              <span>11 Triage Trees</span>
              <span className="text-muted/40">&middot;</span>
              <span>36 Milestones</span>
              <span className="text-muted/40">&middot;</span>
              <span>100% Free</span>
            </div>

            <div className="inline-flex items-center gap-2.5">
              <span className="source-badge source-badge-cdc">CDC</span>
              <span className="source-badge source-badge-who">WHO</span>
              <span className="source-badge source-badge-aap">AAP</span>
            </div>
            <p className="text-sm font-bold text-foreground sm:text-base">
              Built on evidence-based guidelines you can trust
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-muted backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16A34A]" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              No account &middot; No tracking &middot; No ads &middot; Data stays on device
            </div>
          </div>
        </div>

        <GentleRedirect />
      </div>
    </>
  );
}
