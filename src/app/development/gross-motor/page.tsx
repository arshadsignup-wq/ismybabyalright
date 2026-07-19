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
  title: "Gross Motor Development Milestones",
  description:
    "Complete guide to gross motor milestones from birth to 3 years. Learn when babies roll, sit, crawl, walk, and run. Age-by-age breakdown based on CDC 2022 milestones.",
  alternates: {
    canonical: "/development/gross-motor",
  },
  openGraph: {
    title: "Gross Motor Development Milestones | Birth to 3 Years",
    description:
      "When do babies roll, sit, crawl, walk, and run? Evidence-based gross motor milestone guide based on CDC 2022 guidelines.",
  },
};

const faqItems = [
  {
    question: "When should babies start crawling?",
    answer:
      "Most babies begin crawling between 7-10 months, but this varies widely. Some babies skip crawling entirely and go straight to pulling up and cruising. The CDC does not list crawling as a required milestone because the style and timing varies so much. What matters more is that your baby is finding ways to move and explore their environment.",
  },
  {
    question: "Is it normal for a baby to not walk by 12 months?",
    answer:
      "Yes. The CDC's 2022 milestones list independent walking by 18 months (not 12 months) as the expected milestone. Many typically-developing children do not walk independently until 14-15 months. However, if your child is not standing with support by 12 months or not walking by 18 months, talk to your pediatrician.",
  },
  {
    question: "Does tummy time really matter for gross motor development?",
    answer:
      "Yes. The AAP recommends tummy time starting from day one (while awake and supervised). Tummy time strengthens neck, shoulder, arm, and core muscles that are prerequisites for rolling, sitting, crawling, and eventually walking. Start with short sessions (3-5 minutes) several times a day and gradually increase as your baby tolerates it.",
  },
  {
    question: "Should I use a baby walker to help my baby learn to walk?",
    answer:
      "No. The AAP strongly advises against baby walkers. They do not help babies learn to walk, can delay motor development by strengthening the wrong muscle groups, and cause thousands of injuries each year (falls down stairs, reaching dangerous items). Instead, provide safe opportunities for pulling up, cruising along furniture, and push toys.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Gross Motor Development Milestones",
  description:
    "Complete guide to gross motor milestones from birth to 3 years. Age-by-age breakdown based on CDC 2022 milestones.",
  path: "/development/gross-motor",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "AAP Motor Development Guidelines", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Gross Motor" },
]);

export default function GrossMotorPage() {
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
          { label: "Gross Motor" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Gross Motor Development Milestones
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Gross motor skills involve large body movements -- rolling, sitting, crawling, walking, running, and jumping.",
              "The CDC 2022 milestones represent what 75% of children achieve by that age -- not reaching a milestone is a signal to discuss with your pediatrician.",
              "Tummy time from birth is the foundation for all later gross motor skills.",
              "Baby walkers do NOT help and are associated with injuries -- the AAP recommends against them.",
              "There is a wide range of normal for most milestones, but skill regression at any age warrants immediate evaluation.",
            ]}
          />
        </div>

        {/* What Are Gross Motor Skills */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Are Gross Motor Skills?</h2>
          <p>
            Gross motor skills involve the large muscles of the body -- the core, arms, and legs.
            These skills allow children to control their bodies against gravity, maintain balance, and
            move through space. They form the foundation for physical independence and active play.
          </p>
          <p>
            Gross motor development follows a predictable pattern: head control comes first, then trunk
            stability, then limb coordination. This &quot;top-down&quot; (cephalocaudal) and &quot;center-out&quot;
            (proximodistal) progression means babies gain control of their head and neck before their
            trunk, and their trunk before their arms and legs.
          </p>
        </section>

        {/* 0-2 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">0-2 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Lifts head briefly during tummy time</li>
            <li>Moves arms and legs (not purposefully directed)</li>
            <li>Turns head to both sides while on back</li>
            <li>Flexed posture when held (arms and legs tucked in)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Begin supervised tummy time from day one. Start on your
            chest for skin-to-skin sessions. Place baby on a firm surface for 3-5 minutes, several
            times per day. Use your face and voice to encourage head lifting.
          </p>
        </section>

        {/* 4 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">4 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Holds head steady without support when held upright</li>
            <li>Pushes up on forearms during tummy time (mini push-up)</li>
            <li>Brings hands to midline</li>
            <li>May begin rolling from tummy to back</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Offer longer tummy time sessions with toys placed just out
            of reach to encourage reaching. Support baby in sitting with your hands around their trunk.
            Allow plenty of floor time on a safe surface.
          </p>
        </section>

        {/* 6 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">6 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rolls from tummy to back and back to tummy</li>
            <li>Pushes up on straight arms during tummy time</li>
            <li>Begins to sit without support (briefly, may use hands)</li>
            <li>Bears weight on legs when held standing</li>
            <li>Rocks on hands and knees</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Create safe spaces for rolling practice. Sit baby on the
            floor with a pillow behind for support. Offer toys that encourage reaching while sitting to
            build balance. Hold baby standing on your lap for short periods.
          </p>
        </section>

        {/* 9 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">9 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sits without support for extended periods</li>
            <li>Gets into sitting position independently</li>
            <li>Moves between positions (sitting to hands-and-knees)</li>
            <li>Crawls or finds another way to move across the room</li>
            <li>Pulls to standing using furniture</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Baby-proof your home to allow safe exploration. Place
            interesting items on low furniture to encourage pulling up. Create obstacle courses with
            cushions for crawling over and around. Avoid restricting movement with containers (swings,
            bouncers) for extended periods.
          </p>
        </section>

        {/* 12 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">12 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pulls to standing and cruises along furniture</li>
            <li>Stands alone for a few seconds</li>
            <li>May take a few independent steps</li>
            <li>Gets into standing without pulling up on anything</li>
          </ul>
          <p>
            <strong>Important note:</strong> Many children do not walk independently at 12 months --
            this is normal. The CDC milestone for independent walking is 18 months. However, if your
            child is not pulling to stand by 12 months, discuss this with your pediatrician.
          </p>
          <p>
            <strong>What you can do:</strong> Offer stable furniture for cruising. Push toys (not baby
            walkers) support walking practice. Let your child go barefoot indoors for better sensory
            feedback and foot muscle development. Hold both hands, then one hand, as they practice.
          </p>
        </section>

        {/* 15 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">15 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Takes several steps independently</li>
            <li>Walks with wide-based gait (legs apart for balance)</li>
            <li>Squats to pick up a toy and stands back up</li>
            <li>Begins climbing (onto low furniture, up stairs with help)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Offer safe climbing opportunities (cushions, low steps).
            Walk together outdoors on different surfaces (grass, sand, sidewalk). Roll or kick a ball.
            Allow messy play that involves whole-body movement.
          </p>
        </section>

        {/* 18 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">18 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Walks independently without holding on</li>
            <li>May walk up steps holding a railing or hand</li>
            <li>Runs stiffly (emerging running pattern)</li>
            <li>Climbs onto and off of furniture without help</li>
            <li>Carries toys while walking</li>
          </ul>
          <p>
            <strong>Red flag:</strong> If your child is not walking independently by 18 months, the CDC
            recommends discussing this with your pediatrician and requesting a developmental evaluation.
          </p>
        </section>

        {/* 2 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">2 Years (24 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Runs with better coordination</li>
            <li>Kicks a ball forward</li>
            <li>Walks up and down stairs holding the railing (both feet on each step)</li>
            <li>Jumps with both feet leaving the ground</li>
            <li>Throws a ball overhand</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Visit playgrounds for climbing, sliding, and swinging.
            Play ball games (kicking, throwing, rolling). Dance and march to music. Provide ride-on toys.
            Allow outdoor play on uneven surfaces for balance development.
          </p>
        </section>

        {/* 3 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">3 Years (36 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pedals a tricycle</li>
            <li>Runs easily and changes direction</li>
            <li>Climbs stairs alternating feet (one foot per step going up)</li>
            <li>Catches a large ball with both arms</li>
            <li>Stands on one foot briefly (1-2 seconds)</li>
            <li>Hops on one foot (emerging skill)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide tricycles and balance bikes. Play obstacle courses.
            Practice hopping, skipping, galloping. Play catch with large soft balls. Encourage swimming
            (with supervision). Offer climbing structures appropriate for their size.
          </p>
        </section>

        {/* When to Seek Evaluation */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">When to Seek Evaluation</h2>
          <p>Talk to your pediatrician if your child:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Is not holding their head up by 4 months</li>
            <li>Is not sitting independently by 9 months</li>
            <li>Is not pulling to stand by 12 months</li>
            <li>Is not walking independently by 18 months</li>
            <li>Consistently uses one side of their body much more than the other</li>
            <li>Seems very stiff or very floppy</li>
            <li>Loses skills they previously had</li>
            <li>Has persistent toe walking after age 2</li>
            <li>Falls much more frequently than peers</li>
          </ul>
          <p>
            You can request a free developmental evaluation through your state&apos;s Early Intervention
            program (for children under 3) or your school district (for children 3 and older) without
            needing a doctor&apos;s referral.
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
                href="https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Movement Milestones
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
          summary="Gross motor development follows a predictable pattern -- head control, then trunk stability, then limb coordination -- but the timeline varies between children. Tummy time is the foundation for everything that follows. Focus on providing safe opportunities for movement and exploration rather than rushing milestones, and talk to your pediatrician if your child is not meeting the CDC's age-specific benchmarks."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
