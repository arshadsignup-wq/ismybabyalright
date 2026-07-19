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
  title: "Vaccine Side Effects in Babies: Normal vs. When to Worry | Is My Baby Alright?",
  description:
    "Learn which vaccine side effects are normal (fever, fussiness, soreness), how long they last, and when to call the doctor. Evidence-based guide from CDC and AAP guidelines.",
  alternates: {
    canonical: "/vaccines/side-effects",
  },
  openGraph: {
    title: "Vaccine Side Effects in Babies | Is My Baby Alright?",
    description:
      "Normal vaccine reactions vs. warning signs. Know what to expect and when to call your pediatrician.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Vaccine Side Effects in Babies: Normal vs. When to Worry",
  description:
    "Learn which vaccine side effects are normal, how long they last, and when to call the doctor.",
  path: "/vaccines/side-effects",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Possible Side Effects from Vaccines", url: "https://www.cdc.gov/vaccines/vac-gen/side-effects.htm" },
    { name: "AAP Immunization Reactions", url: "https://www.aap.org/en/patient-care/immunizations/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Side Effects" },
]);

const faqItems = [
  {
    question: "How long do vaccine side effects last in babies?",
    answer:
      "Most common side effects — low-grade fever, fussiness, soreness at the injection site, and mild swelling — resolve within 24-48 hours. Rotavirus vaccine may cause mild temporary diarrhea for a few days. If symptoms persist beyond 3 days or worsen, contact your pediatrician.",
  },
  {
    question: "Can I give my baby Tylenol before vaccines to prevent side effects?",
    answer:
      "The AAP does not routinely recommend giving acetaminophen (Tylenol) before vaccination, as some studies suggest it may slightly reduce the immune response. However, you can give an appropriate dose after vaccination if your baby develops fever or pain. Always use the correct dosage based on your baby's weight and check with your pediatrician.",
  },
  {
    question: "Is a fever after vaccination normal?",
    answer:
      "Yes. A low-grade fever (under 101°F / 38.3°C) is a normal sign that your baby's immune system is responding to the vaccine. It typically appears within 24 hours and resolves within 1-2 days. Call your doctor if fever exceeds 105°F (40.5°C), lasts more than 3 days, or your baby is under 3 months with any fever.",
  },
  {
    question: "What are signs of a serious vaccine reaction?",
    answer:
      "Serious reactions are extremely rare (about 1 in a million doses for anaphylaxis). Call 911 or go to the ER immediately if your baby has: difficulty breathing, swelling of the face or throat, hives all over the body, rapid heartbeat, dizziness or weakness, or a high-pitched unusual cry lasting more than 3 hours. These reactions almost always occur within 15-30 minutes of vaccination.",
  },
  {
    question: "Should I skip vaccines if my baby had a mild reaction last time?",
    answer:
      "No. Mild reactions like low-grade fever and fussiness are normal and not a reason to skip future doses. Only true contraindications — such as a severe allergic reaction (anaphylaxis) to a previous dose or vaccine component — warrant changes. Talk to your pediatrician about any concerns.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function VaccineSideEffectsPage() {
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
            { label: "Side Effects" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Vaccine Side Effects: Normal vs. When to Worry
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Most babies experience mild, temporary side effects after vaccination.
            Here is what is normal, what to watch for, and when to call your
            pediatrician.
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
            "Mild side effects (fever, fussiness, soreness) are normal signs that the immune system is building protection.",
            "Most side effects resolve within 24-48 hours without treatment.",
            "Serious reactions are extremely rare — about 1 in a million doses for anaphylaxis.",
            "You do not need to give Tylenol before vaccines, but you can give it afterward if needed for comfort.",
            "Mild reactions are NOT a reason to delay or skip future vaccine doses.",
          ]}
        />

        {/* Common Side Effects */}
        <section className="mb-10" aria-labelledby="common-heading">
          <h2
            id="common-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Common Side Effects (Normal)
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-4">
            <p className="text-sm text-muted leading-relaxed">
              These reactions are common, expected, and a sign that the vaccine
              is working. They typically appear within hours of vaccination and
              resolve in 1-2 days:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Pain/redness at injection site</p>
                <p className="text-xs text-muted mt-1">Affects up to 50% of babies. Apply a cool washcloth for comfort.</p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Low-grade fever</p>
                <p className="text-xs text-muted mt-1">Under 101°F (38.3°C). Normal immune response. Resolves in 1-2 days.</p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Fussiness/irritability</p>
                <p className="text-xs text-muted mt-1">Baby may be cranky for 24-48 hours. Extra cuddles and feeding help.</p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Mild swelling</p>
                <p className="text-xs text-muted mt-1">Small lump or swelling at injection site. Resolves on its own.</p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Decreased appetite</p>
                <p className="text-xs text-muted mt-1">May eat less for 1-2 days. Keep offering feeds.</p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Sleepiness</p>
                <p className="text-xs text-muted mt-1">More tired than usual for a day. Let baby rest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Less Common but Normal */}
        <section className="mb-10" aria-labelledby="less-common-heading">
          <h2
            id="less-common-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Less Common but Still Normal
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Mild rash</strong> (after MMR or varicella) — A few spots may appear 7-14 days after vaccination. Not contagious in most cases.</li>
              <li><strong>Temporary joint stiffness</strong> (after MMR in older children) — Resolves without treatment.</li>
              <li><strong>Mild diarrhea</strong> (after rotavirus) — May last a few days. Keep baby hydrated.</li>
              <li><strong>Small hard lump at injection site</strong> — May persist for weeks. Harmless and resolves on its own.</li>
            </ul>
          </div>
        </section>

        {/* When to Call */}
        <section className="mb-10" aria-labelledby="when-to-call-heading">
          <h2
            id="when-to-call-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            When to Call Your Pediatrician
          </h2>
          <div className="rounded-xl border border-concern/20 bg-concern-light p-5 space-y-3">
            <p className="text-sm font-bold text-foreground">
              Contact your doctor if your baby experiences:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Fever above 104°F (40°C)</li>
              <li>Crying or fussiness that lasts more than 3 hours and cannot be consoled</li>
              <li>Redness or swelling at the injection site that increases after 24 hours</li>
              <li>Fever that lasts more than 3 days</li>
              <li>Unusual lethargy or difficulty waking</li>
              <li>Any symptom that concerns you as a parent</li>
            </ul>
          </div>
        </section>

        {/* Emergency Signs */}
        <section className="mb-10" aria-labelledby="emergency-heading">
          <h2
            id="emergency-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Rare: Emergency Signs (Call 911)
          </h2>
          <div className="rounded-xl border-2 border-red-300 bg-red-50 p-5 space-y-3">
            <p className="text-sm font-bold text-foreground">
              These are extremely rare (about 1 in a million doses) but require
              immediate emergency care:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Difficulty breathing or wheezing</li>
              <li>Swelling of the face, lips, or throat</li>
              <li>Hives spreading over the body</li>
              <li>Sudden paleness or limpness</li>
              <li>Seizure or convulsion</li>
              <li>High-pitched inconsolable screaming for hours</li>
            </ul>
            <p className="text-xs text-muted mt-3 italic">
              Note: Severe allergic reactions (anaphylaxis) almost always occur
              within 15-30 minutes of vaccination. This is why your provider asks
              you to wait 15 minutes after shots.
            </p>
          </div>
        </section>

        {/* Comfort Measures */}
        <section className="mb-10" aria-labelledby="comfort-heading">
          <h2
            id="comfort-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Comfort Measures After Shots
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Breastfeed or offer a bottle during or immediately after — sucking provides natural pain relief</li>
              <li>Hold and cuddle your baby. Skin-to-skin contact helps calm them</li>
              <li>Apply a cool, damp washcloth to the injection site for soreness</li>
              <li>Move or gently massage the vaccinated leg/arm to reduce stiffness</li>
              <li>Dress baby in loose clothing to avoid irritating the injection site</li>
              <li>Offer infant acetaminophen (Tylenol) if recommended by your pediatrician for fever or pain</li>
              <li>Avoid ibuprofen (Motrin/Advil) in babies under 6 months</li>
            </ul>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-foreground mb-4">
            Related Vaccine Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/vaccines/after-vaccination"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">After Vaccination</span>
              <p className="text-xs text-muted mt-1">Full guide to post-vaccination care</p>
            </Link>
            <Link
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">How vaccines are tested and monitored</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Mild side effects after vaccination are normal and temporary — they mean the immune system is doing its job. Serious reactions are extremely rare. If anything worries you, call your pediatrician. Never skip future doses because of a mild reaction."
          supportiveMessage="It is hard to watch your baby be uncomfortable, even briefly. You are protecting them from much more serious illnesses. That discomfort passes quickly."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
