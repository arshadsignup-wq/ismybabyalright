"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-background"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Top bar with close button */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <span className="text-lg font-bold text-foreground tracking-tight">
          ismybabyalright
        </span>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-primary-light transition-colors"
          aria-label="Close navigation menu"
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <nav
        className="flex-1 overflow-y-auto px-5 py-4"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/milestones"
              onClick={onClose}
              className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-lg font-medium text-foreground hover:bg-primary-light transition-colors"
            >
              Milestones
            </Link>
          </li>

          <li>
            <Link
              href="/checklist"
              onClick={onClose}
              className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-lg font-medium text-foreground hover:bg-primary-light transition-colors"
            >
              Checklist
            </Link>
          </li>

          <li>
            <Link
              href="/concerns"
              onClick={onClose}
              className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-lg font-medium text-foreground hover:bg-primary-light transition-colors"
            >
              Concerns
            </Link>
          </li>

          {/* Tools dropdown */}
          <li>
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center justify-between w-full px-4 py-3 min-h-[44px] rounded-lg text-lg font-medium text-foreground hover:bg-primary-light transition-colors"
              aria-expanded={toolsOpen}
              aria-controls="mobile-tools-menu"
            >
              <span>Tools</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <ul
                id="mobile-tools-menu"
                className="flex flex-col gap-1 ml-4 mt-1"
              >
                <li>
                  <Link
                    href="/tools/growth"
                    onClick={onClose}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-base text-muted hover:bg-primary-light hover:text-foreground transition-colors"
                  >
                    Growth Tracker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/adjusted-age"
                    onClick={onClose}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-base text-muted hover:bg-primary-light hover:text-foreground transition-colors"
                  >
                    Adjusted Age Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/regression-log"
                    onClick={onClose}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-base text-muted hover:bg-primary-light hover:text-foreground transition-colors"
                  >
                    Regression Log
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Resources dropdown */}
          <li>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 min-h-[44px] rounded-lg text-lg font-medium text-foreground hover:bg-primary-light transition-colors"
              aria-expanded={resourcesOpen}
              aria-controls="mobile-resources-menu"
            >
              <span>Resources</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <ul
                id="mobile-resources-menu"
                className="flex flex-col gap-1 ml-4 mt-1"
              >
                <li>
                  <Link
                    href="/resources/mental-health"
                    onClick={onClose}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-base text-muted hover:bg-primary-light hover:text-foreground transition-colors"
                  >
                    Mental Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/early-intervention"
                    onClick={onClose}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-base text-muted hover:bg-primary-light hover:text-foreground transition-colors"
                  >
                    Early Intervention
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/guides"
                    onClick={onClose}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-lg text-base text-muted hover:bg-primary-light hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Bottom crisis info */}
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
  );
}
