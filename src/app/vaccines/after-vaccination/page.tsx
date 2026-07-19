import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "After Vaccination: What to Expect & Comfort Measures | Is My Baby Alright?",
  description:
    "What to expect after your baby's shots: normal reactions, comfort tips, when to give Tylenol, and when to call the doctor. Evidence-based guide from CDC and AAP guidelines.",
  alternates: {
    canonical: "/vaccines/after-vaccination",
  },
  openGraph: {
    title: "After Your Baby's Vaccination | Is My Baby Alright?",
    description:
      "Practical guide to caring for your baby after shots. Normal reactions, comfort measures, and warning signs.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "After Vaccination: What to Expect & How to Comfort Your Baby",
  description:
    "What to expect after your baby's shots: normal reactions, comfort tips, and when to call the doctor.",
  path: "/vaccines/after-vaccination",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC After Vaccination", url: "https://www.cdc.gov/vaccines/parents/visit/after-shots.html" },
    { name: "AAP Immunization Pain Management", url: "https://www.aap.org/en/patient-care/immunizations/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "After Vaccination" },
]);

const faqItems = [
  {
    question: "How long will my baby be fussy after vaccines?",
    answer:
      "Most babies are fussy for 12-24 hours after vaccination. Some may be irritable for up to 48 hours. This is normal and a sign that the immune system is responding. Extra cuddles, feeding, and skin-to-skin contact help. If fussiness lasts more than 3 days or baby is inconsolable for over 3 hours, call your pediatrician.",
  },
  {
    question: "Should I wake my baby to feed after vaccinations?",
    answer:
      "If your baby is sleeping more than usual after vaccines, it is generally fine to let them rest — the immune system uses energy. However, maintain normal feeding intervals for young infants (under 4 weeks should feed at least every 3-4 hours). If your baby is difficult to wake or unusually limp, contact your doctor.",
  },
  {
    question: "Can I bathe my baby after shots?",
    answer:
      "Yes. A warm bath is fine after vaccination and may even be soothing. There is no need to keep the injection site dry. Avoid rubbing the injection site vigorously, but gentle washing is perfectly safe.",
  },
  {
    question: "When should I give Tylenol after vaccines?",
    answer:
      "The AAP does not recommend giving acetaminophen (Tylenol) before vaccines. However, you can give an age-appropriate dose after vaccination if your baby develops fever above 100.4°F (38°C) or seems uncomfortable. Always use the correct dose based on your baby's weight (not age) and check with your pediatrician.",
  },
  {
    question: "Is it normal for my baby to sleep more after shots?",
    answer:
      "Yes. Increased sleepiness for 24-48 hours after vaccination is common and normal. The immune system is actively working, which requires energy. Let your baby rest. However, if your baby is extremely difficult to wake, limp, or unresponsive, seek medical attention immediately.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function AfterVaccinationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
        <Breadcrumbs
          items={[
            { label: "Vaccines", href: "/vaccines" },
            { label: "After Vaccination" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            After Vaccination: What to Expect &amp; Comfort Measures
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Your baby just got their shots. Here is exactly what to expect in the
            next 24-48 hours, how to comfort them, and when to reach out to
            your pediatrician.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "AAP"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "Fussiness, low-grade fever, and soreness at the injection site are normal and resolve in 24-48 hours.",
            "Breastfeeding or bottle-feeding during or right after shots provides natural pain relief.",
            "You can give infant Tylenol after (not before) vaccination if your baby is uncomfortable.",
            "Let your baby sleep extra if they are tired — the immune system needs energy to build protection.",
            "Call your doctor for fever over 104°F, inconsolable crying for 3+ hours, or any symptom that worries you.",
          ]}
        />

        {/* Timeline */}
        <section className="mb-10" aria-labelledby="timeline-heading">
          <h2
            id="timeline-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            What to Expect: Hour by Hour
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-16 text-xs font-bold text-primary">0-1 hrs</span>
              <p className="text-sm text-muted leading-relaxed">
                Your baby may cry from the shot itself. Comfort with feeding,
                skin-to-skin, or gentle rocking. Crying typically stops within
                minutes. Wait 15 minutes at the office in case of rare allergic
                reaction.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-16 text-xs font-bold text-primary">1-6 hrs</span>
              <p className="text-sm text-muted leading-relaxed">
                Mild redness or swelling at the injection site may develop.
                Baby may become fussy or sleepier than usual. Appetite may
                decrease slightly.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-16 text-xs font-bold text-primary">6-24 hrs</span>
              <p className="text-sm text-muted leading-relaxed">
                Low-grade fever (under 101°F/38.3°C) may peak during this time.
                Fussiness is often worst during this window. Extra feeds and
                cuddles help. A small hard lump at the injection site is normal.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-16 text-xs font-bold text-primary">24-48 hrs</span>
              <p className="text-sm text-muted leading-relaxed">
                Most symptoms begin to resolve. Fever should come down. Baby
                typically returns to normal appetite and behavior. Injection
                site redness fades.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-16 text-xs font-bold text-primary">48+ hrs</span>
              <p className="text-sm text-muted leading-relaxed">
                Your baby should be back to their normal self. A small painless
                lump at the injection site may persist for weeks — this is
                harmless. If symptoms worsen after 48 hours, contact your doctor.
              </p>
            </div>
          </div>
        </section>

        {/* Comfort Measures */}
        <section className="mb-10" aria-labelledby="comfort-heading">
          <h2
            id="comfort-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Comfort Measures That Help
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">During the Shot</h3>
                <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                  <li>Breastfeed or give a bottle during the injection — sucking provides natural pain relief</li>
                  <li>Hold baby skin-to-skin or in your lap (not lying flat on the table)</li>
                  <li>Offer a pacifier dipped in sugar water (for babies under 6 months, ask your provider)</li>
                  <li>Stay calm — your baby picks up on your stress</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">After the Shot</h3>
                <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                  <li>Apply a cool, damp washcloth to the injection site (not ice directly)</li>
                  <li>Gently move or massage the vaccinated leg/arm to reduce stiffness</li>
                  <li>Dress baby in loose clothing that does not press on the injection site</li>
                  <li>Offer extra feeds — both for comfort and hydration if there is a fever</li>
                  <li>Hold and rock your baby — contact is the best comfort</li>
                  <li>Allow extra sleep — the immune system needs rest to do its work</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Pain Relief (If Needed)</h3>
                <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                  <li><strong>Infant acetaminophen (Tylenol):</strong> Can be given after vaccination if baby is uncomfortable. Dose by weight, not age. Check with your pediatrician.</li>
                  <li><strong>Infant ibuprofen (Motrin/Advil):</strong> Only for babies 6 months and older. Do NOT give to younger infants.</li>
                  <li><strong>Do NOT give aspirin</strong> to babies or children (risk of Reye syndrome).</li>
                  <li>Do NOT routinely pre-medicate before vaccines — it may slightly reduce immune response.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Call */}
        <section className="mb-10" aria-labelledby="call-heading">
          <h2
            id="call-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            When to Call Your Doctor
          </h2>
          <div className="rounded-xl border border-concern/20 bg-concern-light p-5">
            <p className="text-sm font-bold text-foreground mb-3">
              Contact your pediatrician if:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Fever reaches 104°F (40°C) or higher</li>
              <li>Fever lasts more than 3 days</li>
              <li>Inconsolable crying for more than 3 hours</li>
              <li>Redness at the injection site grows larger after 24 hours or streaks outward</li>
              <li>Baby refuses to eat for more than 8 hours</li>
              <li>Unusual lethargy or difficulty waking</li>
              <li>You are worried — trust your instincts</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-red-300 bg-red-50 p-5 mt-4">
            <p className="text-sm font-bold text-foreground mb-3">
              Go to the ER / Call 911 if:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Difficulty breathing or wheezing</li>
              <li>Swelling of face, lips, or throat</li>
              <li>Whole-body hives</li>
              <li>Seizure or convulsion</li>
              <li>Baby is limp, pale, or unresponsive</li>
            </ul>
            <p className="text-xs text-muted mt-2 italic">
              These are extremely rare (about 1 in a million) and almost always
              occur within 15-30 minutes of the shot.
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-foreground mb-4">
            Related Vaccine Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/vaccines/side-effects"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Side Effects Guide</span>
              <p className="text-xs text-muted mt-1">Normal vs. when to worry</p>
            </Link>
            <Link
              href="/vaccines/schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">CDC Schedule</span>
              <p className="text-xs text-muted mt-1">Know what is coming at each visit</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Most babies recover from vaccination within 24-48 hours with nothing more than extra cuddles and possibly a dose of Tylenol. The brief discomfort is far outweighed by the protection against serious diseases. Your baby is building immunity with every shot."
          supportiveMessage="Watching your baby cry from a shot is tough. But you are giving them one of the most important gifts: protection from diseases that used to harm and kill children. You are doing the right thing."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
