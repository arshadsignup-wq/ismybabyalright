"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Header() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toolsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        toolsRef.current &&
        !toolsRef.current.contains(event.target as Node)
      ) {
        setToolsOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setToolsOpen(false);
        setResourcesOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const chevron = (open: boolean) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <>
      <header
        className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-card-border"
        role="banner"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / site name */}
            <Link
              href="/"
              className="flex items-center gap-2 min-h-[44px] no-underline"
            >
              <Image
                src="/logo.png"
                alt="Is My Baby Alright logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="flex flex-col justify-center">
                <span className="text-lg font-bold text-foreground tracking-tight leading-tight">
                  ismybabyalright
                </span>
                <span className="text-xs text-muted leading-tight hidden sm:block">
                  Evidence-based peace of mind
                </span>
              </span>
            </Link>

            {/* Desktop navigation  -  simplified to 4 items */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              <Link
                href="/milestones"
                className="px-3 py-2 min-h-[44px] flex items-center rounded-full text-sm font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
              >
                Milestones
              </Link>

              <Link
                href="/concerns"
                className="px-3 py-2 min-h-[44px] flex items-center rounded-full text-sm font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
              >
                Concerns
              </Link>

              {/* Tools dropdown  -  grouped with icons */}
              <div ref={toolsRef} className="relative">
                <button
                  onClick={() => {
                    setToolsOpen(!toolsOpen);
                    setResourcesOpen(false);
                  }}
                  className="px-3 py-2 min-h-[44px] flex items-center gap-1 rounded-full text-sm font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={toolsOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-tools-menu"
                >
                  Tools
                  {chevron(toolsOpen)}
                </button>
                {toolsOpen && (
                  <div
                    id="desktop-tools-menu"
                    className="absolute top-full right-0 mt-1 w-64 bg-card border border-card-border rounded-2xl shadow-lg py-2 z-50"
                    role="menu"
                  >
                    {/* Track & Log section */}
                    <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Track &amp; Log</div>
                    <DropdownItem href="/tracker" icon={iconClock} label="Tracker" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/tools/growth" icon={iconChart} label="Growth Chart" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/tools/regression-log" icon={iconList} label="Regression Log" onClick={() => setToolsOpen(false)} />

                    <div className="border-t border-card-border my-1" />

                    {/* Health section */}
                    <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Health</div>
                    <DropdownItem href="/triage" icon={iconActivity} label="Symptom Checker" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/vaccines" icon={iconShield} label="Vaccines" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/food" icon={iconCup} label="Food Guide" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/sleep" icon={iconMoon} label="Sleep Guide" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/feeding" icon={iconBottle} label="Feeding Guide" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/doctor-visits" icon={iconClipboard} label="Doctor Visit Prep" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/teething" icon={iconTooth} label="Teething Guide" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/poop-guide" icon={iconPoop} label="Poop Guide" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/tummy-time" icon={iconTummy} label="Tummy Time" onClick={() => setToolsOpen(false)} />

                    <div className="border-t border-card-border my-1" />

                    {/* Reference section */}
                    <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Reference</div>
                    <DropdownItem href="/growth-spurts" icon={iconChart} label="Growth Spurts" onClick={() => setToolsOpen(false)} />
                    <DropdownItem href="/skin-guide" icon={iconSkin} label="Skin Guide" onClick={() => setToolsOpen(false)} />

                    <div className="border-t border-card-border my-1" />

                    {/* Share section */}
                    <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Share</div>
                    <DropdownItem href="/sharing" icon={iconShare} label="Share with Caregiver" onClick={() => setToolsOpen(false)} />
                  </div>
                )}
              </div>

              {/* Resources dropdown  -  grouped with icons */}
              <div ref={resourcesRef} className="relative">
                <button
                  onClick={() => {
                    setResourcesOpen(!resourcesOpen);
                    setToolsOpen(false);
                  }}
                  className="px-3 py-2 min-h-[44px] flex items-center gap-1 rounded-full text-sm font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-resources-menu"
                >
                  Resources
                  {chevron(resourcesOpen)}
                </button>
                {resourcesOpen && (
                  <div
                    id="desktop-resources-menu"
                    className="absolute top-full right-0 mt-1 w-64 bg-card border border-card-border rounded-2xl shadow-lg py-2 z-50"
                    role="menu"
                  >
                    {/* Support section */}
                    <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Support</div>
                    <DropdownItem href="/mental-health" icon={iconHeart} label="Mental Health" onClick={() => setResourcesOpen(false)} />
                    <DropdownItem href="/mental-health/check-in" icon={iconSmile} label={`"Am I Okay?" Check-in`} onClick={() => setResourcesOpen(false)} />
                    <DropdownItem href="/fairness" icon={iconScale} label="Fairness View" onClick={() => setResourcesOpen(false)} />

                    <div className="border-t border-card-border my-1" />

                    {/* Reference section */}
                    <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Reference</div>
                    <DropdownItem href="/checklists" icon={iconChecklist} label="Checklists" onClick={() => setResourcesOpen(false)} />
                    <DropdownItem href="/resources/early-intervention" icon={iconLifeBuoy} label="Early Intervention" onClick={() => setResourcesOpen(false)} />
                    <DropdownItem href="/resources/guides" icon={iconBook} label="Guides" onClick={() => setResourcesOpen(false)} />

                    <div className="border-t border-card-border my-1" />

                    {/* Settings */}
                    <DropdownItem href="/settings" icon={iconGear} label="Settings" onClick={() => setResourcesOpen(false)} />
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Bottom tab bar for mobile */}
      <MobileNav />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Dropdown menu item                                                 */
/* ------------------------------------------------------------------ */

function DropdownItem({
  href,
  icon,
  label,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
      role="menuitem"
    >
      <span className="flex h-5 w-5 items-center justify-center text-muted" aria-hidden="true">
        {icon}
      </span>
      {label}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons (16x16)                                                      */
/* ------------------------------------------------------------------ */

const iconProps = {
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

const iconClock = (
  <svg {...iconProps}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="12" x2="16" y2="14" /></svg>
);
const iconChart = (
  <svg {...iconProps}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
);
const iconList = (
  <svg {...iconProps}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
);
const iconActivity = (
  <svg {...iconProps}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);
const iconShield = (
  <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const iconCup = (
  <svg {...iconProps}><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
);
const iconMoon = (
  <svg {...iconProps}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
);
const iconShare = (
  <svg {...iconProps}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
);
const iconHeart = (
  <svg {...iconProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
);
const iconSmile = (
  <svg {...iconProps}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
);
const iconScale = (
  <svg {...iconProps}><path d="M16 3l-4 4-4-4" /><path d="M4 14l8 7 8-7" /><line x1="12" y1="7" x2="12" y2="21" /></svg>
);
const iconChecklist = (
  <svg {...iconProps}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
);
const iconLifeBuoy = (
  <svg {...iconProps}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="14.83" y1="9.17" x2="10.59" y2="13.41" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>
);
const iconBook = (
  <svg {...iconProps}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const iconGear = (
  <svg {...iconProps}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
);
const iconClipboard = (
  <svg {...iconProps}><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
);
const iconBottle = (
  <svg {...iconProps}><path d="M10 2h4v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" /><path d="M8.5 6h7l.5 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l.5-2z" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="16" y2="16" /></svg>
);
const iconTooth = (
  <svg {...iconProps}><path d="M12 2C9.5 2 7 4 7 7c0 2 .5 4 1 6s1.5 5 2 7c.2.7.5 1 1 1h2c.5 0 .8-.3 1-1 .5-2 1.5-5 2-7s1-4 1-6c0-3-2.5-5-5-5z" /></svg>
);
const iconPoop = (
  <svg {...iconProps}><path d="M12 3c-1 2-3 3-3 5 0 1 .5 2 1 2.5C9 11 8 12 8 13.5c0 1 .5 2 1.5 2.5C8.5 16.5 7 18 7 19.5 7 21 8.5 22 10.5 22h3c2 0 3.5-1 3.5-2.5 0-1.5-1.5-3-2.5-3.5 1-.5 1.5-1.5 1.5-2.5 0-1.5-1-2.5-2-3 .5-.5 1-1.5 1-2.5 0-2-2-3-3-5z" /></svg>
);
const iconTummy = (
  <svg {...iconProps}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>
);
const iconSkin = (
  <svg {...iconProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /><path d="M12 13v4" /><path d="M10 15h4" /></svg>
);
