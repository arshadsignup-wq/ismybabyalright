"use client";

import { useProfile, useEvents } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import HeroSection from "./HeroSection";
import AgeSelector from "./AgeSelector";
import EntryPathCards from "./EntryPathCards";
import GentleRedirect from "@/components/shared/GentleRedirect";
import RightNowCard from "@/components/tracker/RightNowCard";
import QuickTapGrid from "@/components/tracker/QuickTapGrid";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Returning-user quick-access cards                                  */
/* ------------------------------------------------------------------ */

const quickLinks = [
  {
    label: "Milestones",
    href: "/milestones",
    color: "text-primary",
    bg: "bg-primary-light",
    border: "border-primary/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Concerns",
    href: "/concerns",
    color: "text-monitor-foreground",
    bg: "bg-monitor-light",
    border: "border-monitor/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Health",
    href: "/triage",
    color: "text-safe-foreground",
    bg: "bg-safe-light",
    border: "border-safe/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "Food",
    href: "/food",
    color: "text-[#c06000]",
    bg: "bg-[#fff5eb]",
    border: "border-[#c06000]/15",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Feature showcase items                                             */
/* ------------------------------------------------------------------ */

const features = [
  {
    title: "Daily Tracker",
    description: "Log feeds, sleep, and diapers in seconds",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="12" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    title: "Symptom Checker",
    description: "Triage concerns with call scripts for your doctor",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Food Guide",
    description: "Allergen intro, prep by age, safe portions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Sleep Guide",
    description: "Regressions, schedules, and age-based tips",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    title: "Growth Charts",
    description: "WHO percentiles — weight, length, and head",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Mental Health",
    description: "Mood check-in, partner support, and resources",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

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
          <p className="text-lg font-semibold text-foreground">
            {getGreeting()}, {profile.name}&rsquo;s parent
          </p>
          <span className="mt-1 inline-block rounded-full bg-primary-light px-3 py-0.5 text-xs font-semibold text-primary">
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

        {/* Quick-access cards with icons and colors */}
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`card flex items-center gap-3 p-4 border ${item.border} hover:shadow-sm hover:-translate-y-0.5 transition-all no-underline`}
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-foreground">
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

      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <AgeSelector />

        <div className="mt-12">
          <EntryPathCards />
        </div>

        {/* Feature Showcase */}
        <section className="mt-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="mb-2 text-center text-foreground">
            Everything you need, completely free
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-center text-muted">
            72 pages of tools, guides, and trackers — all evidence-based, all private.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card hover-lift flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Credibility */}
        <section
          className="mt-16 rounded-2xl bg-card-alt px-6 py-10"
          aria-labelledby="trust-heading"
        >
          <h2 id="trust-heading" className="mb-8 text-center text-foreground">
            Built on evidence, not opinions
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <span className="source-badge source-badge-cdc mb-3 inline-block">CDC</span>
              <h3 className="text-base text-foreground">CDC Guidelines</h3>
              <p className="text-sm text-muted leading-relaxed">
                Age-specific milestones and &ldquo;act early&rdquo; concern signs from the Centers for Disease Control.
              </p>
            </div>
            <div className="text-center">
              <span className="source-badge source-badge-who mb-3 inline-block">WHO</span>
              <h3 className="text-base text-foreground">WHO Standards</h3>
              <p className="text-sm text-muted leading-relaxed">
                International growth standards and developmental windows from the World Health Organization.
              </p>
            </div>
            <div className="text-center">
              <span className="source-badge source-badge-aap mb-3 inline-block">AAP</span>
              <h3 className="text-base text-foreground">AAP Recommendations</h3>
              <p className="text-sm text-muted leading-relaxed">
                Pediatric best practices for feeding, sleep, vaccines, and well-child visits.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Promise */}
        <section
          className="mt-16 rounded-2xl px-6 py-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-light), #f0faf9)",
          }}
          aria-labelledby="privacy-heading"
        >
          {/* Shield icon */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <h2 id="privacy-heading" className="text-foreground">
            Your data stays on your device
          </h2>

          <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left text-sm text-muted">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-safe-light text-safe text-xs" aria-hidden="true">&check;</span>
              No account required
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-safe-light text-safe text-xs" aria-hidden="true">&check;</span>
              No tracking or analytics
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-safe-light text-safe text-xs" aria-hidden="true">&check;</span>
              No ads, ever
            </li>
          </ul>
        </section>

        <GentleRedirect />
      </div>
    </>
  );
}
