import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";
import ParentingQuiz from "@/components/quiz/ParentingQuiz";

export const metadata: Metadata = {
  title: "Parenting Style Quiz - What Kind of Parent Are You?",
  description:
    "Discover your parenting style with this fun, judgment-free quiz. 15 real-life scenarios help you understand your natural approach to raising your little one. No wrong answers - just insight.",
  alternates: {
    canonical: "/quiz/parenting-style",
  },
  openGraph: {
    title: "Parenting Style Quiz - What Kind of Parent Are You?",
    description:
      "Discover your parenting style with this fun, judgment-free quiz. 15 real-life scenarios, no wrong answers - just insight.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Parenting Style Quiz - What Kind of Parent Are You?",
  description:
    "Discover your parenting style with this fun, judgment-free quiz. 15 real-life scenarios help you understand your natural approach to raising your little one. No wrong answers - just insight.",
  path: "/quiz/parenting-style",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Parenting Style Quiz" },
]);

export default function ParentingStyleQuizPage() {
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
      <ParentingQuiz />
    </>
  );
}
