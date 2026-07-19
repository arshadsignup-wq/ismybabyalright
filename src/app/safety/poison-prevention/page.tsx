import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Poison Prevention for Babies',
  description:
    'Poison prevention guide for homes with babies and toddlers. Medicine safety, cleaning products, toxic plants, button batteries, and when to call Poison Control.',
  alternates: { canonical: '/safety/poison-prevention' },
  openGraph: {
    title: 'Poison Prevention for Babies | Is My Baby Alright?',
    description:
      'Medicine safety, cleaning products, toxic plants, button batteries, and when to call Poison Control.',
  },
};

const faqItems = [
  { question: 'What should I do if my child swallows something poisonous?', answer: 'Call Poison Control immediately at 1-800-222-1222. Do not induce vomiting unless specifically instructed. Try to identify what was swallowed, how much, and when. Keep the container if possible. Call 911 if the child is unconscious, having seizures, or difficulty breathing.' },
  { question: 'What are the most common poisoning hazards for toddlers?', answer: 'Over-the-counter medications (especially acetaminophen and iron supplements), cosmetics and personal care products, cleaning products, laundry and dishwasher pods, button batteries, and plants. Medication accounts for over 40% of child poisoning cases.' },
  { question: 'Are child-resistant caps enough to prevent poisoning?', answer: 'No. Child-resistant does not mean child-proof. Studies show children can open many child-resistant containers in under 10 minutes. Always store medications in locked cabinets, not just containers with safety caps.' },
  { question: 'Which houseplants are toxic to children?', answer: 'Common toxic houseplants include pothos, philodendron, peace lily, dieffenbachia (dumb cane), English ivy, oleander, and lily of the valley. Either remove toxic plants or place them completely out of reach.' },
  { question: 'Are essential oils dangerous for babies?', answer: 'Yes. Many essential oils are toxic if ingested and some can cause chemical burns to the skin or mouth. Tea tree oil, eucalyptus, wintergreen, and camphor are especially dangerous. Store all essential oils locked away from children.' },
  { question: 'Should I keep ipecac syrup at home?', answer: 'No. The AAP no longer recommends ipecac syrup. Inducing vomiting can cause additional harm with many poisons. Always call Poison Control (1-800-222-1222) for specific instructions.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Poison Prevention' },
];

export default function PoisonPreventionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Poison Prevention for Babies and Toddlers',
          description: 'Complete poison prevention guide covering medicines, cleaning products, toxic plants, and emergency response for homes with young children.',
          path: '/safety/poison-prevention',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Poison Prevention', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'American Association of Poison Control Centers', url: 'https://www.aapcc.org/' },
            { name: 'Safe Kids Worldwide', url: 'https://www.safekids.org/' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Poison Prevention' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Poison Prevention for Babies and Toddlers
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'Poison Control', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Over 2 million poisoning exposures are reported to US Poison Control Centers each year,
        and over half involve children under 6. Most poisonings happen at home with products
        used daily. Prevention is straightforward but requires vigilance.
      </p>

      <KeyTakeaways
        takeaways={[
          'Save Poison Control: 1-800-222-1222 (free, 24/7, confidential)',
          'Medications are the #1 cause of child poisoning — store in locked cabinets',
          'Laundry and dishwasher pods are a top hazard — they look like candy to toddlers',
          'Button batteries can cause fatal internal burns within 2 hours if swallowed',
          'Do NOT induce vomiting unless Poison Control specifically instructs you to',
        ]}
      />

      <div className="space-y-6">
        <Section title="Medicine safety">
          <p>Medications account for over 40% of child poisoning cases:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Store ALL medications (including vitamins, supplements, and herbal remedies) in a locked cabinet</li>
            <li>Never leave medications on counters, nightstands, or in purses on the floor</li>
            <li>Do not call medicine &quot;candy&quot; to encourage a child to take it</li>
            <li>Close the cap tightly after every use — even mid-dose</li>
            <li>Use child-resistant caps, but remember they are not child-proof</li>
            <li>Dispose of unused or expired medications at drug take-back events</li>
            <li><strong>Most dangerous medications:</strong> iron supplements, heart medications, diabetes pills, opioids, and sleep aids — even one pill can be fatal to a toddler</li>
          </ul>
        </Section>

        <Section title="Cleaning products and chemicals">
          <ul className="list-disc list-inside space-y-1">
            <li>Store all cleaning products in locked cabinets (not under the sink)</li>
            <li>Keep products in original labeled containers</li>
            <li><strong>Laundry and dishwasher pods</strong> — store in a locked container; the concentrated detergent can cause chemical burns, breathing problems, and eye injury</li>
            <li><strong>Drain cleaners</strong> — extremely caustic; cause severe burns on contact</li>
            <li><strong>Oven cleaners</strong> — store locked and away from food areas</li>
            <li><strong>Antifreeze</strong> — sweet-tasting and attractive to children; fatal in small amounts</li>
            <li>Never mix cleaning products (bleach + ammonia = toxic gas)</li>
            <li>Buy products with child-resistant packaging when available</li>
          </ul>
        </Section>

        <Section title="Button battery danger">
          <p className="font-semibold text-foreground">Button batteries are one of the most dangerous household hazards for young children:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>A swallowed button battery can cause fatal internal burns in as little as 2 hours</li>
            <li>They are found in remotes, key fobs, hearing aids, toys, greeting cards, and watches</li>
            <li>Secure battery compartments with tape if the cover is loose</li>
            <li>Keep loose batteries locked away</li>
            <li>If you suspect a child swallowed a button battery: go to the ER immediately — do not wait for symptoms</li>
            <li>While traveling to the ER, give honey (2 tsp every 10 minutes for children over 12 months) — this has been shown to reduce injury severity</li>
          </ul>
        </Section>

        <Section title="Toxic plants">
          <p>Common houseplants and yard plants that are toxic if ingested:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Houseplants:</strong> pothos, philodendron, peace lily, dieffenbachia, English ivy, ZZ plant, rubber plant</li>
            <li><strong>Outdoor plants:</strong> oleander, foxglove, lily of the valley, azalea, rhododendron, daffodil bulbs, castor bean</li>
            <li><strong>Berries:</strong> holly berries, mistletoe berries, pokeweed berries, nightshade</li>
            <li>Either remove toxic plants or place them completely out of reach (not just on a high shelf a climber could access)</li>
            <li>Teach older toddlers: &quot;We never eat plants unless a grown-up gives them to us&quot;</li>
          </ul>
        </Section>

        <Section title="Other poisoning hazards">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Essential oils</strong> — many are toxic if ingested; some cause chemical burns; store locked</li>
            <li><strong>Alcohol</strong> — even small amounts can cause dangerous low blood sugar and seizures in children</li>
            <li><strong>Hand sanitizer</strong> — contains 60-95% alcohol; keep out of reach</li>
            <li><strong>Cosmetics</strong> — nail polish remover (acetone), perfume (alcohol), hair dye</li>
            <li><strong>Tobacco and nicotine products</strong> — cigarettes, vaping liquid, nicotine gum/patches</li>
            <li><strong>Carbon monoxide</strong> — install CO detectors on every floor; have furnace inspected annually</li>
            <li><strong>Lead</strong> — test paint in homes built before 1978; check for lead in water</li>
          </ul>
        </Section>

        <Section title="What to do in a poisoning emergency">
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>Stay calm</strong> — quick action saves lives</li>
            <li><strong>Call Poison Control: <a href="tel:1-800-222-1222" className="text-primary font-semibold">1-800-222-1222</a></strong> (free, 24/7, confidential)</li>
            <li><strong>Have ready:</strong> the child&apos;s age and weight, what was swallowed, how much, and when</li>
            <li><strong>Do NOT induce vomiting</strong> unless specifically told to — it can cause additional injury</li>
            <li><strong>Do NOT give milk, water, or food</strong> unless instructed by Poison Control</li>
            <li><strong>Call 911 immediately if:</strong> the child is unconscious, having seizures, difficulty breathing, or you suspect a button battery was swallowed</li>
          </ol>
        </Section>

        <Section title="Poison prevention checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Poison Control number saved in phone and posted on fridge: 1-800-222-1222</li>
            <li>All medications in locked cabinets</li>
            <li>Cleaning products in locked cabinets (not under the sink)</li>
            <li>Laundry/dishwasher pods in locked containers</li>
            <li>Button battery compartments secured with tape</li>
            <li>Toxic houseplants removed or placed out of reach</li>
            <li>Essential oils locked away</li>
            <li>Carbon monoxide detectors on every floor</li>
            <li>No medications left in purses, diaper bags, or on counters</li>
            <li>Guest belongings checked for accessible medications</li>
            <li>Alcohol stored out of reach</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Poison prevention comes down to three actions: lock up medications and chemicals, secure button batteries, and save the Poison Control number (1-800-222-1222). If a poisoning occurs, call Poison Control immediately — do not induce vomiting and do not wait for symptoms."
        supportiveMessage="Accidental poisoning can happen to any family, even careful ones. Having the Poison Control number saved and knowing not to induce vomiting are the two most important things to remember."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/fall-prevention" className="text-sm text-primary font-semibold hover:underline">Fall Prevention &rarr;</Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
