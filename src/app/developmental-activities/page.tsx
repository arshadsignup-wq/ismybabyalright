import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What activities help baby development at 0-3 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newborns benefit from tummy time on your chest, high-contrast card gazing, narrating your day aloud, gentle bicycle leg exercises, face-to-face mirroring, rattle tracking, singing lullabies, and infant massage. These activities support motor, cognitive, language, social, and sensory development.",
      },
    },
    {
      "@type": "Question",
      name: "How can I support my toddler's cognitive development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toddlers develop cognitive skills through stacking and building, simple puzzles, shape sorters, sorting by color, pattern making, counting games, pretend play, and fill-and-dump activities. These activities teach problem-solving, cause and effect, spatial reasoning, and early math concepts.",
      },
    },
    {
      "@type": "Question",
      name: "What are the five domains of child development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five key domains are: Motor (gross and fine motor skills like crawling, walking, grasping), Cognitive (problem-solving, cause and effect, memory), Language (babbling, first words, vocabulary, communication), Social-Emotional (interaction, empathy, cooperation, emotional regulation), and Sensory (texture exploration, sound awareness, visual tracking).",
      },
    },
    {
      "@type": "Question",
      name: "How much time should I spend on developmental activities with my baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no required amount. Short, frequent interactions throughout the day are more beneficial than long structured sessions. Even 5-10 minutes of focused play several times a day makes a significant impact. Follow your baby's cues — when they look away or fuss, it is time for a break.",
      },
    },
  ],
};

export default function DevelopmentalActivitiesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Developmental Activities" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <DevelopmentalActivities />

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
      </div>
    </div>
  );
}
