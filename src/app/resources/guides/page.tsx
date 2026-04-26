import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { allGuides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides  -  ismybabyalright",
  description:
    "Evidence-based condition guides for common childhood health topics.",
  alternates: {
    canonical: "/resources/guides",
  },
  openGraph: {
    title: "Condition Guides | Is My Baby Alright?",
    description:
      "Evidence-based condition guides for common childhood health topics.",
  },
};

export default function GuidesIndexPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources/early-intervention" },
          { label: "Guides" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Condition Guides</h1>
        <p className="text-lg text-muted mb-8">
          Evidence-based guides to help you understand common childhood
          conditions, know what to expect, and take action.
        </p>

        <ul className="flex flex-col gap-4" role="list">
          {allGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/resources/guides/${guide.slug}`}
                className="card group flex items-start gap-4 p-5 no-underline transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-light text-sky">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {guide.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {guide.subtitle}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
