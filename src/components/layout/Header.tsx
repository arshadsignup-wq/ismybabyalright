"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
              className="flex flex-col justify-center min-h-[44px] no-underline"
            >
              <span className="text-lg font-bold text-foreground tracking-tight leading-tight">
                ismybabyalright
              </span>
              <span className="text-xs text-muted leading-tight hidden sm:block">
                Evidence-based peace of mind
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              <Link
                href="/milestones"
                className="px-3 py-2 min-h-[44px] flex items-center rounded-lg text-sm font-medium text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
              >
                Milestones
              </Link>

              <Link
                href="/checklist"
                className="px-3 py-2 min-h-[44px] flex items-center rounded-lg text-sm font-medium text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
              >
                Checklist
              </Link>

              <Link
                href="/concerns"
                className="px-3 py-2 min-h-[44px] flex items-center rounded-lg text-sm font-medium text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
              >
                Concerns
              </Link>

              {/* Tools dropdown */}
              <div ref={toolsRef} className="relative">
                <button
                  onClick={() => {
                    setToolsOpen(!toolsOpen);
                    setResourcesOpen(false);
                  }}
                  className="px-3 py-2 min-h-[44px] flex items-center gap-1 rounded-lg text-sm font-medium text-foreground hover:bg-primary-light hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={toolsOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-tools-menu"
                >
                  Tools
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
                    className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {toolsOpen && (
                  <div
                    id="desktop-tools-menu"
                    className="absolute top-full right-0 mt-1 w-56 bg-card border border-card-border rounded-xl shadow-lg py-2 z-50"
                    role="menu"
                  >
                    <Link
                      href="/tools/growth"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
                      role="menuitem"
                    >
                      Growth Tracker
                    </Link>
                    <Link
                      href="/tools/adjusted-age"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
                      role="menuitem"
                    >
                      Adjusted Age Calculator
                    </Link>
                    <Link
                      href="/tools/regression-log"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
                      role="menuitem"
                    >
                      Regression Log
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources dropdown */}
              <div ref={resourcesRef} className="relative">
                <button
                  onClick={() => {
                    setResourcesOpen(!resourcesOpen);
                    setToolsOpen(false);
                  }}
                  className="px-3 py-2 min-h-[44px] flex items-center gap-1 rounded-lg text-sm font-medium text-foreground hover:bg-primary-light hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-resources-menu"
                >
                  Resources
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
                    className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {resourcesOpen && (
                  <div
                    id="desktop-resources-menu"
                    className="absolute top-full right-0 mt-1 w-56 bg-card border border-card-border rounded-xl shadow-lg py-2 z-50"
                    role="menu"
                  >
                    <Link
                      href="/resources/mental-health"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-center px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
                      role="menuitem"
                    >
                      Mental Health
                    </Link>
                    <Link
                      href="/resources/early-intervention"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-center px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
                      role="menuitem"
                    >
                      Early Intervention
                    </Link>
                    <Link
                      href="/resources/guides"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-center px-4 py-2.5 min-h-[44px] text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors no-underline"
                      role="menuitem"
                    >
                      Guides
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex md:hidden items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-primary-light transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
