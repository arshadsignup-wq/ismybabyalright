import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Diaper Tracker",
  description:
    "Log diaper changes, track wet and dirty diapers, and monitor your baby's output patterns.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/tracker/diaper",
  },
  openGraph: {
    title: "Baby Diaper Tracker | Is My Baby Alright?",
    description:
      "Log diaper changes and track wet and dirty diaper patterns. Private and on-device.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Diaper Tracker",
  description:
    "Log diaper changes, track wet and dirty diapers, and monitor your baby's output patterns.",
  path: "/tracker/diaper",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tracker", url: "/tracker" },
  { name: "Diaper" },
]);

export default function DiaperTrackerLayout({
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
