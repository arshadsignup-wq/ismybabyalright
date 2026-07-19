import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Tracker",
  description:
    "Log your baby's sleep sessions, track wake windows, and spot patterns. All data stays on your device.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/tracker/sleep",
  },
  openGraph: {
    title: "Baby Sleep Tracker | Is My Baby Alright?",
    description:
      "Log sleep sessions, track wake windows, and spot patterns. Private and on-device.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Sleep Tracker",
  description:
    "Log your baby's sleep sessions, track wake windows, and spot patterns. All data stays on your device.",
  path: "/tracker/sleep",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tracker", url: "/tracker" },
  { name: "Sleep" },
]);

export default function SleepTrackerLayout({
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
