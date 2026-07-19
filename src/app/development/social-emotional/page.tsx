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
  title: "Social-Emotional Development",
  description:
    "Guide to social-emotional development from birth to 3 years. Attachment, empathy, cooperation, emotional regulation, and relationship skills. Based on CDC and AAP guidelines.",
  alternates: {
    canonical: "/development/social-emotional",
  },
  openGraph: {
    title: "Social-Emotional Development | Birth to 3 Years",
    description:
      "How babies and toddlers develop attachment, empathy, cooperation, and emotional regulation. Evidence-based guide.",
  },
};

const faqItems = [
  {
    question: "What is secure attachment and why does it matter?",
    answer:
      "Secure attachment is a strong emotional bond between a child and caregiver, built through consistent, responsive care. Securely attached children use their caregiver as a 'safe base' to explore from and return to for comfort. Research shows secure attachment is associated with better emotional regulation, social skills, academic performance, and mental health throughout life. It is built through consistent responsiveness, not perfection.",
  },
  {
    question: "Is separation anxiety normal?",
    answer:
      "Yes. Separation anxiety typically peaks between 10-18 months and is a normal, healthy sign of secure attachment. It shows your baby understands object permanence (you exist when you leave) and has a strong preference for you. While distressing, it is temporary. Most children grow out of intense separation anxiety by 2-3 years. Keep goodbyes brief and consistent, and always return when you say you will.",
  },
  {
    question: "When should toddlers start sharing?",
    answer:
      "True sharing (voluntary, not forced) is not developmentally appropriate until age 3-4. Before that, children are still developing the cognitive and emotional skills required: understanding others' perspectives, impulse control, and the concept of temporary giving. Parallel play (playing alongside but not with) is normal at 18-24 months. Cooperative play emerges around 3-4 years.",
  },
  {
    question: "How do I help my toddler with big emotions and tantrums?",
    answer:
      "Tantrums are normal between ages 1-3 and result from strong emotions meeting limited communication and regulation skills. Help by: staying calm yourself, validating their feelings ('You're frustrated'), setting limits kindly ('I won't let you hit'), offering comfort, and teaching coping strategies over time. Punishing emotions teaches children to suppress rather than manage them. The goal is co-regulation now, leading to self-regulation later.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Social-Emotional Development in Babies & Toddlers",
  description:
    "Guide to social-emotional milestones from birth to 3 years. Attachment, empathy, cooperation, and emotional regulation.",
  path: "/development/social-emotional",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "AAP Social-Emotional Development", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development.aspx" },
    { name: "Zero to Three Social-Emotional", url: "https://www.zerotothree.org/resource/social-emotional-development/" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Social-Emotional" },
]);

export default function SocialEmotionalPage() {
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
          { label: "Social-Emotional" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Social-Emotional Development
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP", "Zero to Three"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Social-emotional development includes attachment, emotional regulation, empathy, cooperation, and self-awareness.",
              "Secure attachment -- built through consistent, responsive caregiving -- is the foundation for all social-emotional skills.",
              "Separation anxiety (peaking 10-18 months) and tantrums (peaking 18-36 months) are normal developmental stages, not behavior problems.",
              "Children learn emotional regulation through co-regulation with caregivers first, then gradually develop self-regulation.",
              "True sharing and cooperative play are not developmentally expected until age 3-4.",
            ]}
          />
        </div>

        {/* What Is Social-Emotional Development */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Is Social-Emotional Development?</h2>
          <p>
            Social-emotional development encompasses how children form relationships, understand and
            manage emotions, and interact with others. It includes attachment to caregivers, understanding
            of self and others, emotional expression and regulation, empathy, cooperation, and social skills.
          </p>
          <p>
            This domain is deeply influenced by the quality of early relationships. When caregivers respond
            consistently and warmly to a child&apos;s needs, the child develops a secure foundation from which
            to explore the world, manage stress, and build relationships with others throughout life.
          </p>
        </section>

        {/* 0-3 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">0-3 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Calms when picked up or comforted</li>
            <li>Social smile appears (6-8 weeks)</li>
            <li>Makes eye contact during feeding and care</li>
            <li>Prefers looking at faces over objects</li>
            <li>Begins to distinguish familiar caregivers from strangers</li>
            <li>Shows pleasure through cooing and smiling</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Respond promptly to cries -- you cannot spoil a newborn.
            Make eye contact during feeding. Talk and sing during care routines. Hold, rock, and comfort
            your baby. Skin-to-skin contact supports bonding and regulation.
          </p>
        </section>

        {/* 4-6 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">4-6 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Smiles spontaneously and laughs</li>
            <li>Enjoys playing with others (especially peek-a-boo)</li>
            <li>Shows emotions clearly (joy, displeasure, excitement)</li>
            <li>Responds to emotions of others (may cry if another baby cries)</li>
            <li>Distinguishes between familiar people and strangers</li>
            <li>Enjoys looking at self in a mirror</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Play interactive games (peek-a-boo, pat-a-cake). Mirror
            your baby&apos;s expressions and sounds. Name emotions (&quot;You&apos;re so happy!&quot;).
            Maintain predictable routines for security. Allow baby to interact with other familiar adults.
          </p>
        </section>

        {/* 7-9 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">7-9 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stranger anxiety emerges (clings to caregiver, cries with unfamiliar people)</li>
            <li>Separation anxiety begins</li>
            <li>Shows clear preference for specific caregivers</li>
            <li>Engages in social games (peek-a-boo, so-big)</li>
            <li>Uses social referencing (looks to caregiver for reaction in new situations)</li>
            <li>Shows a range of emotions: joy, anger, fear, sadness</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Be patient with stranger anxiety -- it is a sign of healthy
            attachment. Keep goodbyes brief and matter-of-fact. Always return when you say you will.
            Allow time to warm up to new people. Provide comfort and reassurance.
          </p>
        </section>

        {/* 12 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">12 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Shows affection to familiar people (hugs, kisses)</li>
            <li>Plays simple social games</li>
            <li>Cries when caregiver leaves (separation anxiety peaks 10-18 months)</li>
            <li>May be shy or fearful with strangers</li>
            <li>Shows preference for certain people and toys</li>
            <li>Tests limits and watches for caregiver reaction</li>
            <li>Seeks comfort when upset by going to caregiver</li>
          </ul>
          <p>
            <strong>Red flag:</strong> If your child does not show affection for familiar people, does not
            react to your emotions, or does not notice when a caregiver leaves or returns by 12 months,
            discuss with your pediatrician.
          </p>
        </section>

        {/* 18 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">18 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Shows interest in other children (watches, approaches)</li>
            <li>Explores independently but checks back with caregiver</li>
            <li>Beginning of tantrums (strong emotions, limited communication)</li>
            <li>May show possessiveness over toys (&quot;mine!&quot;)</li>
            <li>Copies actions of adults and other children</li>
            <li>Points to show things to others (joint attention)</li>
            <li>Demonstrates simple helping behaviors (brings you something)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Allow independent exploration with you nearby. Acknowledge
            emotions (&quot;I see you&apos;re frustrated&quot;). Set simple, consistent limits. Model
            gentle behavior with others. Do not force sharing -- offer turn-taking instead.
          </p>
        </section>

        {/* 2 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">2 Years (24 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Plays alongside other children (parallel play)</li>
            <li>Shows defiance and independence (&quot;No!&quot; &quot;Me do it!&quot;)</li>
            <li>Tantrums are common (peak age)</li>
            <li>Shows pride in accomplishments (looks for your reaction)</li>
            <li>Begins to show empathy (may comfort a crying child)</li>
            <li>Imitates adults and peers in play</li>
            <li>Shows increasing range of emotions</li>
            <li>Begins to understand &quot;taking turns&quot; (not sharing)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Stay calm during tantrums -- your regulation helps their
            regulation. Offer choices to support autonomy (&quot;Red shirt or blue shirt?&quot;). Praise
            effort and cooperation. Model empathy and emotional language. Create opportunities for parallel
            play with peers.
          </p>
        </section>

        {/* 3 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">3 Years (36 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Plays cooperatively with other children (beginning of true play together)</li>
            <li>Takes turns (with reminders)</li>
            <li>Shows concern for a crying friend</li>
            <li>Understands &quot;mine&quot; and &quot;yours&quot;</li>
            <li>Separates from caregivers more easily</li>
            <li>Expresses a wide range of emotions verbally</li>
            <li>Engages in pretend play with others (shared imaginary scenarios)</li>
            <li>Beginning of simple friendships</li>
            <li>Tantrums decreasing as verbal skills improve</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Arrange play dates for cooperative play practice. Read books
            about emotions and friendship. Use &quot;I feel&quot; statements and teach feeling words.
            Help resolve conflicts by narrating each child&apos;s perspective. Celebrate kindness and cooperation.
          </p>
        </section>

        {/* When to Seek Evaluation */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">When to Seek Evaluation</h2>
          <p>Talk to your pediatrician if your child:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Does not smile at people by 3 months</li>
            <li>Does not show interest in social games by 6 months</li>
            <li>Does not show attachment to caregivers by 9 months</li>
            <li>Does not notice when caregivers leave or return by 12 months</li>
            <li>Does not show interest in other children by 18-24 months</li>
            <li>Has extreme or prolonged tantrums that seem beyond normal intensity</li>
            <li>Shows very limited emotional range (flat affect)</li>
            <li>Does not engage in any pretend play by age 2-3</li>
            <li>Is extremely aggressive toward peers without improvement</li>
            <li>Avoids eye contact or does not share enjoyment with others</li>
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
                href="https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Emotional and Social Development
              </a>
            </li>
            <li>
              <a
                href="https://www.zerotothree.org/resource/social-emotional-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Zero to Three — Social-Emotional Development
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Every child develops at their own pace.
            If you have concerns about your child&apos;s social or emotional development, talk to your pediatrician.
          </p>
        </div>

        <BottomLine
          summary="Social-emotional development is built on the foundation of secure, responsive relationships. Behaviors that feel challenging -- separation anxiety, tantrums, possessiveness -- are normal developmental stages, not problems to fix. Your consistent presence, emotional attunement, and patient guidance teach your child how to manage emotions, build relationships, and navigate the social world."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
