import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";
import PottyTrainingQuiz from "@/components/quiz/PottyTrainingQuiz";

export const metadata: Metadata = {
  title: "Potty Training Readiness Quiz - Is Your Toddler Ready?",
  description:
    "Take this quick 10-question quiz to find out if your toddler is showing signs of potty training readiness. Get personalized tips and next steps based on your child's development.",
  alternates: {
    canonical: "/quiz/potty-training",
  },
  openGraph: {
    title: "Potty Training Readiness Quiz - Is Your Toddler Ready?",
    description:
      "10-question readiness assessment with personalized tips. Based on AAP potty training guidelines.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Potty Training Readiness Quiz - Is Your Toddler Ready?",
  description:
    "Take this quick 10-question quiz to find out if your toddler is showing signs of potty training readiness. Get personalized tips and next steps based on your child's development.",
  path: "/quiz/potty-training",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Potty Training Readiness Quiz" },
]);

export default function PottyTrainingQuizPage() {
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
      <PottyTrainingQuiz />
    </>
  );
}
