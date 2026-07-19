import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Health Tracker",
  description:
    "Log your baby's temperature readings and medications. Track health events and share summaries with your pediatrician.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/tracker/health",
  },
  openGraph: {
    title: "Baby Health Tracker | Is My Baby Alright?",
    description:
      "Log temperature readings and medications. Track health events for your pediatrician.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Health Tracker",
  description:
    "Log your baby's temperature readings and medications. Track health events and share summaries with your pediatrician.",
  path: "/tracker/health",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tracker", url: "/tracker" },
  { name: "Health" },
]);

export default function HealthTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
