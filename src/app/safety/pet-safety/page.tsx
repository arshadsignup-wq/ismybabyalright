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
  title: 'Pet Safety Around Babies',
  description:
    'Pet safety guide for families with babies. Introducing dogs and cats to newborns, supervision rules, hygiene, allergy concerns, and preventing bites and scratches.',
  alternates: { canonical: '/safety/pet-safety' },
  openGraph: {
    title: 'Pet Safety Around Babies | Is My Baby Alright?',
    description:
      'Introducing pets to newborns, supervision rules, hygiene, allergy concerns, and preventing bites and scratches.',
  },
};

const faqItems = [
  { question: 'How do I introduce my dog to my newborn?', answer: 'Before coming home, have someone bring a blanket or clothing with the baby\'s scent for the dog to sniff. Keep the first introduction calm and brief. Have one adult hold the baby and another control the dog on a leash. Reward calm behavior. Never force the interaction. Build up gradually over days and weeks.' },
  { question: 'Should I ever leave my pet alone with my baby?', answer: 'No. Never leave any pet unsupervised with a baby or young child, regardless of the pet\'s temperament or history. Even the gentlest pet can react unpredictably when startled, hurt, or stressed. An adult must always be actively supervising when pets and children are together.' },
  { question: 'Are cats dangerous around sleeping babies?', answer: 'Cats should not have access to sleeping babies. While the myth of cats "stealing breath" is false, cats may lie on a baby\'s face or chest seeking warmth, which poses a suffocation risk. Keep cats out of the nursery with a screen door or keep the door closed.' },
  { question: 'When should I be concerned about a dog bite?', answer: 'All dog bites that break the skin should be evaluated by a doctor due to infection risk. Seek immediate care if: the bite is on the face, hands, or feet; the wound is deep or gaping; there is significant bleeding; you do not know the dog\'s vaccination history; or there are signs of infection (redness, swelling, warmth, pus).' },
  { question: 'Can my baby be allergic to pets?', answer: 'Yes, but pet allergies are less common in babies than in older children. Signs include persistent sneezing, runny nose, watery eyes, skin rashes, or worsening eczema when near the pet. Interestingly, some research suggests early pet exposure may reduce allergy risk. Discuss concerns with your pediatrician.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Pet Safety' },
];

export default function PetSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Pet Safety Around Babies',
          description: 'Complete pet safety guide for families with babies covering introductions, supervision, hygiene, and preventing bites and scratches.',
          path: '/safety/pet-safety',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Injury Prevention', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CDC Dog Bite Prevention', url: 'https://www.cdc.gov/dog-bites/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Pet Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Pet Safety Around Babies
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CDC', 'AVMA']} />
      <p className="text-sm text-muted mb-6">
        Pets can be wonderful for children, but interactions between pets and babies
        require careful management. Over 350,000 children visit the ER each year
        from dog bites alone, and the majority involve the family&apos;s own pet or a
        pet they know.
      </p>

      <KeyTakeaways
        takeaways={[
          'Never leave any pet unsupervised with a baby or young child — regardless of temperament',
          'Most dog bites to children involve the family\'s own pet or a known dog',
          'Keep pets out of the nursery and away from sleeping babies',
          'Teach toddlers to be gentle: no pulling ears/tails, no disturbing eating/sleeping pets',
          'All dog bites that break the skin require medical evaluation',
        ]}
      />

      <div className="space-y-6">
        <Section title="Introducing dogs to a newborn">
          <p>Start preparing your dog before the baby arrives:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Before birth:</strong> Practice basic commands (sit, stay, leave it, go to your place)</li>
            <li><strong>Before birth:</strong> Gradually adjust the dog&apos;s routine to what it will be after baby arrives</li>
            <li><strong>Before birth:</strong> Set up nursery furniture early so the dog can adjust</li>
            <li><strong>Before birth:</strong> Play recordings of baby sounds to desensitize</li>
            <li><strong>First introduction:</strong> Have someone bring home a blanket with baby&apos;s scent first</li>
            <li><strong>First introduction:</strong> Keep the dog on leash; reward calm behavior with treats</li>
            <li><strong>First introduction:</strong> Let the dog sniff at a distance; do not force contact</li>
            <li><strong>Ongoing:</strong> Give the dog attention and maintain their routine as much as possible</li>
            <li><strong>Ongoing:</strong> Create a safe space where the dog can retreat from baby chaos</li>
          </ul>
        </Section>

        <Section title="Introducing cats to a newborn">
          <ul className="list-disc list-inside space-y-1">
            <li>Keep cats out of the nursery (use a screen door so you can hear baby)</li>
            <li>Never allow a cat near a sleeping baby (suffocation risk from lying on face/chest)</li>
            <li>Keep the crib covered with a mesh tent if the cat can access the room</li>
            <li>Maintain the cat&apos;s routine to reduce stress-related behavior changes</li>
            <li>Keep litter boxes in areas the baby cannot access (toxoplasmosis risk)</li>
            <li>Trim claws regularly to minimize scratch risk</li>
            <li>Provide high perches where the cat can observe safely</li>
          </ul>
        </Section>

        <Section title="Supervision rules">
          <p className="font-semibold text-foreground">The #1 rule: Never leave a baby or young child alone with any pet.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>&quot;Supervised&quot; means an adult is actively watching — not in the next room</li>
            <li>If you cannot supervise, separate them (pet in another room or baby in a safe space)</li>
            <li>Even the gentlest pet can react when startled, in pain, or when food/toys are involved</li>
            <li>A wagging tail does not always mean a dog is happy — learn canine stress signals</li>
            <li>Young children do not understand &quot;gentle&quot; and may provoke a bite without meaning to</li>
          </ul>
        </Section>

        <Section title="Dog stress signals to watch for">
          <p>Learn to recognize when a dog is uncomfortable and intervene before a bite occurs:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Subtle signs (intervene now):</strong> lip licking, yawning, turning head away, whale eye (showing whites), ears pinned back, stiff body</li>
            <li><strong>Escalating signs (separate immediately):</strong> growling, snapping, baring teeth, raised hackles, hard stare</li>
            <li>Never punish a dog for growling — growling is a warning before biting. If you punish the growl, the dog may bite without warning next time.</li>
            <li>Give the dog an escape route — never trap them in a corner with a child</li>
          </ul>
        </Section>

        <Section title="Teaching toddlers pet safety">
          <p>Start teaching gentle behavior as soon as your child can interact with pets:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Gentle hands only</strong> — demonstrate soft petting on their arm first</li>
            <li><strong>No pulling</strong> ears, tails, fur, or whiskers</li>
            <li><strong>Never disturb</strong> a pet that is eating, sleeping, or chewing a bone</li>
            <li><strong>Never approach</strong> an unknown dog without asking the owner</li>
            <li><strong>If a dog approaches:</strong> stand still like a tree (do not run or scream)</li>
            <li><strong>Never hug dogs</strong> around the neck — most dogs find this threatening</li>
            <li><strong>Leave the pet alone</strong> when it goes to its safe space</li>
          </ul>
        </Section>

        <Section title="Hygiene and health considerations">
          <ul className="list-disc list-inside space-y-1">
            <li>Wash hands after touching pets, especially before handling food</li>
            <li>Keep pet food and water bowls out of baby&apos;s reach (choking hazard from kibble)</li>
            <li>Keep litter boxes inaccessible to babies (toxoplasmosis and bacteria)</li>
            <li>Keep pets current on vaccinations and parasite prevention</li>
            <li>Do not allow pets to lick baby&apos;s face or open wounds</li>
            <li>Clean pet accidents immediately and thoroughly</li>
            <li>Vacuum regularly to reduce dander if anyone has allergies</li>
            <li>Keep pet toys separate from baby toys</li>
          </ul>
        </Section>

        <Section title="When to seek medical care">
          <p className="font-semibold text-foreground">For bites and scratches:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>All bites that break the skin need medical evaluation (infection risk)</li>
            <li>Wash wounds with soap and water for 5 minutes immediately</li>
            <li>Seek emergency care for: bites on face/hands/feet, deep or gaping wounds, significant bleeding</li>
            <li>Watch for infection signs: increasing redness, swelling, warmth, pus, fever</li>
            <li>Cat scratches: watch for cat-scratch disease (swollen lymph nodes, fever)</li>
          </ul>
        </Section>

        <Section title="Pet safety checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Pet never left unsupervised with baby</li>
            <li>Nursery is pet-free (especially during sleep)</li>
            <li>Pet has a safe retreat space away from baby</li>
            <li>Pet food and water bowls out of baby&apos;s reach</li>
            <li>Litter boxes inaccessible to baby</li>
            <li>Pet current on vaccinations and vet checks</li>
            <li>Family knows dog stress signals</li>
            <li>Toddler learning &quot;gentle hands&quot; rules</li>
            <li>Pet toys and baby toys kept separate</li>
            <li>Hands washed after pet contact</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Pets and babies can coexist safely with proper management. The key rules: never leave them unsupervised, keep pets out of the sleeping area, learn to read your pet's stress signals, and teach gentle handling as soon as your child is old enough. Most pet injuries to children are preventable with active supervision."
        supportiveMessage="You do not need to rehome a well-behaved pet when a baby arrives. With preparation, gradual introductions, and consistent supervision rules, most families successfully manage both pets and young children."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/travel" className="text-sm text-primary font-semibold hover:underline">Travel Safety &rarr;</Link>
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
