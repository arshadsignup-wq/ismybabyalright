import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Feeding Tracker",
  description:
    "Log breastfeeding sessions, bottles, and solid food meals. Track feeding frequency and patterns over time.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/tracker/feeding",
  },
  openGraph: {
    title: "Baby Feeding Tracker | Is My Baby Alright?",
    description:
      "Log breastfeeding, bottles, and solid meals. Track feeding patterns over time.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Feeding Tracker",
  description:
    "Log breastfeeding sessions, bottles, and solid food meals. Track feeding frequency and patterns over time.",
  path: "/tracker/feeding",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tracker", url: "/tracker" },
  { name: "Feeding" },
]);

export default function FeedingTrackerLayout({
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
