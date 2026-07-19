import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import LastReviewed from "@/components/shared/LastReviewed";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from "@/components/shared/BottomLine";
import {
  getBreadcrumbSchema,
  getContentPageSchema,
  getFAQPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Training Methods: A Complete Guide",
  description:
    "Evidence-based guide to sleep training methods including Ferber, extinction, chair method, pick up put down, and gentle approaches. Learn when to start, what to expect, and which method fits your family.",
  alternates: { canonical: "/sleep/sleep-training" },
  openGraph: {
    title: "Sleep Training Methods: A Complete Guide",
    description:
      "Compare all major sleep training methods with evidence-based guidance on when to start and what to expect.",
  },
};

const faqItems = [
  {
    question: "When is the best age to start sleep training?",
    answer:
      "Most pediatricians recommend waiting until at least 4 to 6 months of age before starting formal sleep training. By this age, most babies are developmentally ready to self-soothe and can physically go longer stretches without feeding. However, establishing healthy sleep habits and routines can begin from birth.",
  },
  {
    question: "Will sleep training harm my baby emotionally?",
    answer:
      "Multiple peer-reviewed studies, including a 2016 randomized controlled trial in Pediatrics, found no evidence of long-term emotional or behavioral harm from sleep training methods including graduated extinction. Cortisol levels, attachment security, and behavioral outcomes showed no differences between sleep-trained and control groups at follow-up.",
  },
  {
    question: "How long does sleep training typically take?",
    answer:
      "Most sleep training methods show significant improvement within 3 to 7 nights when applied consistently. Some babies respond faster, others may take up to 2 weeks. Consistency is the most important factor regardless of method chosen.",
  },
  {
    question: "Can I sleep train while still breastfeeding?",
    answer:
      "Yes. Sleep training and breastfeeding are fully compatible. You can maintain nighttime feeds as needed (especially before 9 months) while teaching your baby to fall asleep independently at bedtime. Many families keep a dream feed or one scheduled night feed while sleep training.",
  },
  {
    question: "What if sleep training is not working after a week?",
    answer:
      "If you see no improvement after 7 to 10 days of consistent effort, consider whether the schedule is age-appropriate (overtired or undertired babies struggle more), whether there is an underlying issue like illness or teething, or whether the chosen method is a good fit. Consulting your pediatrician or a certified sleep consultant can help troubleshoot.",
  },
];

const takeaways = [
  "Sleep training is safe and effective for babies 4 months and older, supported by AAP-cited research.",
  "All methods work when applied consistently -- the best method is one you can stick with.",
  "Graduated extinction (Ferber) and full extinction show the fastest results in studies.",
  "Gentle methods (chair, pick up put down, fading) take longer but involve less crying.",
  "A consistent bedtime routine and age-appropriate schedule are prerequisites for any method.",
  "Sleep training does not mean eliminating night feeds -- you can maintain needed feeds.",
];

export default function SleepTrainingPage() {
  const contentSchema = getContentPageSchema({
    name: "Sleep Training Methods: A Complete Guide",
    description:
      "Evidence-based guide to all major sleep training methods with research, timelines, and practical advice.",
    path: "/sleep/sleep-training",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Safe Sleep Guidelines", url: "https://www.aap.org/en/patient-care/safe-sleep/" },
      { name: "NIH Safe to Sleep Campaign", url: "https://safetosleep.nichd.nih.gov/" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Sleep Training" },
  ]);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Sleep", href: "/sleep" },
          { label: "Sleep Training" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Sleep Training Methods: A Complete Guide
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Sleep training teaches your baby to fall asleep independently at bedtime, which
          helps them connect sleep cycles overnight without needing your help. There are
          several evidence-based methods ranging from minimal-crying approaches to more
          structured techniques. This guide covers all major methods, the research behind
          them, and how to choose the right approach for your family.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "NIH", "Pediatrics"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What is sleep training?
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Sleep training is the process of helping your baby learn to fall asleep
            independently at the start of the night. When babies can self-settle at
            bedtime, they are better equipped to resettle during normal overnight
            awakenings (which happen every 60 to 120 minutes as part of natural sleep
            cycles). Sleep training does not mean your baby will never wake at night --
            it means they can get themselves back to sleep without requiring feeding,
            rocking, or other external help for each cycle transition.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to start sleep training
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The AAP and most pediatric sleep researchers recommend waiting until at least
            4 months of age (adjusted age for preemies) before starting formal sleep
            training. Prerequisites include: your baby has no underlying medical concerns,
            is gaining weight appropriately, and your pediatrician has confirmed readiness.
            The 4-month mark is significant because this is when babies develop more
            mature sleep architecture with distinct sleep cycles.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Before starting, ensure you have an age-appropriate schedule with correct wake
            windows, a consistent bedtime routine (15 to 30 minutes), and that the sleep
            environment is optimized (dark room, white noise, comfortable temperature
            between 68 and 72 degrees F).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Extinction (cry it out / CIO)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Full extinction involves placing your baby in the crib drowsy but awake after
            your bedtime routine, then leaving the room and not returning until morning (or
            a scheduled feed). Despite its reputation, research consistently shows this is
            the fastest method, with most babies falling asleep independently within 3 to 5
            nights.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            A landmark 2016 study in Pediatrics by Gradisar et al. found that babies who
            underwent extinction fell asleep an average of 13 minutes faster than controls,
            with no difference in cortisol levels, parent-child attachment, or behavioral
            problems at 12-month follow-up.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Graduated extinction (Ferber method)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Developed by Dr. Richard Ferber at Harvard, this method involves placing your
            baby down awake and doing timed check-ins at gradually increasing intervals
            (for example, 3 minutes, then 5, then 10). During checks, you briefly reassure
            your baby verbally or with a pat but do not pick them up or feed them.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The Ferber method typically shows results within 3 to 7 nights. It works well
            for parents who want some involvement in the process but need a structured
            approach. Note that for some babies, check-ins can be stimulating and
            escalate crying -- if this happens, longer intervals or full extinction may
            be more effective.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Chair method (sleep lady shuffle)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            With the chair method, you sit in a chair next to the crib while your baby
            falls asleep. Every 2 to 3 nights, you move the chair farther from the crib
            until you are outside the room. You can offer verbal reassurance but avoid
            picking up or feeding. This method typically takes 2 to 3 weeks to complete.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The chair method works well for anxious parents or for babies with
            separation anxiety. The main challenge is that your presence can sometimes
            be frustrating for the baby (they can see you but you are not helping them
            as they expect). Consistency with this method is critical.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Pick up, put down (PUPD)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Popularized by Tracy Hogg, this method involves picking your baby up when they
            cry until they calm, then placing them back down. You repeat this cycle until
            they fall asleep. It can be physically demanding and typically takes 1 to 3
            weeks. It works best for babies under 6 months. For older babies, the repeated
            picking up can become stimulating and counterproductive.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Bedtime fading
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Bedtime fading involves temporarily moving bedtime later to match when your
            baby naturally falls asleep easily, then gradually shifting it earlier (by
            15 minutes every 2 to 3 nights) until you reach your target bedtime. This
            method leverages sleep pressure to make falling asleep easier and typically
            involves minimal crying. The Gradisar 2016 study found it effective though
            slightly slower than extinction.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Choosing the right method
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            No single method is superior for all families. Consider your temperament,
            your baby&apos;s temperament, and what you can sustain consistently for at
            least a week. Parents who start one method and switch mid-way often see
            longer overall crying than those who commit to one approach. If you cannot
            tolerate any crying, gentle methods may be appropriate but understand they
            take longer. If you need faster results (for example, returning to work),
            extinction-based methods are most efficient.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">Method comparison</p>
            <ul className="space-y-1.5 text-sm text-muted">
              <li><strong>Fastest results:</strong> Full extinction (3-5 nights)</li>
              <li><strong>Moderate pace:</strong> Graduated extinction / Ferber (3-7 nights)</li>
              <li><strong>Slower, less crying:</strong> Chair method (2-3 weeks)</li>
              <li><strong>Most parent involvement:</strong> Pick up put down (1-3 weeks)</li>
              <li><strong>Least crying:</strong> Bedtime fading (2-4 weeks)</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What the research says
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            A 2006 systematic review by Mindell et al. in the journal Sleep examined
            52 studies on behavioral sleep interventions and concluded that extinction
            and graduated extinction are well-established, effective treatments for
            bedtime problems and night wakings. A 2012 five-year follow-up study
            (Price et al., Pediatrics) found no lasting effects on children&apos;s
            emotional health, behavior, sleep quality, stress regulation, or
            parent-child closeness.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The AAP does not endorse one specific sleep training method but
            acknowledges that behavioral sleep interventions are effective and do not
            cause harm. They emphasize that parental mental health and family
            functioning should be considered when making sleep decisions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common mistakes and troubleshooting
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Inconsistency:</strong> The number one reason sleep training fails. Responding sometimes but not others teaches your baby that persistence eventually works.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Wrong schedule:</strong> An overtired or undertired baby will struggle regardless of method. Verify wake windows are age-appropriate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Sleep associations at bedtime:</strong> If your baby falls asleep while feeding or being rocked, they will expect that at every wake-up.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Starting during a regression or illness:</strong> Wait until your baby is healthy and not in a major developmental leap.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Night 3 escalation:</strong> Many babies cry more on night 2 or 3 (extinction burst) before dramatically improving. This is normal -- do not quit on the hardest night.</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Sleep training is a safe, research-backed approach to helping babies learn independent sleep. All methods work when applied consistently -- the best method is the one that fits your family and that you can sustain. Starting with a solid routine, age-appropriate schedule, and optimized sleep environment sets the foundation for success regardless of which technique you choose." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
