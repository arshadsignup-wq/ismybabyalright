import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AgeAdviceDashboard from "@/components/age-advice/AgeAdviceDashboard";
import { getAdviceForAge, formatAge } from "@/lib/ageAdvice";

interface AgeAdvicePageProps {
  params: Promise<{ months: string }>;
}

export async function generateStaticParams() {
  return Array.from({ length: 37 }, (_, i) => ({
    months: String(i),
  }));
}

export async function generateMetadata({
  params,
}: AgeAdvicePageProps): Promise<Metadata> {
  const { months: monthsStr } = await params;
  const months = parseInt(monthsStr, 10);

  if (isNaN(months) || months < 0 || months > 36) {
    return { title: "Age Not Found" };
  }

  const ageLabel = formatAge(months);

  return {
    title: `${ageLabel} - Age-Based Advice`,
    description: `Everything you need to know when your baby is ${ageLabel.toLowerCase()}. Milestones, common concerns, food readiness, sleep needs, and upcoming vaccines.`,
    alternates: {
      canonical: `/age-advice/${months}`,
    },
  };
}

export default async function AgeAdviceMonthPage({
  params,
}: AgeAdvicePageProps) {
  const { months: monthsStr } = await params;
  const months = parseInt(monthsStr, 10);

  if (isNaN(months) || months < 0 || months > 36) {
    notFound();
  }

  const advice = getAdviceForAge(months);
  const ageLabel = formatAge(months);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Age-Based Advice", href: "/age-advice" },
          { label: ageLabel },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <AgeAdviceDashboard advice={advice} ageLabel={ageLabel} />
      </div>
    </div>
  );
}
