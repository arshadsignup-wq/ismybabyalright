"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ------------------------------------------------------------------ */
/*  Icons (16x16) for drawer links                                     */
/* ------------------------------------------------------------------ */

const ip = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const iconSearch = (<svg {...ip}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
const iconCup = (<svg {...ip}><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /></svg>);
const iconMoon = (<svg {...ip}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>);
const iconShield = (<svg {...ip}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const iconChart = (<svg {...ip}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>);
const iconChecklist = (<svg {...ip}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>);
const iconShare = (<svg {...ip}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>);
const iconGear = (<svg {...ip}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>);
const iconHeart = (<svg {...ip}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
const iconLifeBuoy = (<svg {...ip}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>);
const iconBook = (<svg {...ip}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
const iconClipboard = (<svg {...ip}><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>);
const iconBottle = (<svg {...ip}><path d="M10 2h4v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" /><path d="M8.5 6h7l.5 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l.5-2z" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="16" y2="16" /></svg>);
const iconTooth = (<svg {...ip}><path d="M12 2C9.5 2 7 4 7 7c0 2 .5 4 1 6s1.5 5 2 7c.2.7.5 1 1 1h2c.5 0 .8-.3 1-1 .5-2 1.5-5 2-7s1-4 1-6c0-3-2.5-5-5-5z" /></svg>);
const iconPoop = (<svg {...ip}><path d="M12 3c-1 2-3 3-3 5 0 1 .5 2 1 2.5C9 11 8 12 8 13.5c0 1 .5 2 1.5 2.5C8.5 16.5 7 18 7 19.5 7 21 8.5 22 10.5 22h3c2 0 3.5-1 3.5-2.5 0-1.5-1.5-3-2.5-3.5 1-.5 1.5-1.5 1.5-2.5 0-1.5-1-2.5-2-3 .5-.5 1-1.5 1-2.5 0-2-2-3-3-5z" /></svg>);
const iconTummy = (<svg {...ip}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>);
const iconSkin = (<svg {...ip}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /><path d="M12 13v4" /><path d="M10 15h4" /></svg>);
const iconAlert = (<svg {...ip}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>);
const iconCalendar = (<svg {...ip}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>);
const iconUtensils = (<svg {...ip}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>);
const iconBrain = (<svg {...ip}><path d="M12 2a7 7 0 0 0-7 7c0 3 2 5.5 4 7l3 3.5 3-3.5c2-1.5 4-4 4-7a7 7 0 0 0-7-7z" /><circle cx="12" cy="9" r="2" /></svg>);
const iconScale2 = (<svg {...ip}><path d="M12 3v18" /><path d="M5 6h14" /><path d="M2 12l3-6 3 6" /><path d="M16 12l3-6 3 6" /><path d="M2 12h6" /><path d="M16 12h6" /></svg>);
const iconStar = (<svg {...ip}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);

/* ------------------------------------------------------------------ */
/*  "More" drawer link sections                                        */
/* ------------------------------------------------------------------ */

const drawerSections = [
  {
    label: "Tools",
    links: [
      { href: "/concerns", label: "Concerns", icon: iconSearch },
      { href: "/food", label: "Food Guide", icon: iconCup },
      { href: "/sleep", label: "Sleep Guide", icon: iconMoon },
      { href: "/feeding", label: "Feeding Guide", icon: iconBottle },
      { href: "/vaccines", label: "Vaccines", icon: iconShield },
      { href: "/doctor-visits", label: "Doctor Visit Prep", icon: iconClipboard },
      { href: "/teething", label: "Teething Guide", icon: iconTooth },
      { href: "/poop-guide", label: "Poop Guide", icon: iconPoop },
      { href: "/tummy-time", label: "Tummy Time", icon: iconTummy },
      { href: "/emergency-info", label: "Emergency Info Vault", icon: iconAlert },
      { href: "/age-advice", label: "Age-Based Advice", icon: iconCalendar },
      { href: "/meal-planner", label: "Meal Planner", icon: iconUtensils },
    ],
  },
  {
    label: "Track",
    links: [
      { href: "/tools/growth", label: "Growth Chart", icon: iconChart },
      { href: "/tools/weight-for-length", label: "Weight-for-Length", icon: iconScale2 },
      { href: "/growth-spurts", label: "Growth Spurts", icon: iconChart },
      { href: "/skin-guide", label: "Skin Guide", icon: iconSkin },
      { href: "/checklists", label: "Checklists", icon: iconChecklist },
      { href: "/sharing", label: "Share with Caregiver", icon: iconShare },
      { href: "/settings", label: "Settings", icon: iconGear },
    ],
  },
  {
    label: "Support",
    links: [
      { href: "/mental-health", label: "Mental Health", icon: iconHeart },
      { href: "/quiz/parenting-style", label: "Parenting Quiz", icon: iconBrain },
      { href: "/baby-names", label: "Baby Names", icon: iconStar },
      { href: "/resources/early-intervention", label: "Early Intervention", icon: iconLifeBuoy },
      { href: "/resources/guides", label: "Guides", icon: iconBook },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MobileNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Bottom tab bar  -  mobile only */}
      <div className="bottom-tab-bar md:hidden" role="navigation" aria-label="Mobile navigation">
        <nav>
          <Link
            href="/"
            className={isActive("/") && pathname === "/" ? "active" : ""}
            aria-label="Home"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </Link>

          <Link
            href="/tracker"
            className={isActive("/tracker") ? "active" : ""}
            aria-label="Track"
            aria-current={isActive("/tracker") ? "page" : undefined}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <span>Track</span>
          </Link>

          <Link
            href="/milestones"
            className={isActive("/milestones") ? "active" : ""}
            aria-label="Milestones"
            aria-current={isActive("/milestones") ? "page" : undefined}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Milestones</span>
          </Link>

          <Link
            href="/triage"
            className={isActive("/triage") ? "active" : ""}
            aria-label="Health"
            aria-current={isActive("/triage") ? "page" : undefined}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>Health</span>
          </Link>

          <button
            onClick={() => setDrawerOpen(true)}
            className={drawerOpen ? "active" : ""}
            aria-label="More options"
            aria-expanded={drawerOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>More</span>
          </button>
        </nav>
      </div>

      {/* "More" drawer  -  slides up from bottom */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="more-drawer-backdrop md:hidden"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="more-drawer md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="More navigation options"
          >
            {/* Handle + close */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <div className="mx-auto h-1 w-10 rounded-full bg-border" aria-hidden="true" />
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:bg-primary-light transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Links */}
            <nav className="px-5 pb-4" aria-label="Additional navigation">
              {drawerSections.map((section) => (
                <div key={section.label} className="mb-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                    {section.label}
                  </div>
                  <ul className="flex flex-col gap-0.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setDrawerOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 min-h-[44px] text-sm font-semibold transition-colors no-underline ${
                            isActive(link.href)
                              ? "bg-primary-light text-primary"
                              : "text-foreground hover:bg-primary-light hover:text-primary"
                          }`}
                        >
                          <span className="flex h-5 w-5 items-center justify-center text-muted" aria-hidden="true">
                            {link.icon}
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Crisis info */}
            <div className="px-5 py-4 border-t border-border bg-card-alt">
              <p className="text-sm text-muted leading-relaxed">
                Need support?{" "}
                <a
                  href="tel:1-800-944-4773"
                  className="font-semibold text-primary underline"
                >
                  PSI Warmline: 1-800-944-4773
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
