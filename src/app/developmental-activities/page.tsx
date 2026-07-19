import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import DevelopmentalActivities from "@/components/tools/DevelopmentalActivities";

export const metadata: Metadata = {
  title: "Developmental Activities for Babies & Toddlers",
  description:
    "60+ age-appropriate activities to support your baby and toddler's motor, cognitive, language, social, and sensory development from 0-36 months. Based on CDC, Zero to Three, and AAP guidelines.",
  alternates: {
    canonical: "/developmental-activities",
  },
  openGraph: {
    title: "Developmental Activities for Babies & Toddlers",
    description:
      "Age-by-age developmental activities for babies and toddlers. Filter by age group and developmental domain. Based on CDC and AAP guidelines.",
  },
};

const devActivitiesFaqItems = [
  {
    question: "What activities help baby development at 0-3 months?",
    answer:
      "Newborns benefit from tummy time on your chest, high-contrast card gazing, narrating your day aloud, gentle bicycle leg exercises, face-to-face mirroring, rattle tracking, singing lullabies, and infant massage. These activities support motor, cognitive, language, social, and sensory development.",
  },
  {
    question: "How can I support my toddler's cognitive development?",
    answer:
      "Toddlers develop cognitive skills through stacking and building, simple puzzles, shape sorters, sorting by color, pattern making, counting games, pretend play, and fill-and-dump activities. These activities teach problem-solving, cause and effect, spatial reasoning, and early math concepts.",
  },
  {
    question: "What are the five domains of child development?",
    answer:
      "The five key domains are: Motor (gross and fine motor skills like crawling, walking, grasping), Cognitive (problem-solving, cause and effect, memory), Language (babbling, first words, vocabulary, communication), Social-Emotional (interaction, empathy, cooperation, emotional regulation), and Sensory (texture exploration, sound awareness, visual tracking).",
  },
  {
    question: "How much time should I spend on developmental activities with my baby?",
    answer:
      "There is no required amount. Short, frequent interactions throughout the day are more beneficial than long structured sessions. Even 5-10 minutes of focused play several times a day makes a significant impact. Follow your baby's cues -- when they look away or fuss, it is time for a break.",
  },
];

const jsonLd = getFAQPageSchema(devActivitiesFaqItems);

const contentSchema = getContentPageSchema({
  name: 'Developmental Activities for Babies & Toddlers',
  description:
    '60+ age-appropriate activities to support your baby and toddler\'s motor, cognitive, language, social, and sensory development from 0-36 months. Based on CDC, Zero to Three, and AAP guidelines.',
  path: '/developmental-activities',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Developmental Activities' },
]);

export default function DevelopmentalActivitiesPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Developmental Activities" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Developmental Activities for Babies &amp; Toddlers
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Short, frequent play sessions (even 5-10 minutes) are more effective than long structured activities.",
              "Development spans five domains: motor, cognitive, language, social-emotional, and sensory -- activities should cover all of them.",
              "Follow your baby's cues and stop when they look away, fuss, or seem overstimulated.",
              "Every child develops at their own pace -- these activities are guidelines, not rigid benchmarks.",
              "All activities should be supervised by an adult, especially for infants under 12 months.",
            ]}
          />
        </div>

        <DevelopmentalActivities />

        {/* FAQ Section */}
        <div className="mt-8">
          <FAQSection items={devActivitiesFaqItems} />
        </div>

        {/* Sources */}
        <div className="mt-10 text-xs text-muted">
          <p className="font-semibold mb-1">Sources</p>
          <ul className="space-y-0.5">
            <li>
              <a
                href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                CDC — Developmental Milestones
              </a>
            </li>
            <li>
              <a
                href="https://www.zerotothree.org/resource/play/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Zero to Three — The Power of Play
              </a>
            </li>
            <li>
              <a
                href="https://www.healthychildren.org/English/ages-stages/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Ages &amp; Stages
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Every child
            develops at their own pace. If you have concerns about your
            child&apos;s development, talk to your pediatrician. Activities
            should always be supervised by an adult.
          </p>
        </div>

        <BottomLine
          summary="Play is how babies and toddlers learn about the world. Short, frequent interactions across all five developmental domains -- motor, cognitive, language, social-emotional, and sensory -- are more valuable than any structured program. Follow your child's lead, keep activities age-appropriate, and enjoy the time together."
        />

        <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>
      </div>
    </article>
  );
}
