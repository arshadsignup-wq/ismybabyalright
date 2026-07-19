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
  title: "Cognitive Development in Babies & Toddlers",
  description:
    "Guide to cognitive milestones from birth to 3 years. Problem-solving, memory, cause and effect, imagination, and thinking skills. Based on CDC and AAP guidelines.",
  alternates: {
    canonical: "/development/cognitive",
  },
  openGraph: {
    title: "Cognitive Development Milestones | Birth to 3 Years",
    description:
      "How babies and toddlers learn to think, solve problems, and understand the world. Evidence-based cognitive development guide.",
  },
};

const faqItems = [
  {
    question: "What is object permanence and when does it develop?",
    answer:
      "Object permanence is the understanding that objects continue to exist even when you cannot see them. It begins developing around 4-7 months (baby looks for a partially hidden toy) and is well-established by 8-12 months (baby actively searches for completely hidden objects). This is why peek-a-boo delights babies -- they are practicing this concept.",
  },
  {
    question: "How can I support my baby's cognitive development?",
    answer:
      "The best ways to support cognitive development are: responsive interactions (serve and return), narrating your day, reading together daily, providing age-appropriate toys that encourage exploration, allowing safe independent exploration, playing cause-and-effect games, and limiting passive screen time. Simple activities like hiding toys, stacking blocks, and sorting shapes build critical thinking skills.",
  },
  {
    question: "Is screen time harmful to cognitive development?",
    answer:
      "The AAP recommends no screen time before 18 months (except video calls) and limited, high-quality programming for ages 18-24 months with co-viewing. Research shows that passive screen time does not support -- and may hinder -- cognitive and language development in young children. Interactive play, reading, and responsive caregiving are far more effective for brain development.",
  },
  {
    question: "When do toddlers start pretend play?",
    answer:
      "Simple pretend play emerges around 12-18 months (pretending to drink from an empty cup, feeding a doll). By 2 years, pretend play becomes more complex (cooking in a play kitchen, driving a car). By 3 years, children engage in elaborate imaginative scenarios with storylines. Pretend play is a critical cognitive milestone that shows abstract thinking ability.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Cognitive Development in Babies & Toddlers",
  description:
    "Guide to cognitive milestones from birth to 3 years. Problem-solving, memory, cause and effect, and thinking skills.",
  path: "/development/cognitive",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "AAP Cognitive Development", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Cognitive-Development.aspx" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Cognitive" },
]);

export default function CognitivePage() {
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
          { label: "Cognitive" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Cognitive Development in Babies &amp; Toddlers
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Cognitive development includes thinking, learning, problem-solving, memory, attention, and imagination.",
              "Babies are born learning -- they process information from birth through all their senses.",
              "Object permanence (knowing hidden things still exist) develops between 4-12 months and is a foundational cognitive skill.",
              "Pretend play (emerging 12-18 months) demonstrates abstract thinking and is a critical cognitive milestone.",
              "Responsive caregiving and interactive play are far more effective for brain development than any toy or screen.",
            ]}
          />
        </div>

        {/* What Is Cognitive Development */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Is Cognitive Development?</h2>
          <p>
            Cognitive development refers to how children think, explore, learn, and figure things out.
            It includes memory, attention, problem-solving, reasoning, creativity, and imagination.
            Cognitive development is deeply interconnected with all other domains -- language provides
            tools for thinking, motor skills enable exploration, and social interaction provides the
            context for learning.
          </p>
          <p>
            The first three years represent the most rapid period of brain development in a person&apos;s
            life. By age 3, a child&apos;s brain has formed approximately 1,000 trillion neural connections --
            twice as many as an adult brain. The quality of early experiences directly shapes which
            connections are strengthened and which are pruned away.
          </p>
        </section>

        {/* 0-3 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">0-3 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Focuses on faces (especially eyes and mouth)</li>
            <li>Tracks moving objects with eyes</li>
            <li>Recognizes familiar people at a distance</li>
            <li>Prefers looking at new things over familiar ones</li>
            <li>Begins to anticipate routine events (gets excited before feeding)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide high-contrast images and patterns to look at.
            Make eye contact during feeding and care. Allow baby to study your face up close (8-12 inches
            is ideal newborn focus distance). Introduce new objects and experiences gradually.
          </p>
        </section>

        {/* 4-6 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">4-6 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Explores objects by mouthing, shaking, banging</li>
            <li>Watches a toy fall and looks for where it went</li>
            <li>Begins to understand cause and effect (shaking a rattle makes noise)</li>
            <li>Shows curiosity about out-of-reach objects</li>
            <li>Recognizes familiar objects and people</li>
            <li>Responds differently to different tones of voice</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide a variety of safe objects with different textures,
            weights, and sounds. Let baby explore -- mouthing is learning. Drop toys and let baby watch
            where they go. Play with cause-and-effect toys (press a button, something happens).
          </p>
        </section>

        {/* 7-9 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">7-9 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Object permanence developing -- looks for partially hidden objects</li>
            <li>Explores how things work (turning, shaking, dropping repeatedly)</li>
            <li>Finds hidden objects (under a cloth)</li>
            <li>Watches the path of a falling object</li>
            <li>Understands that actions have predictable results</li>
            <li>Shows preferences for certain toys or activities</li>
            <li>Stranger anxiety emerges (recognizes familiar vs. unfamiliar)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Play peek-a-boo and hiding games. Let baby drop things and
            watch them fall (the repetition is learning). Offer containers to put things in and dump out.
            Introduce simple problems to solve (a toy slightly out of reach). Name objects and actions.
          </p>
        </section>

        {/* 12 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">12 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Finds hidden objects easily (even when moved between hiding spots)</li>
            <li>Uses objects correctly (brushes hair, drinks from cup)</li>
            <li>Explores objects in new ways (poking, twisting, throwing)</li>
            <li>Begins trial-and-error problem-solving</li>
            <li>Imitates new actions they have observed</li>
            <li>Looks at correct picture when named</li>
            <li>Begins simple pretend play (pretends to drink from empty cup)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide toys that require problem-solving (shape sorters,
            stacking rings, nesting cups). Hide objects and let baby find them. Model using objects
            correctly. Encourage imitation. Play simple pretend games (feeding a stuffed animal).
          </p>
        </section>

        {/* 18 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">18 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Points to things to show you something interesting</li>
            <li>Knows what ordinary things are for (phone, brush, spoon)</li>
            <li>Simple pretend play (feeds doll, pushes toy car)</li>
            <li>Points to get your attention to something</li>
            <li>Explores things in new ways (pouring water, squeezing play dough)</li>
            <li>Follows simple one-step directions</li>
            <li>Understands &quot;mine&quot; and &quot;yours&quot; (emerging)</li>
          </ul>
          <p>
            <strong>Red flag:</strong> If your child does not point to show things to others, does not
            know what familiar objects are for, or does not imitate others by 18 months, discuss with
            your pediatrician.
          </p>
        </section>

        {/* 2 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">2 Years (24 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sorts shapes and colors</li>
            <li>Completes simple puzzles (2-3 pieces)</li>
            <li>Follows two-step instructions</li>
            <li>Begins make-believe play with actions and sequences</li>
            <li>Stacks 4+ blocks</li>
            <li>Understands &quot;more&quot; and &quot;one&quot;</li>
            <li>Names pictures in books</li>
            <li>Begins to understand time concepts (now, later, soon)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Provide sorting and matching games. Introduce simple puzzles.
            Play pretend together (cooking, shopping, doctor). Ask &quot;what&quot; and &quot;where&quot;
            questions. Count objects together. Compare sizes (big, small). Describe sequences
            (&quot;First we eat, then we play&quot;).
          </p>
        </section>

        {/* 3 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">3 Years (36 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Elaborate pretend play with storylines</li>
            <li>Completes 3-4 piece puzzles</li>
            <li>Understands &quot;two&quot; (can give you two objects)</li>
            <li>Copies a circle</li>
            <li>Turns book pages one at a time</li>
            <li>Builds towers of 6+ blocks</li>
            <li>Uses toys with buttons, levers, and moving parts</li>
            <li>Asks &quot;why&quot; questions</li>
            <li>Remembers parts of a story</li>
            <li>Understands same and different</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Encourage complex pretend play with props. Read stories and
            ask questions about what happened and what might happen next. Play counting and sorting games.
            Do simple science experiments (sink or float, mixing colors). Answer &quot;why&quot; questions
            patiently -- they build understanding of the world.
          </p>
        </section>

        {/* When to Seek Evaluation */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">When to Seek Evaluation</h2>
          <p>Talk to your pediatrician if your child:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Does not track objects with eyes by 4 months</li>
            <li>Does not explore objects (mouth, shake, bang) by 6 months</li>
            <li>Does not search for hidden objects by 9 months</li>
            <li>Does not imitate actions by 12 months</li>
            <li>Does not engage in simple pretend play by 18-24 months</li>
            <li>Cannot follow simple instructions by 18 months</li>
            <li>Does not sort shapes or colors by 30 months</li>
            <li>Has very short attention span for age (cannot focus on anything briefly)</li>
            <li>Loses skills they previously demonstrated</li>
          </ul>
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
                href="https://www.healthychildren.org/English/ages-stages/baby/Pages/Cognitive-Development.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Cognitive Development
              </a>
            </li>
            <li>
              <a
                href="https://www.zerotothree.org/resource/brain-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Zero to Three — Brain Development
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Every child develops at their own pace.
            If you have concerns about your child&apos;s cognitive development, talk to your pediatrician.
          </p>
        </div>

        <BottomLine
          summary="Babies are born learning. Cognitive development -- thinking, problem-solving, memory, and imagination -- builds on every interaction and experience. The most powerful tools for supporting your child's brain development are not expensive toys or programs, but responsive caregiving, rich language exposure, and opportunities to explore safely. If you notice your child is not meeting cognitive milestones, early evaluation can identify areas where additional support may help."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
