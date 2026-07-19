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
  title: "Optimal Sleep Environment for Babies and Toddlers",
  description:
    "Set up the ideal baby sleep environment. Covers room temperature, darkness, white noise, humidity, sleepwear, and safe sleep surface guidelines based on AAP recommendations.",
  alternates: { canonical: "/sleep/sleep-environment" },
  openGraph: {
    title: "Optimal Sleep Environment for Babies and Toddlers",
    description:
      "Evidence-based guide to room temperature, darkness, white noise, and safe sleep setup for babies and toddlers.",
  },
};

const faqItems = [
  {
    question: "What temperature should my baby's room be?",
    answer:
      "The AAP and most pediatric sleep experts recommend keeping the nursery between 68 and 72 degrees Fahrenheit (20 to 22 degrees Celsius). Overheating is a risk factor for SIDS. A good rule of thumb is to dress your baby in one layer more than you would wear to sleep comfortably. If the room is 70°F, a long-sleeve onesie and a medium-weight sleep sack is typically appropriate.",
  },
  {
    question: "Is white noise safe for babies?",
    answer:
      "Yes, when used correctly. The AAP recommends keeping white noise at a moderate volume (no more than 50 decibels, roughly the level of a quiet conversation or gentle shower) and placing the machine at least 7 feet from the crib. A 2014 study in Pediatrics raised concerns about infant sound machines at maximum volume placed near the baby, but at moderate levels and appropriate distance, white noise is considered safe and beneficial for sleep.",
  },
  {
    question: "How dark should the nursery be for sleep?",
    answer:
      "For optimal sleep, the nursery should be very dark -- dark enough that you cannot read a book. This level of darkness supports melatonin production and helps babies (especially those over 8 weeks) distinguish between day and night. Blackout curtains or blackout shades are the most effective solution. A small nightlight (red or amber, not blue or white) can be used if you need to see for diaper changes.",
  },
  {
    question: "Should my baby nap in the same place every time?",
    answer:
      "Consistency helps, but flexibility is okay too. Having a primary nap location that is dark, quiet, and familiar helps your baby associate that space with sleep. However, one nap per day in a different location (stroller, car, carrier) is unlikely to cause problems. If you are working on improving sleep, prioritizing the same location for all naps for a few weeks helps establish the habit faster.",
  },
  {
    question: "When can I add a pillow or blanket to my toddler's bed?",
    answer:
      "The AAP recommends keeping the crib empty until at least 12 months. Many pediatricians suggest waiting until 18 to 24 months before introducing a thin blanket and until age 2 or later for a small, flat toddler pillow. Many children sleep well without a pillow until age 3 or later. Sleep sacks remain the safest option for warmth throughout the toddler years.",
  },
];

const takeaways = [
  "Keep room temperature between 68 and 72 degrees F -- overheating increases SIDS risk.",
  "Make the room very dark for all sleep (blackout curtains are recommended).",
  "White noise at 50 dB or less, placed 7+ feet from the crib, promotes longer sleep.",
  "The crib should have only a firm mattress and fitted sheet -- nothing else until 12+ months.",
  "Dress baby in one layer more than you would wear; a sleep sack replaces blankets.",
  "Humidity between 40-60% helps prevent congestion and dry skin that disrupt sleep.",
];

export default function SleepEnvironmentPage() {
  const contentSchema = getContentPageSchema({
    name: "Optimal Sleep Environment for Babies and Toddlers",
    description:
      "Evidence-based guide to creating the ideal sleep environment including temperature, light, sound, and safety.",
    path: "/sleep/sleep-environment",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Safe Sleep Guidelines", url: "https://www.aap.org/en/patient-care/safe-sleep/" },
      { name: "CPSC Safe Sleep Environment", url: "https://www.cpsc.gov/SafeSleep" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Sleep Environment" },
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
          { label: "Sleep Environment" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Optimal Sleep Environment for Babies and Toddlers
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          The sleep environment plays a critical role in both sleep safety and
          sleep quality. Small changes to temperature, light, and sound can make a
          significant difference in how easily your baby falls asleep and how long
          they stay asleep. This guide covers everything you need to know to set up
          the ideal sleep space.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "CPSC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Room temperature
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The ideal nursery temperature is between 68 and 72 degrees Fahrenheit
            (20 to 22 degrees Celsius). Overheating is an independent risk factor
            for SIDS. Babies cannot regulate their body temperature as efficiently
            as adults, so the room temperature and clothing choices matter more.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Signs your baby is too warm include: sweating, damp hair, flushed cheeks,
            heat rash, or rapid breathing. Signs of being too cold include: cool
            extremities (hands and feet being slightly cool is normal), mottled skin,
            or fussiness. Check the temperature by feeling the back of your baby&apos;s
            neck or chest -- these should feel warm but not hot or sweaty.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">Sleepwear guide by temperature</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>75°F+ (24°C+):</strong> Diaper only or diaper + light sleep sack (0.5 TOG)</li>
              <li><strong>72-75°F (22-24°C):</strong> Short-sleeve onesie + light sleep sack (0.5-1.0 TOG)</li>
              <li><strong>68-72°F (20-22°C):</strong> Long-sleeve onesie + medium sleep sack (1.0-2.5 TOG)</li>
              <li><strong>64-68°F (18-20°C):</strong> Long-sleeve onesie + warm sleep sack (2.5-3.5 TOG)</li>
              <li><strong>Below 64°F (18°C):</strong> Add a layer under the sleep sack (footed pajamas + warm sack)</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Darkness and light
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Light is the strongest signal to the circadian clock. Even small amounts
            of light can suppress melatonin production and signal the brain that it
            is time to be awake. For babies over 6 to 8 weeks (when the circadian
            rhythm begins developing), a dark sleep environment significantly
            improves sleep onset and duration.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Blackout curtains:</strong> The most effective solution for nursery darkness. Look for curtains that block 95-100% of light, particularly important for naps and early morning wake prevention.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Night light choices:</strong> If you need light for nighttime feeds or diaper changes, use red or amber light. Blue and white light are the most disruptive to melatonin. Keep any night light dim and away from the baby&apos;s line of sight.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Morning light exposure:</strong> Bright light within 30 minutes of wake time helps set the circadian clock and improves nighttime sleep. Open curtains immediately upon waking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Pre-bedtime dimming:</strong> Dim the lights in your home 30 to 60 minutes before bedtime to signal melatonin production.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            White noise
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            White noise mimics the sound environment of the womb (blood flow,
            heartbeat, and muffled external noise registered at about 80 to 90 dB in
            utero). For babies, it provides a familiar sound backdrop that masks
            environmental disturbances and helps with sleep onset and duration.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Volume:</strong> Keep white noise at or below 50 decibels (about the volume of a quiet conversation or light rain). The machine should not be louder than a running shower when standing at the crib.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Placement:</strong> Position the machine at least 7 feet (2 meters) from the crib. Never place it on or directly next to the crib.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Type:</strong> Continuous, steady sounds (static, rain, fan) are more effective than rhythmic or nature sounds with variations. Avoid machines with heartbeat sounds that have silent gaps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Duration:</strong> Run white noise continuously through the entire sleep period. Timers that shut off can cause waking when the sound changes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Weaning:</strong> There is no requirement to wean off white noise. Many children (and adults) use it for years. If you wish to wean, gradually reduce the volume over several weeks.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The sleep surface
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The AAP recommends a firm, flat mattress that fits snugly in a crib,
            bassinet, or play yard that meets CPSC safety standards. The mattress
            should not indent when you press on it and there should be no gaps
            between the mattress and the sides of the sleep space (no more than two
            finger-widths).
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Use only the mattress that came with your crib or one specifically designed for it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Only a fitted sheet (no mattress pad, memory foam topper, or additional layers)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>No incline (all products must be flat -- inclined sleepers have been recalled)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Nothing else in the crib: no blankets, pillows, bumpers, or stuffed animals (until 12+ months for a lovey)</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Humidity
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Maintaining indoor humidity between 40 and 60% helps prevent dry nasal
            passages (which cause congestion and mouth breathing) and reduces the
            likelihood of dry skin irritation that can disrupt sleep. A cool-mist
            humidifier is recommended over warm-mist models to eliminate burn risk.
            Clean the humidifier regularly (every 1 to 3 days) to prevent mold and
            bacteria growth.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sleep environment checklist
          </h2>
          <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Room temperature 68-72°F (20-22°C)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Room is very dark (blackout curtains installed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>White noise machine at 50 dB or less, 7+ feet from crib</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Firm, flat mattress with fitted sheet only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Nothing else in the crib (no bumpers, blankets, toys)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Humidity 40-60% (cool-mist humidifier if needed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Baby dressed appropriately for temperature (sleep sack)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>No screens or blue light in the sleep space</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#10003;</span>
                <span>Crib away from windows, blinds cords, and heating vents</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="The sleep environment should be dark, cool, and quiet with consistent white noise. These conditions support both sleep safety (following AAP guidelines) and sleep quality (promoting melatonin production and reducing disturbances). Small investments in blackout curtains, a quality white noise machine, and a room thermometer can make a meaningful difference in your baby's sleep." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
