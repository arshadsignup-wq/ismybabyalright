import type { Metadata } from "next";
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

export default function PottyTrainingQuizPage() {
  return <PottyTrainingQuiz />;
}
