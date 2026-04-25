import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { poopColors, poopTextures, poopByAge } from "@/data/poop/data";

export const metadata: Metadata = {
  title: "Baby Poop Color Guide: What's Normal & When to Worry",
  description:
    "Visual guide to baby poop colors, textures, and frequency by age. Learn what's normal, what to monitor, and when to call your pediatrician. Evidence-based, no photos.",
  alternates: {
    canonical: "/poop-guide",
  },
  openGraph: {
    title: "Baby Poop Color Guide: What's Normal & When to Worry",
    description:
      "Visual guide to baby poop colors, textures, and frequency by age. Evidence-based resource for parents.",
  },
};

const faqItems = [
  {
    question: "What color should baby poop be?",
    answer:
      "Normal baby poop colors include yellow (mustard), yellow-green, green, brown, tan, and orange. The exact shade depends on whether your baby is breastfed or formula-fed, and what they're eating. White, red, and black (after the newborn period) are the colors that warrant medical attention.",
  },
  {
    question: "Is green poop normal for babies?",
    answer:
      "Yes, green poop is usually normal. It can be caused by iron-fortified formula, iron supplements, green vegetables, or a foremilk/hindmilk imbalance in breastfed babies. It's only concerning if accompanied by diarrhea, blood, mucus, or poor weight gain.",
  },
  {
    question: "How often should a baby poop?",
    answer:
      "This varies widely by age and feeding method. Breastfed newborns may poop after every feeding (8-12 times a day). After 6 weeks, breastfed babies may go up to 7-10 days between stools and still be normal. Formula-fed babies typically poop 1-4 times per day. After starting solids, 1-3 times per day is typical.",
  },
  {
    question: "When should I worry about my baby's poop?",
    answer:
      "Contact your pediatrician if you see white, pale, or clay-colored stool (possible liver issue), red or bloody stool that can't be traced to food, or black tarry stool after the newborn period. Also seek care for persistent watery diarrhea (risk of dehydration), signs of constipation with hard pellet stools, or poop with large amounts of mucus.",
  },
  {
    question: "Why is my baby's poop seedy?",
    answer:
      "Seedy poop is completely normal for breastfed babies. The 'seeds' are undigested milk fat curds. This texture is actually a sign of healthy breast milk digestion and is expected throughout the breastfeeding period.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PoopGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: "Poop Guide" }]} />

        {/* Hero */}
        <section className="text-center mb-10 mt-4">
          <h1 className="text-foreground">Baby Poop Guide</h1>
          <p className="text-muted mt-3 max-w-xl mx-auto leading-relaxed">
            Every parent looks in the diaper and wonders: is this normal? This
            guide covers every color, texture, and frequency pattern by age --
            so you know what to expect and when to call the doctor.
          </p>
          <p className="text-sm text-muted mt-2">
            Color swatches only. No photos. Evidence-based and pediatrician-reviewed.
          </p>
        </section>

        {/* Quick navigation */}
        <nav
          aria-label="Guide sections"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {[
            { label: "Colors", href: "#colors" },
            { label: "Textures", href: "#textures" },
            { label: "By Age", href: "#by-age" },
            { label: "When to Call", href: "#when-to-call" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full bg-card border border-card-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ============================================================
            SECTION 1: Color Guide
            ============================================================ */}
        <section id="colors" className="mb-12">
          <h2 className="text-foreground mb-2">Poop Color Guide</h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            Tap any color to learn what causes it and whether you should worry.
            Colors marked &quot;Normal&quot; are nothing to stress about. Colors
            marked &quot;Evaluate&quot; or &quot;Urgent&quot; need attention.
          </p>

          {/* Biliary atresia alert box */}
          <div className="rounded-xl border-2 border-concern bg-concern-light p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">
                !!
              </span>
              <div>
                <h3 className="text-base font-bold text-concern-foreground mb-1">
                  Red Alert: White, Pale, or Clay-Colored Poop
                </h3>
                <p className="text-sm text-concern-foreground leading-relaxed mb-2">
                  White or very pale, clay-colored stool means bile is not
                  reaching the intestines. This can be a sign of{" "}
                  <strong>biliary atresia</strong>, a serious condition where the
                  bile ducts are blocked or missing. Early surgery (the Kasai
                  procedure) has the best outcomes when performed{" "}
                  <strong>before 60 days of age</strong>.
                </p>
                <p className="text-sm font-bold text-concern-foreground">
                  If you see white, pale gray, or chalky stool, do not wait
                  for your next appointment. Call your pediatrician immediately
                  or go to the emergency room.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {poopColors.map((pc) => (
              <div
                key={pc.color}
                className="rounded-xl border border-card-border bg-white p-5"
                style={{ borderLeftWidth: "6px", borderLeftColor: pc.hexCode }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 border border-card-border"
                    style={{ backgroundColor: pc.hexCode }}
                    role="img"
                    aria-label={`Color swatch: ${pc.color}`}
                  />
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-tight mb-0.5">
                      {pc.title}
                    </h3>
                    {pc.isUrgent ? (
                      <span className="tier-concern-badge text-xs">Urgent</span>
                    ) : pc.isNormal ? (
                      <span className="tier-safe-badge text-xs">Normal</span>
                    ) : (
                      <span className="tier-monitor-badge text-xs">Evaluate</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  {pc.description}
                </p>

                {/* Causes */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                    Common Causes
                  </h4>
                  <ul className="text-sm text-foreground space-y-1">
                    {pc.causes.map((cause, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: pc.hexCode }}
                          aria-hidden="true"
                        />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to worry */}
                <div className="bg-background-alt rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                    When to Worry
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {pc.whenToWorry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 2: Texture Guide
            ============================================================ */}
        <section id="textures" className="mb-12">
          <h2 className="text-foreground mb-2">Poop Texture Guide</h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            Texture matters as much as color. Here&apos;s what each consistency
            means and when it&apos;s typical.
          </p>

          <div className="flex flex-col gap-4">
            {poopTextures.map((pt) => (
              <div
                key={pt.name}
                className="rounded-xl border border-card-border bg-white p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-foreground">
                    {pt.name}
                  </h3>
                  {pt.isNormal ? (
                    <span className="tier-safe-badge text-xs">Normal</span>
                  ) : (
                    <span className="tier-monitor-badge text-xs">Monitor</span>
                  )}
                </div>

                <p className="text-sm text-foreground leading-relaxed mb-3">
                  {pt.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-background-alt rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                      Common Ages
                    </h4>
                    <p className="text-sm text-foreground">{pt.commonAges}</p>
                  </div>
                  <div className="bg-background-alt rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                      Causes
                    </h4>
                    <ul className="text-sm text-foreground space-y-0.5">
                      {pt.causes.map((cause, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-muted mt-0.5" aria-hidden="true">
                            -
                          </span>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 3: By-Age Normals
            ============================================================ */}
        <section id="by-age" className="mb-12">
          <h2 className="text-foreground mb-2">What to Expect by Age</h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            Baby poop changes dramatically in the first year. Here&apos;s a
            timeline of what&apos;s normal at each stage.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-card-border hidden sm:block"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-5">
              {poopByAge.map((pba, index) => (
                <div
                  key={pba.ageRange}
                  className="rounded-xl border border-card-border bg-white p-5 sm:ml-10 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[calc(2.5rem+5px)] top-6 w-3 h-3 rounded-full bg-primary border-2 border-white hidden sm:block"
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {pba.ageRange}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3 mb-3">
                    <div className="bg-background-alt rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                        Normal Colors
                      </h4>
                      <ul className="text-sm text-foreground space-y-0.5">
                        {pba.normalColors.map((color, i) => (
                          <li key={i}>{color}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-background-alt rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                        Frequency
                      </h4>
                      <p className="text-sm text-foreground">
                        {pba.normalFrequency}
                      </p>
                    </div>
                    <div className="bg-background-alt rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                        Texture
                      </h4>
                      <p className="text-sm text-foreground">
                        {pba.normalTexture}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-primary-light bg-primary-light/30 p-3">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Good to Know
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {pba.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: When to Call the Doctor
            ============================================================ */}
        <section id="when-to-call" className="mb-12">
          <h2 className="text-foreground mb-2">When to Call the Doctor</h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            Most poop changes are normal. Here&apos;s a clear summary of what
            needs medical attention.
          </p>

          {/* Call immediately */}
          <div className="tier-concern p-5 mb-4">
            <h3 className="text-base font-bold mb-3 flex items-center gap-2">
              <span>Call Immediately or Go to the ER</span>
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">1.</span>
                <span>
                  <strong>White, pale, or clay-colored stool</strong> -- could
                  indicate biliary atresia or a liver condition. Time-sensitive.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">2.</span>
                <span>
                  <strong>Black, tarry stool after the newborn period</strong>{" "}
                  (not from iron supplements) -- may indicate upper GI bleeding.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">3.</span>
                <span>
                  <strong>
                    Large amounts of blood or &quot;currant jelly&quot; stool
                  </strong>{" "}
                  (dark red, jelly-like) -- could indicate intussusception, a
                  medical emergency.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">4.</span>
                <span>
                  <strong>Watery diarrhea with signs of dehydration</strong>{" "}
                  (dry mouth, no tears, sunken fontanelle, fewer than 3 wet
                  diapers in 24 hours, lethargy).
                </span>
              </li>
            </ul>
          </div>

          {/* Call within 24 hours */}
          <div className="tier-monitor p-5 mb-4">
            <h3 className="text-base font-bold mb-3">
              Call Your Pediatrician (Within 24 Hours)
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">1.</span>
                <span>
                  <strong>Blood streaks in stool</strong> that you cannot
                  attribute to red foods.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">2.</span>
                <span>
                  <strong>Persistent mucus in stool</strong> -- especially if
                  accompanied by fussiness, poor feeding, or skin rashes (may
                  indicate milk protein allergy).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">3.</span>
                <span>
                  <strong>Diarrhea lasting more than 24 hours</strong> in babies
                  under 3 months, or more than 48 hours in older babies.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">4.</span>
                <span>
                  <strong>Hard pellet stools with straining and pain</strong> --
                  especially if accompanied by blood streaks or refusal to eat.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">5.</span>
                <span>
                  <strong>No stool in the first 24 hours of life</strong>{" "}
                  (meconium should pass within this window).
                </span>
              </li>
            </ul>
          </div>

          {/* Mention at next visit */}
          <div className="tier-safe p-5">
            <h3 className="text-base font-bold mb-3">
              Mention at Your Next Visit
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">1.</span>
                <span>
                  Consistently green stools in a breastfed baby (may want to
                  discuss feeding technique).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">2.</span>
                <span>
                  Change in poop pattern that seems unusual for your baby.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">3.</span>
                <span>
                  Unusually foul-smelling stools (more than the normal
                  unpleasant smell).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold">4.</span>
                <span>
                  Foamy or frothy stools that persist for more than a few days.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: FAQ
            ============================================================ */}
        <section id="faq" className="mb-12">
          <h2 className="text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-card-border bg-white group"
              >
                <summary className="p-5 cursor-pointer text-base font-bold text-foreground list-none flex items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted flex-shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ============================================================
            SOURCES
            ============================================================ */}
        <section className="mb-8">
          <h2 className="text-foreground mb-4">Sources</h2>
          <div className="rounded-xl border border-card-border bg-white p-5">
            <ul className="text-sm text-foreground space-y-3">
              <li className="flex items-start gap-2">
                <span className="source-badge source-badge-aap flex-shrink-0">
                  AAP
                </span>
                <span>
                  American Academy of Pediatrics. &quot;Baby&apos;s First Bowel
                  Movements.&quot; HealthyChildren.org.{" "}
                  <a
                    href="https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Babys-First-Bowel-Movements.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    healthychildren.org
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge source-badge-aap flex-shrink-0">
                  AAP
                </span>
                <span>
                  American Academy of Pediatrics. &quot;The Many Colors of
                  Poop.&quot; HealthyChildren.org.{" "}
                  <a
                    href="https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    healthychildren.org
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge source-badge-cdc flex-shrink-0">
                  CDC
                </span>
                <span>
                  Centers for Disease Control and Prevention. &quot;Infant and
                  Toddler Nutrition.&quot;{" "}
                  <a
                    href="https://www.cdc.gov/nutrition/infantandtoddlernutrition/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    cdc.gov
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge flex-shrink-0">NASPGHAN</span>
                <span>
                  North American Society for Pediatric Gastroenterology,
                  Hepatology, and Nutrition. &quot;Biliary Atresia&quot; and
                  &quot;Stool Color Card&quot; screening recommendations.{" "}
                  <a
                    href="https://www.naspghan.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    naspghan.org
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-muted text-center leading-relaxed pb-6">
          Based on AAP, CDC, and NASPGHAN guidelines. This is educational
          content, not medical advice. When in doubt, always contact your
          pediatrician. No photos are used in this guide -- only color swatches.
        </p>
      </div>
    </>
  );
}
