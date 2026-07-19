import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Tracker: Feeds, Sleep, Diapers & Temperature Log",
  description:
    "Free baby tracker for feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician. Private — all data stays on your device.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/tracker",
  },
  openGraph: {
    title: "Baby Tracker: Feeds, Sleep, Diapers & Temperature Log | Is My Baby Alright?",
    description:
      "Free baby tracker for feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician. Private — all data stays on your device.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Baby Tracker: Feeds, Sleep, Diapers & Temperature Log",
  description:
    "Free baby tracker for feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician. Private — all data stays on your device.",
  path: "/tracker",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Baby Tracker" },
]);

export default function TrackerLayout({
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
