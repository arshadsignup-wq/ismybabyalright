import type { Metadata } from "next";
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

export default function ParentingStyleQuizPage() {
  return <ParentingQuiz />;
}
