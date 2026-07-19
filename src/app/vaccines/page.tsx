"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import type { VaccineRecord } from "@/data/vaccines/types";
import VaccineSchedule from "@/components/vaccines/VaccineSchedule";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import { cdcVaccineSchedule } from "@/data/vaccines/cdc-schedule";

const contentSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Baby Vaccine Tracker & CDC Immunization Schedule",
  description:
    "Track your baby's vaccinations against the CDC recommended immunization schedule. Log doses, see what's due next, and keep a printable record for your pediatrician.",
  url: "https://www.ismybabyalright.com/vaccines",
  audience: { "@type": "PeopleAudience", audienceType: "Parents" },
  author: {
    "@type": "Organization",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      url: "https://www.ismybabyalright.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Vaccines",
    },
  ],
};

const vaccineFaqItems = [
  {
    question: "What vaccines does my baby need in the first year?",
    answer: "In the first year, your baby will receive vaccines for Hepatitis B (HepB), Rotavirus (RV), DTaP (diphtheria, tetanus, pertussis), Haemophilus influenzae type b (Hib), Pneumococcal (PCV13), Inactivated Poliovirus (IPV), and Influenza (flu). Most require multiple doses given at 2, 4, and 6 months, with boosters later.",
  },
  {
    question: "Are vaccines safe for babies?",
    answer: "Yes. Vaccines are among the most rigorously tested medical products. The CDC, AAP, and AAFP all recommend following the standard immunization schedule. Common side effects like mild fever, fussiness, and soreness at the injection site are normal and temporary. Serious reactions are extremely rare.",
  },
  {
    question: "What should I do if my baby has a reaction to a vaccine?",
    answer: "Mild reactions like low-grade fever, fussiness, and redness at the injection site are normal and resolve within 1-2 days. You can give infant acetaminophen (Tylenol) if your pediatrician approves. Call your doctor if your baby has a fever above 105°F (40.5°C), cries inconsolably for more than 3 hours, has seizures, or shows signs of an allergic reaction like hives, swelling, or difficulty breathing.",
  },
  {
    question: "Can I delay or spread out my baby's vaccines?",
    answer: "The CDC schedule is designed to protect babies as early as possible when they are most vulnerable to serious diseases. Delaying vaccines leaves your baby unprotected longer. The AAP does not recommend alternative schedules. If you have concerns, discuss them with your pediatrician rather than skipping or delaying doses.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vaccineFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const vaccineTakeaways = [
  "The CDC recommends vaccines starting at birth (Hepatitis B) through age 6, with most doses in the first 2 years.",
  "Vaccines protect against 14 serious diseases including whooping cough, measles, and meningitis.",
  "Common side effects (mild fever, fussiness, soreness) are normal and resolve within 1-2 days.",
  "The AAP, CDC, and AAFP all endorse the standard immunization schedule for healthy infants.",
];

const VACCINE_STORAGE_KEY = "imba_vaccines";

function loadVaccineRecords(): VaccineRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(VACCINE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveVaccineRecords(records: VaccineRecord[]) {
  localStorage.setItem(VACCINE_STORAGE_KEY, JSON.stringify(records));
}

export default function VaccinesPage() {
  const { profile } = useProfile();
  const [records, setRecords] = useState<VaccineRecord[]>(loadVaccineRecords);

  const handleToggleDose = useCallback(
    (vaccineId: string, doseNumber: number) => {
      setRecords((prev) => {
        const existing = prev.find(
          (r) => r.vaccineId === vaccineId && r.doseNumber === doseNumber
        );
        let updated: VaccineRecord[];
        if (existing) {
          // Remove it (uncheck)
          updated = prev.filter(
            (r) => !(r.vaccineId === vaccineId && r.doseNumber === doseNumber)
          );
        } else {
          // Add it (check)
          updated = [
            ...prev,
            {
              vaccineId,
              doseNumber,
              dateGiven: new Date().toISOString().split("T")[0],
            },
          ];
        }
        saveVaccineRecords(updated);
        return updated;
      });
    },
    []
  );

  if (!profile) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="mb-5">
          <h1 className="text-xl font-bold text-foreground">CDC Vaccine Schedule</h1>
          <p className="text-base text-muted leading-relaxed mb-6">The recommended childhood immunization schedule outlines which vaccines your baby needs and when, based on the CDC-recommended schedule endorsed by the AAP and AAFP.</p>
          <p className="text-sm text-muted mt-1">
            Recommended immunization schedule for children ages 0-6 years.
          </p>
        </div>

        <KeyTakeaways takeaways={vaccineTakeaways} />

        <div className="flex flex-col gap-3 mb-6">
          {cdcVaccineSchedule.map((vaccine) => (
            <details key={vaccine.id} className="card p-4">
              <summary className="flex items-center justify-between cursor-pointer min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <span className="text-sm font-bold text-foreground">
                    {vaccine.abbreviation}
                  </span>
                  <span className="text-sm text-muted ml-2">{vaccine.name}</span>
                </div>
                <span className="text-xs text-muted">
                  {vaccine.doses.length} dose{vaccine.doses.length !== 1 ? "s" : ""}
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-card-border">
                <p className="text-sm text-muted mb-3">{vaccine.description}</p>
                <div className="flex flex-col gap-2 mb-4">
                  {vaccine.doses.map((dose) => (
                    <div
                      key={dose.doseNumber}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-card-border bg-card text-left"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                        {dose.doseNumber}
                      </span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-foreground">
                          {dose.ageLabel}
                        </span>
                        {dose.notes && (
                          <p className="text-xs text-muted">{dose.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <details className="text-sm">
                  <summary className="font-medium text-muted cursor-pointer min-h-[44px] flex items-center">
                    Common side effects &amp; when to worry
                  </summary>
                  <div className="mt-2 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase mb-1">Common (normal):</p>
                      <ul className="text-sm text-foreground list-disc list-inside">
                        {vaccine.commonSideEffects.map((se, i) => (
                          <li key={i}>{se}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-concern uppercase mb-1">When to call:</p>
                      <ul className="text-sm text-foreground list-disc list-inside">
                        {vaccine.whenToWorry.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </details>
          ))}
        </div>

        <div className="card p-4 text-center">
          <p className="text-sm text-foreground font-medium mb-2">
            Want to track your baby&apos;s vaccines?
          </p>
          <Link
            href="/tracker"
            className="inline-flex px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
          >
            Set Up Profile
          </Link>
        </div>

        <div className="mt-6">
          <FAQSection items={vaccineFaqItems} />
        </div>

        <BottomLine summary="Vaccines are one of the most effective ways to protect your baby from serious diseases. The CDC schedule is designed to provide protection at the earliest safe age. If you have questions about any vaccine, talk to your pediatrician." />

        <p className="text-xs text-muted text-center mt-6 leading-relaxed">
          Based on the CDC Recommended Immunization Schedule.
          Your pediatrician may adjust the timing for your baby.
        </p>

        <div className="mt-4">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    );
  }

  const ageMonths = getAgeInMonthsFromDate(profile.birthDate);

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex items-center gap-3 mb-5">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Vaccines</h1>
          <p className="text-sm text-muted">
            CDC schedule for {profile.name} ({ageMonths} months)
          </p>
        </div>
      </div>

      <VaccineSchedule
        ageMonths={ageMonths}
        records={records}
        onToggleDose={handleToggleDose}
      />

      <p className="text-xs text-muted text-center mt-6 leading-relaxed">
        Based on the CDC Recommended Immunization Schedule.
        Your pediatrician may adjust the timing for your baby.
        All data stays on your device.
      </p>
    </div>
  );
}
