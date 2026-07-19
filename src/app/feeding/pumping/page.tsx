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
  title: "Pumping Guide: Schedules, Power Pumping & Storage",
  description:
    "Complete breast milk pumping guide covering exclusive pumping schedules, power pumping to increase supply, proper milk storage, pump flange fitting, and tips for working parents. Based on CDC and ABM guidelines.",
  alternates: { canonical: "/feeding/pumping" },
  openGraph: {
    title: "Pumping Guide: Schedules, Power Pumping & Storage",
    description:
      "Everything you need to know about pumping breast milk including schedules, power pumping, storage guidelines, and tips.",
  },
};

const faqItems = [
  {
    question: "How often should I pump if exclusively pumping?",
    answer:
      "In the first 12 weeks, pump 8-12 times per day (every 2-3 hours, including at least once at night) to establish supply. After supply is established, most exclusive pumpers can reduce to 6-8 sessions per day while maintaining output. The key is total time pumping per day and fully emptying the breasts each session.",
  },
  {
    question: "What is power pumping and does it work?",
    answer:
      "Power pumping mimics cluster feeding to signal your body to produce more milk. The protocol is: pump 20 minutes, rest 10 minutes, pump 10 minutes, rest 10 minutes, pump 10 minutes (total 1 hour). Do this once daily for 3-7 days to see results. Many women see a supply increase within 48-72 hours.",
  },
  {
    question: "How long can breast milk be stored?",
    answer:
      "Per CDC guidelines: room temperature (up to 77°F) for up to 4 hours, refrigerator (40°F) for up to 4 days, freezer (0°F or below) for up to 12 months (best quality within 6 months). Once thawed, use within 24 hours and never refreeze.",
  },
  {
    question: "How do I know if my pump flanges fit correctly?",
    answer:
      "Your nipple should move freely in the flange tunnel without rubbing the sides. There should be a small amount of areola drawn in, but not excessive. Signs of poor fit include: pain during pumping, nipple rubbing or turning white, areola being pulled excessively into the tunnel, or low output despite adequate pumping time.",
  },
  {
    question: "Can I combine milk from different pumping sessions?",
    answer:
      "Yes, but cool freshly pumped milk in the refrigerator before adding it to already cold milk. Never add warm milk to frozen milk. You can combine milk from the same day into one container once both portions are the same temperature.",
  },
  {
    question: "Why is my pump output decreasing?",
    answer:
      "Common causes include: pump parts needing replacement (valves and membranes wear out every 2-3 months), incorrect flange size, stress or dehydration, reduced pumping frequency, returning of menstrual cycle, or baby sleeping longer stretches. Try replacing parts, checking fit, increasing hydration, and adding a pumping session.",
  },
];

const takeaways = [
  "Exclusive pumpers should pump 8-12 times per day in the first 12 weeks to establish a full supply, then can gradually reduce sessions.",
  "Power pumping (20-10-10-10-10 minute cycle) mimics cluster feeding and can boost supply within 3-7 days.",
  "Correct flange size is critical - your nipple should move freely without rubbing the tunnel walls.",
  "CDC storage guidelines: 4 hours at room temperature, 4 days in the fridge, 6-12 months in the freezer.",
  "Replace pump valves and membranes every 2-3 months - worn parts significantly reduce suction and output.",
];

export default function PumpingPage() {
  const contentSchema = getContentPageSchema({
    name: "Pumping Guide: Schedules, Power Pumping & Storage",
    description:
      "Complete breast milk pumping guide covering exclusive pumping, power pumping, storage, and flange fitting.",
    path: "/feeding/pumping",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Pumping Guide" },
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
          { label: "Feeding", href: "/feeding" },
          { label: "Pumping Guide" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Pumping Guide: Exclusive Pumping, Power Pumping &amp; Storage
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Whether you are exclusively pumping, building a freezer stash, or
          pumping at work, this guide covers everything from establishing
          supply to storing milk safely. Pumping is hard work and you deserve
          clear, practical guidance.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["CDC", "ABM", "AAP"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Exclusive Pumping Schedule */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Exclusive pumping schedules
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            If you are exclusively pumping (not nursing directly), frequency
            is key to establishing and maintaining supply. Your body produces
            milk based on demand - the more frequently you empty your breasts,
            the more milk you make.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Weeks 1-12: Establishing supply
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                    Frequency
                  </p>
                  <p className="text-sm text-foreground">
                    8-12 times per day (every 2-3 hours)
                  </p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">
                    Duration
                  </p>
                  <p className="text-sm text-foreground">
                    15-20 minutes per session (or 2-5 min after last drop)
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Include at least one session between 1-5 AM (prolactin peaks)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Do not skip sessions even if output is low initially
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Pump until breasts feel soft and empty each session
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                After 12 weeks: Maintaining supply
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                    Frequency
                  </p>
                  <p className="text-sm text-foreground">
                    6-8 times per day (every 3-4 hours)
                  </p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">
                    Duration
                  </p>
                  <p className="text-sm text-foreground">
                    15-20 minutes per session
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Drop sessions gradually (one every few days) while monitoring output
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Some exclusive pumpers maintain supply with 5-6 sessions
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Keep total pumping time above 120 minutes per day
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Pumping at work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                    Frequency
                  </p>
                  <p className="text-sm text-foreground">
                    Every 3-4 hours during work hours
                  </p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">
                    Duration
                  </p>
                  <p className="text-sm text-foreground">
                    15-20 minutes per session
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  For an 8-hour workday, plan for 2-3 pumping sessions
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Nurse directly before leaving and immediately upon return
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Your employer is required by federal law to provide time and
                  a private space (not a bathroom)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Power Pumping */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Power pumping to increase supply
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Power pumping mimics cluster feeding, sending repeated signals to
            your body to increase milk production. It works best when done
            consistently for several days.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h3 className="text-base font-bold text-foreground mb-3">
              Power pumping protocol (1 hour total)
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold">1</span>
                <span className="text-sm text-foreground">Pump for 20 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-card-alt text-muted text-xs font-bold">2</span>
                <span className="text-sm text-foreground">Rest for 10 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold">3</span>
                <span className="text-sm text-foreground">Pump for 10 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-card-alt text-muted text-xs font-bold">4</span>
                <span className="text-sm text-foreground">Rest for 10 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold">5</span>
                <span className="text-sm text-foreground">Pump for 10 minutes</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#E8E2D9]">
              <h4 className="text-sm font-bold text-foreground mb-2">Tips for power pumping</h4>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Replace one regular session with a power pumping session (do not add an extra hour)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Do this once daily for 3-7 consecutive days
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Best done in the morning when prolactin levels are highest
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Results typically appear within 48-72 hours
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Do not be discouraged if output during the session is low - the signal is what matters
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Flange Fitting */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Getting the right flange size
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Incorrect flange size is one of the most common causes of low
            output and pumping pain. Most pumps come with 24mm or 28mm
            flanges, but many women need a smaller size (19-21mm).
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h3 className="text-base font-bold text-foreground mb-3">
              Signs of correct fit
            </h3>
            <ul className="space-y-1.5 ml-5 mb-4">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Nipple moves freely in the tunnel without rubbing sides
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Small amount of areola is drawn in rhythmically
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pumping is comfortable (not painful)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Breasts feel well-drained after pumping
              </li>
            </ul>
            <h3 className="text-base font-bold text-foreground mb-3">
              Signs the flange is too large
            </h3>
            <ul className="space-y-1.5 ml-5 mb-4">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Too much areola pulled into the tunnel
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Nipple and areola turn red or swell
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Low output despite adequate pumping time
              </li>
            </ul>
            <h3 className="text-base font-bold text-foreground mb-3">
              Signs the flange is too small
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Nipple rubs against the tunnel walls
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Nipple turns white or blanches during pumping
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pain at the base of the nipple
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Breast not fully emptied
              </li>
            </ul>
          </div>
        </section>

        {/* Storage Guidelines */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Breast milk storage guidelines (CDC)
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-alt border-b border-[#E8E2D9]">
                  <th className="text-left px-5 py-3 font-bold text-foreground">Location</th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">Temperature</th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Room temp (freshly expressed)</td>
                  <td className="px-5 py-3 text-muted">Up to 77°F (25°C)</td>
                  <td className="px-5 py-3 text-primary font-semibold">Up to 4 hours</td>
                </tr>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Insulated cooler with ice packs</td>
                  <td className="px-5 py-3 text-muted">59°F (15°C)</td>
                  <td className="px-5 py-3 text-primary font-semibold">Up to 24 hours</td>
                </tr>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Refrigerator</td>
                  <td className="px-5 py-3 text-muted">40°F (4°C)</td>
                  <td className="px-5 py-3 text-primary font-semibold">Up to 4 days</td>
                </tr>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Freezer (regular)</td>
                  <td className="px-5 py-3 text-muted">0°F (-18°C)</td>
                  <td className="px-5 py-3 text-primary font-semibold">6-12 months</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-foreground">Thawed (from freezer)</td>
                  <td className="px-5 py-3 text-muted">Refrigerator</td>
                  <td className="px-5 py-3 text-primary font-semibold">24 hours (never refreeze)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3 leading-relaxed">
            Source: CDC &quot;Proper Storage and Preparation of Breast Milk&quot; guidelines.
            Store milk in the back of the fridge or freezer (not the door). Use the oldest
            milk first.
          </p>
        </section>

        {/* Maintaining Supply */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Tips for maintaining supply while pumping
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Stay hydrated</strong> - Drink at least 8-10 glasses of
              water daily; keep a water bottle at your pumping station
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Eat enough calories</strong> - Milk production requires
              approximately 500 extra calories per day
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Use hands-on pumping</strong> - Massage and compress
              breasts during pumping to increase output by up to 48% (Stanford study)
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Replace pump parts regularly</strong> - Valves/membranes every
              2-3 months; backflow protectors every 6 months
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Manage stress</strong> - Cortisol inhibits letdown;
              look at baby photos, listen to relaxing music, or use warmth on
              breasts before pumping
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Avoid going too long between sessions</strong> - Extended
              gaps signal your body to reduce production
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Successful pumping depends on frequency (especially in the first 12 weeks), correct flange fit, and consistent routine. Power pumping can boost supply within days. Replace pump parts regularly, use hands-on technique, and follow CDC storage guidelines to keep your milk safe. You are doing an incredible job." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
