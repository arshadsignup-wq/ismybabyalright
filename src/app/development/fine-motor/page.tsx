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
  title: "Fine Motor Development Milestones",
  description:
    "Complete guide to fine motor milestones from birth to 3 years. Learn when babies grasp, pinch, stack, draw, and feed themselves. Based on CDC 2022 and AAP guidelines.",
  alternates: {
    canonical: "/development/fine-motor",
  },
  openGraph: {
    title: "Fine Motor Development Milestones | Birth to 3 Years",
    description:
      "When do babies grasp toys, use a pincer grasp, stack blocks, and hold a crayon? Evidence-based fine motor guide.",
  },
};

const faqItems = [
  {
    question: "When should a baby develop a pincer grasp?",
    answer:
      "Most babies develop a pincer grasp (using thumb and index finger to pick up small objects) between 9-12 months. Before this, babies use a raking grasp (all fingers) around 6-7 months, then a crude pincer (thumb against side of index finger) around 8-9 months, before refining to a neat pincer grasp by 12 months. This progression is important for self-feeding and later skills like writing.",
  },
  {
    question: "How can I help my baby develop fine motor skills?",
    answer:
      "Offer age-appropriate opportunities for practice: rattles and toys to grasp (0-4 months), transfer objects between hands (5-7 months), finger foods and small objects to pick up (8-12 months), stacking toys and shape sorters (12-18 months), crayons and play dough (18-24 months), scissors and puzzles (2-3 years). Always supervise and ensure items are safe for your child's age.",
  },
  {
    question: "Should I be concerned if my toddler is not using a spoon yet?",
    answer:
      "The CDC milestone for using a spoon is by 18 months. Before that, messily self-feeding with a spoon is common from 12-15 months. If your child shows no interest in holding utensils or self-feeding by 15-18 months, mention it to your pediatrician. Some children prefer finger foods longer, which is fine as long as they are developing the motor skills to manipulate objects in other ways.",
  },
  {
    question: "When should a child be able to draw a circle?",
    answer:
      "Most children can copy a circle by age 3 (36 months). Before that, they progress from random scribbling (12-15 months) to controlled scribbling (18 months) to vertical lines (24 months) to horizontal lines (30 months) to circles (36 months). If your child is not scribbling at all by 18 months or cannot imitate a line by 2 years, discuss with your pediatrician.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Fine Motor Development Milestones",
  description:
    "Complete guide to fine motor milestones from birth to 3 years. Based on CDC 2022 and AAP guidelines.",
  path: "/development/fine-motor",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "AAP Fine Motor Development", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills.aspx" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Fine Motor" },
]);

export default function FineMotorPage() {
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
          { label: "Fine Motor" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Fine Motor Development Milestones
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Fine motor skills involve small, precise movements of the hands and fingers -- grasping, pinching, manipulating, and coordinating hand-eye movements.",
              "Development progresses from reflexive grasping to voluntary reaching, then to increasingly precise finger control.",
              "The pincer grasp (thumb and index finger) typically develops between 9-12 months and is critical for self-feeding and later writing.",
              "Hand dominance usually becomes clear between 2-3 years -- earlier strong preference for one hand may warrant evaluation.",
              "Fine motor delays can affect self-feeding, dressing, drawing, and later academic skills like writing.",
            ]}
          />
        </div>

        {/* What Are Fine Motor Skills */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Are Fine Motor Skills?</h2>
          <p>
            Fine motor skills involve the coordination of small muscles in the hands and fingers,
            often in coordination with the eyes (hand-eye coordination). These skills are essential
            for self-care tasks (feeding, dressing, brushing teeth), play (stacking, puzzles,
            drawing), and later academic skills (writing, cutting, using tools).
          </p>
          <p>
            Fine motor development depends on adequate gross motor development -- particularly core
            stability and shoulder strength. A child needs a stable trunk and shoulders to have the
            control necessary for precise hand movements. This is one reason tummy time and gross
            motor activities support fine motor development indirectly.
          </p>
        </section>

        {/* 0-2 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">0-2 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hands mostly in fisted position (grasp reflex)</li>
            <li>Briefly holds a rattle if placed in hand</li>
            <li>Hands occasionally open spontaneously</li>
            <li>Brings hands near face</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Place safe rattles or fabric toys in baby&apos;s hand to
            stimulate grasp reflex. Gently massage open baby&apos;s fists during diaper changes.
            Allow skin-to-skin contact where baby can grasp your finger or clothing.
          </p>
        </section>

        {/* 4 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">4 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reaches for and grasps toys using whole hand (palmar grasp)</li>
            <li>Brings objects to mouth</li>
            <li>Hands mostly open</li>
            <li>Holds and shakes a rattle</li>
            <li>Bats at dangling objects</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Offer toys of different sizes and textures to grasp.
            Hold toys within reach to encourage reaching. Use a play gym with dangling objects.
            Let baby explore your face with their hands.
          </p>
        </section>

        {/* 6 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">6 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Transfers objects from one hand to the other</li>
            <li>Uses a raking grasp to pick up small items</li>
            <li>Holds a bottle or cup with both hands</li>
            <li>Bangs objects on surfaces</li>
            <li>Reaches with one hand (more precise than two-hand reaching)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Offer objects to each hand to encourage transferring.
            Provide safe items of varying sizes for practice. Introduce first finger foods (large,
            soft pieces) to encourage self-feeding with a raking grasp. Let baby bang a spoon on a
            high chair tray.
          </p>
        </section>

        {/* 9 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">9 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developing pincer grasp (thumb and fingers)</li>
            <li>Picks up small objects like cereal pieces</li>
            <li>Points at objects with index finger</li>
            <li>Claps hands together</li>
            <li>Releases objects voluntarily (drops them intentionally)</li>
            <li>Explores objects by poking, pulling, turning</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Offer small, safe finger foods (puffs, soft diced
            fruit) for pincer grasp practice. Provide containers to drop objects into and dump out.
            Play pat-a-cake and other clapping games. Offer board books with pages to turn.
          </p>
        </section>

        {/* 12 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">12 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Refined pincer grasp (neat pincer -- fingertip to thumb tip)</li>
            <li>Puts objects into and takes them out of containers</li>
            <li>Turns pages of a board book (several at a time)</li>
            <li>Begins using a spoon (messily)</li>
            <li>Stacks 2 blocks</li>
            <li>Scribbles with a crayon</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide stacking toys, nesting cups, and shape sorters.
            Offer large crayons and paper for scribbling. Let baby practice with a spoon during meals
            (expect mess). Provide containers with lids for opening and closing practice.
          </p>
        </section>

        {/* 18 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">18 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stacks 3-4 blocks</li>
            <li>Uses a spoon with some success</li>
            <li>Scribbles spontaneously</li>
            <li>Turns pages one at a time (board book)</li>
            <li>Begins to show hand preference</li>
            <li>Takes off shoes and socks</li>
            <li>Drinks from an open cup (with spilling)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide play dough for squeezing and poking. Offer large
            bead stringing toys. Practice with zippers and large buttons on dress-up clothes. Encourage
            self-feeding with utensils. Provide water play with pouring cups.
          </p>
        </section>

        {/* 2 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">2 Years (24 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stacks 6+ blocks</li>
            <li>Turns door knobs</li>
            <li>Screws and unscrews lids</li>
            <li>Imitates vertical and horizontal lines</li>
            <li>Snips with scissors (emerging)</li>
            <li>Feeds self with spoon and fork with minimal spilling</li>
            <li>Helps with undressing (pulls down pants, removes jacket)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Introduce child-safe scissors for snipping practice.
            Provide puzzles with knobs (3-5 pieces). Offer lacing cards. Play with play dough using
            tools (rollers, cutters). Practice drawing lines and circles together.
          </p>
        </section>

        {/* 3 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">3 Years (36 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Copies a circle</li>
            <li>Cuts across a piece of paper with scissors</li>
            <li>Strings large beads</li>
            <li>Turns single pages in a regular book</li>
            <li>Unbuttons large buttons</li>
            <li>Holds a crayon with fingers (not fist)</li>
            <li>Completes 3-4 piece puzzles</li>
            <li>Pours from a small pitcher</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide more complex puzzles. Practice cutting along lines.
            Introduce tracing and dot-to-dot activities. Encourage dressing independently (buttons, zippers).
            Offer arts and crafts with glue, stickers, and small materials.
          </p>
        </section>

        {/* When to Seek Evaluation */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">When to Seek Evaluation</h2>
          <p>Talk to your pediatrician if your child:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Is not reaching for or grasping objects by 5 months</li>
            <li>Is not transferring objects between hands by 8 months</li>
            <li>Has no pincer grasp by 12 months</li>
            <li>Cannot stack 2 blocks by 15 months</li>
            <li>Shows no interest in self-feeding by 15 months</li>
            <li>Cannot scribble by 18 months</li>
            <li>Shows strong hand preference before 12 months (may indicate weakness on one side)</li>
            <li>Frequently drops objects or has difficulty holding things</li>
            <li>Avoids activities that require hand use</li>
          </ul>
          <p>
            An occupational therapist specializes in fine motor skills and can evaluate your child&apos;s
            hand function, recommend activities, and provide therapy if needed.
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
                href="https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Hand and Finger Skills
              </a>
            </li>
            <li>
              <a
                href="https://publications.aap.org/pediatrics/article/149/3/e2021052138/184748"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP — Evidence-Informed Milestones for Developmental Surveillance (2022)
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Every child develops at their own pace.
            If you have concerns about your child&apos;s development, talk to your pediatrician.
          </p>
        </div>

        <BottomLine
          summary="Fine motor skills develop from whole-hand grasping to increasingly precise finger movements over the first three years. These skills are essential for self-care, play, and later academic success. Provide age-appropriate materials and opportunities for practice, and seek evaluation from an occupational therapist if your child is not meeting fine motor milestones."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
