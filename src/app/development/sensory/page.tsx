import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sensory Development in Babies & Toddlers",
  description:
    "Guide to sensory development from birth to 3 years. Vision, hearing, touch, taste, smell, proprioception, and vestibular development. Based on AAP and CDC guidelines.",
  alternates: {
    canonical: "/development/sensory",
  },
  openGraph: {
    title: "Sensory Development | Birth to 3 Years",
    description:
      "How babies develop vision, hearing, touch, and body awareness. Evidence-based sensory development guide.",
  },
};

const faqItems = [
  {
    question: "What are the 7 senses in sensory development?",
    answer:
      "Beyond the traditional 5 senses (sight, hearing, touch, taste, smell), there are 2 additional 'body senses' critical for child development: proprioception (awareness of body position and movement through space) and the vestibular sense (balance and spatial orientation, processed by the inner ear). These 7 senses work together to help children understand and interact with the world.",
  },
  {
    question: "When can babies see clearly?",
    answer:
      "Newborns can only focus clearly at 8-12 inches (about the distance to a caregiver's face during feeding). Vision improves rapidly: by 3 months babies track objects smoothly, by 4-6 months color vision matures, by 6-8 months depth perception develops, and by 12 months vision is close to adult clarity. Most visual development happens in the first year.",
  },
  {
    question: "What is sensory processing and when should I be concerned?",
    answer:
      "Sensory processing is how the nervous system receives, organizes, and responds to sensory input. Some children may be over-sensitive (avoiding textures, sounds, or touch) or under-sensitive (seeking intense sensory input). Concern is warranted when sensory responses significantly interfere with daily activities, feeding, sleeping, or social participation. An occupational therapist can evaluate sensory processing.",
  },
  {
    question: "How can I support my baby's sensory development?",
    answer:
      "Provide a rich sensory environment: varied textures to touch, music and conversation to hear, different foods to taste, outdoor experiences with natural light and fresh air, and opportunities for movement (tummy time, swinging, bouncing). Follow your baby's cues -- if they turn away or fuss, they may be overstimulated. Balance stimulation with calm, quiet time.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Sensory Development in Babies & Toddlers",
  description:
    "Guide to sensory development from birth to 3 years. Vision, hearing, touch, proprioception, and vestibular development.",
  path: "/development/sensory",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "AAP Vision & Hearing Screening", url: "https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Sensory" },
]);

export default function SensoryPage() {
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

      <Breadcrumbs
        items={[
          { label: "Development", href: "/development" },
          { label: "Sensory" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Sensory Development in Babies &amp; Toddlers
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Sensory development includes 7 senses: sight, hearing, touch, taste, smell, proprioception (body awareness), and vestibular (balance).",
              "Sensory development underlies and supports all other developmental domains -- motor, cognitive, language, and social-emotional.",
              "Newborns can only focus 8-12 inches away; full visual acuity develops over the first year.",
              "Hearing screening at birth is critical -- undetected hearing loss is a common cause of speech delays.",
              "Sensory processing differences (over- or under-sensitivity) that interfere with daily life warrant occupational therapy evaluation.",
            ]}
          />
        </div>

        {/* The 7 Senses */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">The 7 Senses</h2>
          <p>
            Sensory development involves much more than the traditional five senses. The seven sensory
            systems that work together in child development are:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Vision (sight):</strong> Processing visual information -- light, color, shape, depth, and movement</li>
            <li><strong>Auditory (hearing):</strong> Processing sounds -- speech, music, environmental noises, and their location</li>
            <li><strong>Tactile (touch):</strong> Processing pressure, temperature, texture, pain, and vibration through the skin</li>
            <li><strong>Gustatory (taste):</strong> Processing flavors -- sweet, sour, salty, bitter, umami</li>
            <li><strong>Olfactory (smell):</strong> Processing odors and connecting them to memories and preferences</li>
            <li><strong>Proprioception (body awareness):</strong> Knowing where your body is in space without looking -- processed through muscles and joints</li>
            <li><strong>Vestibular (balance and movement):</strong> Sensing head position, movement, and acceleration -- processed by the inner ear</li>
          </ul>
        </section>

        {/* Vision Development */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Vision Development</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Birth:</strong> Focuses 8-12 inches away, prefers high-contrast patterns and faces, sees in shades of gray</li>
            <li><strong>1-2 months:</strong> Begins tracking moving objects, prefers faces, early color perception emerging</li>
            <li><strong>3-4 months:</strong> Tracks objects smoothly in all directions, color vision maturing, reaches for what they see</li>
            <li><strong>5-6 months:</strong> Depth perception developing, recognizes familiar faces at a distance, coordinates eyes together</li>
            <li><strong>7-12 months:</strong> Full color vision, distance vision improving, judges distances for reaching and crawling</li>
            <li><strong>1-2 years:</strong> Vision approaching adult clarity, recognizes pictures in books, coordinates vision with motor actions</li>
          </ul>
          <p>
            <strong>When to seek evaluation:</strong> If your baby does not track objects by 3 months,
            has eyes that consistently cross after 4 months, does not reach for objects by 5 months,
            or if you notice a white reflection in the pupil in photos (always mention this to your doctor).
          </p>
        </section>

        {/* Hearing Development */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Hearing Development</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Birth:</strong> Hearing is functional from birth (develops in utero). Startles at loud sounds, calms to familiar voices</li>
            <li><strong>1-3 months:</strong> Turns toward sounds, quiets to familiar music, differentiates speech sounds</li>
            <li><strong>4-6 months:</strong> Localizes sounds by turning head accurately, responds to name, notices music</li>
            <li><strong>7-12 months:</strong> Understands common words, responds to simple requests, localizes sounds precisely</li>
            <li><strong>1-2 years:</strong> Follows spoken directions, identifies sounds from different rooms, enjoys music and songs</li>
            <li><strong>2-3 years:</strong> Discriminates between similar sounds, follows multi-step verbal instructions</li>
          </ul>
          <p>
            <strong>Critical note:</strong> All newborns should have a hearing screening before leaving
            the hospital. Undetected hearing loss is one of the most common causes of speech and language
            delays. If your baby does not pass the newborn screening, follow up immediately -- early
            intervention for hearing loss (before 6 months) leads to significantly better language outcomes.
          </p>
        </section>

        {/* Touch and Tactile */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Touch &amp; Tactile Development</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Birth:</strong> Touch is the most developed sense at birth. Responds to skin-to-skin contact, calmed by swaddling</li>
            <li><strong>1-4 months:</strong> Explores textures with mouth (mouthing everything is learning). Responds to different pressures</li>
            <li><strong>5-8 months:</strong> Actively reaches to touch and explore textures. Enjoys different tactile experiences</li>
            <li><strong>9-12 months:</strong> Uses touch to explore objects purposefully. Develops hand preferences for texture</li>
            <li><strong>1-2 years:</strong> Enjoys messy play (water, sand, paint). Tolerates a wider range of textures in food and clothing</li>
            <li><strong>2-3 years:</strong> Uses touch with intention in play and self-care. Distinguishes between textures verbally</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Offer sensory bins with safe materials (rice, water, sand).
            Provide toys with varied textures. Allow supervised messy play. Infant massage supports
            tactile development and bonding. Introduce varied food textures gradually.
          </p>
        </section>

        {/* Proprioception and Vestibular */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Proprioception &amp; Vestibular Development</h2>
          <p>
            These &quot;hidden&quot; senses are crucial for motor development, coordination, and body awareness:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Proprioception</strong> tells you where your body is without looking -- it allows you to touch your nose with your eyes closed, gauge how much force to use, and move smoothly</li>
            <li><strong>Vestibular sense</strong> provides information about balance, spatial orientation, and head movement -- it allows you to maintain balance, coordinate eye movements with head movements, and know which way is up</li>
          </ul>
          <p>
            Activities that support these systems include tummy time, crawling, climbing, swinging,
            bouncing, spinning (with caution), wheelbarrow walks, carrying heavy objects, and roughhousing.
            Children who seek intense movement (crashing, jumping, spinning) may have high vestibular or
            proprioceptive needs.
          </p>
        </section>

        {/* Sensory Processing */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Sensory Processing: When to Be Concerned</h2>
          <p>
            Sensory processing differences exist on a spectrum. Some children are more sensitive (avoiding
            certain sensations) while others are less sensitive (seeking intense input). Concern is
            warranted when sensory responses significantly interfere with daily life:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Over-sensitive signs:</strong> Extreme distress with certain textures (clothing tags, food textures), covering ears at everyday sounds, avoidance of being touched, meltdowns in busy environments, extreme picky eating due to texture</li>
            <li><strong>Under-sensitive signs:</strong> Constantly crashing into things, not noticing pain, mouthing objects well past infancy, seeking very loud sounds or intense movement, difficulty sitting still</li>
            <li><strong>Poor discrimination:</strong> Difficulty finding objects by touch, trouble grading force (too rough with peers), poor body awareness (clumsy, bumping into things)</li>
          </ul>
          <p>
            If sensory differences are affecting your child&apos;s ability to eat, sleep, play, or
            participate in daily activities, ask your pediatrician for a referral to an occupational
            therapist who specializes in sensory processing.
          </p>
        </section>

        {/* FAQ Section */}
        <div className="mt-8">
          <FAQSection items={faqItems} />
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
                CDC — Learn the Signs. Act Early.
              </a>
            </li>
            <li>
              <a
                href="https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Vision
              </a>
            </li>
            <li>
              <a
                href="https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Hearing
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Every child develops at their own pace.
            If you have concerns about your child&apos;s sensory development, talk to your pediatrician.
          </p>
        </div>

        <BottomLine
          summary="Sensory development is the foundation for all learning and interaction with the world. Babies learn through all seven senses -- sight, hearing, touch, taste, smell, proprioception, and vestibular. Provide a rich variety of sensory experiences while following your child's cues about what they enjoy and what overwhelms them. If sensory responses are significantly interfering with daily activities, an occupational therapist can help."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
