import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CategoryTabs from "@/components/milestones/CategoryTabs";
import RedFlagList from "@/components/milestones/RedFlagList";
import AgeNavigation from "@/components/milestones/AgeNavigation";
import GentleRedirect from "@/components/shared/GentleRedirect";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import AuthoritativeQuote from "@/components/shared/AuthoritativeQuote";
import { getQuotesForTopic } from "@/data/authoritative-quotes";
import { allCheckpoints, getCheckpointById } from "@/data/milestones";
import { getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

interface MilestonePageProps {
  params: Promise<{ age: string }>;
}

export async function generateStaticParams() {
  return allCheckpoints.map((checkpoint) => ({
    age: checkpoint.id,
  }));
}

export async function generateMetadata({
  params,
}: MilestonePageProps): Promise<Metadata> {
  const { age } = await params;
  const checkpoint = getCheckpointById(age);

  if (!checkpoint) {
    return { title: "Milestone Not Found" };
  }

  return {
    title: `${checkpoint.label} Milestones`,
    description: `Developmental milestones for ${checkpoint.label}: gross motor, fine motor, language, social-emotional, and cognitive skills. Evidence-based guidance from CDC, WHO, and AAP.`,
    alternates: {
      canonical: `/milestones/${age}`,
    },
    openGraph: {
      title: `${checkpoint.label} Milestones | Is My Baby Alright?`,
      description: `Developmental milestones for ${checkpoint.label}: gross motor, fine motor, language, social-emotional, and cognitive skills.`,
    },
  };
}

export default async function MilestoneAgePage({ params }: MilestonePageProps) {
  const { age } = await params;
  const checkpoint = getCheckpointById(age);

  if (!checkpoint) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Milestones", url: "/milestones" },
    { name: checkpoint.label },
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${checkpoint.label} Milestones`,
    url: `https://www.ismybabyalright.com/milestones/${age}`,
    description: `Developmental milestones for ${checkpoint.label}: gross motor, fine motor, language, social-emotional, and cognitive skills. Evidence-based guidance from CDC, WHO, and AAP.`,
    about: {
      "@type": "MedicalCondition",
      name: "Child Development",
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "parents",
    },
    author: {
      "@type": "Organization",
      name: "Is My Baby Alright?",
      url: "https://www.ismybabyalright.com",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Is My Baby Alright? Editorial Team",
      url: "https://www.ismybabyalright.com",
      description:
        "Content reviewed against published guidelines from the CDC, WHO, AAP, ACOG, ASHA, and NIH.",
    },
  };

  // Key takeaways from first milestone in each category
  const catOrder: Array<'grossMotor' | 'fineMotor' | 'language' | 'socialEmotional' | 'cognitive'> = ['grossMotor', 'fineMotor', 'language', 'socialEmotional', 'cognitive'];
  const catLabels: Record<string, string> = {
    grossMotor: 'Gross motor',
    fineMotor: 'Fine motor',
    language: 'Language',
    socialEmotional: 'Social-emotional',
    cognitive: 'Cognitive',
  };

  const takeaways: string[] = [];
  for (const cat of catOrder) {
    const milestones = checkpoint.categories[cat];
    if (milestones.length > 0) {
      takeaways.push(`${catLabels[cat]}: ${milestones[0].name}`);
    }
  }

  // FAQ items
  const faqItems: { question: string; answer: string }[] = [];

  const milestoneSummary = catOrder
    .map((cat) => {
      const ms = checkpoint.categories[cat];
      return ms.length > 0 ? `${catLabels[cat]}: ${ms[0].name}` : null;
    })
    .filter(Boolean)
    .join('. ');
  faqItems.push({
    question: `What milestones should a ${checkpoint.label.toLowerCase()} baby have?`,
    answer: milestoneSummary + '.',
  });

  if (checkpoint.redFlags.length > 0) {
    const rfText = checkpoint.redFlags.slice(0, 3).map((rf) => rf.description).join('. ');
    faqItems.push({
      question: `When should I worry about my ${checkpoint.label.toLowerCase()} baby's development?`,
      answer: rfText + '.',
    });
    faqItems.push({
      question: `What are the red flags at ${checkpoint.label.toLowerCase()}?`,
      answer: checkpoint.redFlags.map((rf) => rf.description).join('. ') + '.',
    });
  }

  const faqSchema = getFAQPageSchema(faqItems);

  const topicQuotes = getQuotesForTopic('milestones');

  const bottomLineSummary = `Every baby develops at their own pace. The ${checkpoint.label.toLowerCase()} milestones listed here are typical ranges based on CDC, WHO, and AAP guidelines. Missing a milestone doesn't necessarily mean something is wrong, but talk to your pediatrician if you have concerns.`;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Milestones", href: "/milestones" },
          { label: checkpoint.label },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1>{checkpoint.label} Milestones</h1>

        <div className="mt-2 mb-6">
          <MedicalReviewAttribution
            sources={['CDC', 'WHO', 'AAP']}
          />
          <LastReviewed date="2026-07-01" />
        </div>

        {checkpoint.notes && (
          <div className="card-alt p-4 mb-8">
            <p className="text-sm text-muted leading-relaxed">
              {checkpoint.notes}
            </p>
          </div>
        )}

        {takeaways.length > 0 && (
          <KeyTakeaways takeaways={takeaways} />
        )}

        {topicQuotes.length > 0 && (
          <AuthoritativeQuote
            quote={topicQuotes[0].quote}
            source={topicQuotes[0].source}
            sourceUrl={topicQuotes[0].sourceUrl}
            organization={topicQuotes[0].organization}
          />
        )}

        <CategoryTabs categories={checkpoint.categories} />

        {checkpoint.redFlags.length > 0 && (
          <section className="mt-10" aria-labelledby="red-flags-heading">
            <h2 id="red-flags-heading" className="text-concern">
              When to Talk to Your Doctor
            </h2>
            <RedFlagList redFlags={checkpoint.redFlags} />
          </section>
        )}

        {faqItems.length > 0 && (
          <FAQSection items={faqItems} />
        )}

        <div className="mt-10">
          <AgeNavigation currentId={checkpoint.id} />
        </div>

        <BottomLine summary={bottomLineSummary} />

        <EditorialTrustBanner variant="compact" />

        <GentleRedirect />
      </div>
    </article>
  );
}
