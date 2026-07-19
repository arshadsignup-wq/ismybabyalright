"use client";

import { useState } from "react";
import Link from "next/link";
import type { MoodEntry } from "@/data/mental-health/types";
import { mentalHealthTopics } from "@/data/mental-health/topics";
import MoodTracker from "@/components/mental-health/MoodTracker";
import TopicCard from "@/components/mental-health/TopicCard";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";

const contentSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Parent Mental Health Hub",
  description:
    "Mental health resources for new parents. Mood tracking, EPDS screening, postpartum depression and anxiety information, and crisis helplines.",
  url: "https://www.ismybabyalright.com/mental-health",
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
      name: "Mental Health",
    },
  ],
};

const MOOD_STORAGE_KEY = "imba_moods";

function saveMoodEntry(entry: MoodEntry) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(MOOD_STORAGE_KEY);
    const moods: MoodEntry[] = raw ? JSON.parse(raw) : [];
    moods.push(entry);
    localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(moods));
  } catch {
    // silently fail
  }
}

export default function MentalHealthPage() {
  const [, setTick] = useState(0);

  function handleMoodLog(entry: MoodEntry) {
    saveMoodEntry(entry);
    setTick((t) => t + 1);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="text-center">
        <h1 className="text-xl font-bold text-foreground">
          Your Mental Health Matters
        </h1>
        <p className="text-base text-muted leading-relaxed mb-4">Parental mental health resources including screening tools for postpartum depression and anxiety, coping strategies, partner support guidance, and information about when and how to seek professional help.</p>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={['ACOG', 'APA', 'PSI']} />
        </div>
        <p className="text-sm text-muted mt-3 leading-relaxed">
          For every parent and caregiver  -  birthing and non-birthing alike.
          This is a judgment-free zone.
        </p>
      </div>

      <KeyTakeaways
        takeaways={[
          "Up to 1 in 5 new mothers and 1 in 10 new fathers experience postpartum depression -- it is common, treatable, and not your fault.",
          "Baby blues typically resolve within 2 weeks after birth. If sadness, anxiety, or irritability persist beyond 2 weeks or worsen, it may be postpartum depression or anxiety.",
          "Effective treatments include therapy, medication, peer support, and lifestyle changes -- most parents who get help feel significantly better.",
          "If you are having thoughts of harming yourself or your baby, call 988 or the PSI Warmline at 1-800-944-4773 immediately. You deserve help right now.",
        ]}
      />

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/mental-health/check-in"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🤔</span>
          <span className="text-sm font-semibold text-primary">Am I Okay?</span>
        </Link>
        <Link
          href="/mental-health/partner"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🤝</span>
          <span className="text-sm font-semibold text-primary">Partner Support</span>
        </Link>
      </div>

      {/* Mood tracker */}
      <section>
        <MoodTracker onLog={handleMoodLog} />
      </section>

      {/* EPDS link */}
      <Link
        href="/resources/mental-health"
        className="card p-4 flex items-center gap-3 hover:border-primary transition-colors no-underline"
      >
        <span className="text-2xl" aria-hidden="true">📋</span>
        <div>
          <span className="text-sm font-bold text-foreground">EPDS Screening Tool</span>
          <p className="text-xs text-muted">Edinburgh Postpartum Depression Scale  -  clinical self-assessment</p>
        </div>
      </Link>

      {/* Topics */}
      <section>
        <h2 className="text-base font-bold text-foreground mb-3">
          Is this normal?
        </h2>
        <div className="flex flex-col gap-2">
          {mentalHealthTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      <FAQSection
        items={[
          { question: "What are the signs of postpartum depression?", answer: "Common signs include persistent sadness or emptiness, loss of interest in activities you used to enjoy, difficulty bonding with your baby, changes in appetite or sleep beyond what is normal with a newborn, overwhelming fatigue, feelings of worthlessness or guilt, difficulty concentrating, and in severe cases, thoughts of harming yourself or your baby." },
          { question: "What is the difference between baby blues and postpartum depression?", answer: "Baby blues affect up to 80 percent of new mothers and involve mood swings, crying spells, and anxiety that typically resolve within 2 weeks after birth. Postpartum depression is more intense, lasts longer than 2 weeks, and can interfere with your ability to care for your baby and handle daily tasks. If symptoms persist beyond 2 weeks or worsen, talk to your doctor." },
          { question: "What treatment options are available for postpartum depression?", answer: "Treatment options include psychotherapy (especially cognitive behavioral therapy and interpersonal therapy), medication (certain antidepressants are safe during breastfeeding), peer support groups, and in some cases newer treatments like brexanolone. Many parents benefit from a combination of approaches. Your OB, midwife, or primary care doctor can help you find the right treatment." },
          { question: "Where can I get help right now?", answer: "PSI Warmline: 1-800-944-4773 (call or text, available in English and Spanish). Crisis Text Line: text HOME to 741741. Suicide and Crisis Lifeline: call or text 988. If you or your baby are in immediate danger, call 911. You can also reach out to your OB, midwife, or primary care doctor." },
        ]}
      />

      {/* Crisis resources */}
      <div className="tier-concern p-4 text-sm">
        <h3 className="font-bold mb-2">If you&apos;re in crisis</h3>
        <ul className="flex flex-col gap-1.5">
          <li>
            PSI Warmline:{" "}
            <a href="tel:1-800-944-4773" className="font-semibold underline">
              1-800-944-4773
            </a>{" "}
            (call or text)
          </li>
          <li>
            Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong>
          </li>
          <li>
            Suicide & Crisis Lifeline:{" "}
            <a href="tel:988" className="font-semibold underline">988</a>
          </li>
          <li>
            If you or your baby are in immediate danger, call <strong>911</strong>
          </li>
        </ul>
      </div>

      <BottomLine
        summary="Postpartum depression and anxiety are among the most common complications of pregnancy and the postpartum period -- and they are highly treatable. Whether you are a birthing or non-birthing parent, what you are feeling is real, it is not your fault, and help is available. Reaching out is a sign of strength, not weakness."
        supportiveMessage="You are not alone. If something feels off, trust that feeling and talk to someone. Asking for help is one of the bravest things you can do for yourself and your baby."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </div>
  );
}
