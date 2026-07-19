import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import {
  RECALL_CATEGORIES,
  SAFETY_RESOURCES,
  HOW_TO_CHECK_STEPS,
} from "@/data/product-safety/data";

export const metadata: Metadata = {
  title: "Baby Product Safety Recalls Guide - Check Cribs, Car Seats & More",
  description:
    "Check if your baby products have been recalled. Search cribs, car seats, strollers, high chairs, toys, and more. Includes CPSC recall links, safety tips, and step-by-step instructions for checking recalls.",
  alternates: {
    canonical: "/product-safety",
  },
  openGraph: {
    title: "Baby Product Safety Recalls Guide | Is My Baby Alright?",
    description:
      "Search for recalled baby products including cribs, car seats, strollers, toys, and more. Step-by-step guide to checking recalls and keeping your child safe.",
  },
};

const contentSchema = getContentPageSchema({
  name: 'Baby Product Safety Recalls Guide - Check Cribs, Car Seats & More',
  description:
    'Check if your baby products have been recalled. Search cribs, car seats, strollers, high chairs, toys, and more. Includes CPSC recall links, safety tips, and step-by-step instructions for checking recalls.',
  path: '/product-safety',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Product Safety' },
]);

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check if Your Baby Product Has Been Recalled",
  description:
    "Step-by-step guide to checking for baby product safety recalls using CPSC, NHTSA, and FDA databases.",
  step: HOW_TO_CHECK_STEPS.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.description,
  })),
};

const productSafetyFaqItems = [
  {
    question: "How do I check if my baby product has been recalled?",
    answer:
      "Visit cpsc.gov/Recalls and search by product name, brand, or model number. For car seats, use nhtsa.gov/recalls. For infant formula and baby food, check fda.gov/safety/recalls. You can also sign up for free email alerts at cpsc.gov to be notified of new recalls.",
  },
  {
    question: "What should I do if my baby's product is recalled?",
    answer:
      "Stop using the product immediately. Follow the recall instructions, which may include returning it for a refund, receiving a repair kit, or getting a replacement. Never try to fix a recalled product yourself. Contact the manufacturer using the details in the recall notice.",
  },
  {
    question: "What are the most commonly recalled baby products?",
    answer:
      "The most commonly recalled baby products include cribs, car seats, strollers, high chairs, toys, infant swings and bouncers, play yards, bassinets, baby monitors, and children's clothing. Toys are the single most frequently recalled category.",
  },
  {
    question: "How do I register baby products for recall alerts?",
    answer:
      "Fill out the registration card included with your product or visit the manufacturer's website. Under the CPSIA, all makers of durable infant and toddler products must offer free registration. This ensures you are contacted directly if a recall is issued for your specific product.",
  },
];

const faqJsonLd = getFAQPageSchema(productSafetyFaqItems);

export default function ProductSafetyPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Product Safety Recalls" }]} />

      <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10 space-y-10">
        {/* Hero / Intro */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Baby Product Safety Recalls Guide
          </h1>
          <LastReviewed date="2026-07-01" />
          <div className="mt-3">
            <MedicalReviewAttribution sources={['CPSC', 'AAP']} />
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            Every year, millions of baby and children's products are recalled
            due to safety hazards including choking, strangulation, falls,
            burns, and suffocation risks. The U.S. Consumer Product Safety
            Commission (CPSC) reports that an estimated 60,000 children under
            age 5 are treated in emergency rooms each year for injuries
            related to nursery products alone.
          </p>
          <p className="mt-2 text-muted leading-relaxed">
            Checking for recalls takes only a few minutes and could save your
            child's life. Use this guide to search for recalls on every
            product your baby uses, learn what hazards to watch for, and sign
            up for automatic alerts so you are notified the moment a new
            recall is announced.
          </p>
        </div>

        <KeyTakeaways
          takeaways={[
            "If a product has been recalled, stop using it immediately and follow the manufacturer's recall instructions.",
            "Check cpsc.gov/Recalls for most baby products, nhtsa.gov for car seats, and fda.gov for formula and baby food.",
            "Register every durable baby product you own so you are notified directly if a recall is issued.",
            "An estimated 60,000 children under age 5 are treated in ERs each year for injuries related to nursery products.",
          ]}
        />

        {/* Urgent Notice */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-4 py-4 dark:border-amber-500/40 dark:bg-amber-950/30">
          <p className="text-base font-bold text-amber-800 dark:text-amber-300 mb-2">
            If a product has been recalled, stop using it immediately.
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            Do not attempt to repair or modify a recalled product yourself.
            Follow the manufacturer's recall instructions to receive a
            refund, replacement, or free repair. Contact the CPSC at
            1-800-638-2772 if you have questions.
          </p>
        </div>

        {/* How to Check for Recalls */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            How to Check for Recalls
          </h2>
          <div className="space-y-3">
            {HOW_TO_CHECK_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-card-border bg-card p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary text-sm font-bold mt-0.5">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Category Cards */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Product Categories
          </h2>
          <p className="text-sm text-muted mb-4">
            Select a category below to see common recall issues, safety tips,
            and a direct link to search for recalls on that product type.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RECALL_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">
                    {category.emoji}
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {category.description}
                </p>

                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                    Common Recall Issues
                  </h4>
                  <ul className="space-y-1">
                    {category.commonIssues.map((issue, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-xs text-muted leading-relaxed"
                      >
                        <span
                          className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-red-400 dark:bg-red-500"
                          aria-hidden="true"
                        />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                    Safety Tips
                  </h4>
                  <ul className="space-y-1">
                    {category.safetyTips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-xs text-muted leading-relaxed"
                      >
                        <span
                          className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-green-400 dark:bg-green-500"
                          aria-hidden="true"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={category.checkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    Check Recalls
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Resources */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Safety Resources &amp; Hotlines
          </h2>
          <div className="space-y-3">
            {SAFETY_RESOURCES.map((resource, i) => (
              <div
                key={i}
                className="rounded-2xl border border-card-border bg-card p-4 sm:p-6"
              >
                <h3 className="text-sm font-bold text-foreground mb-1">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary hover:text-primary/80"
                  >
                    {resource.name}
                  </a>
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {resource.description}
                </p>
                {resource.phone && (
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Phone:{" "}
                    <a
                      href={`tel:${resource.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-primary underline"
                    >
                      {resource.phone}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Product Registration CTA */}
        <section className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 px-4 py-6 sm:px-6 dark:border-primary/20 dark:bg-primary/5">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Register Your Products to Receive Recall Alerts
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Product registration is the single most effective way to make sure
            you are notified of a recall. Under the Consumer Product Safety
            Improvement Act (CPSIA), all manufacturers of durable infant and
            toddler products are required to include a postage-paid
            registration card and offer online registration.
          </p>
          <p className="text-sm text-muted leading-relaxed mb-3">
            When you register, the manufacturer adds your contact information
            to their recall notification list. If a recall is issued for your
            specific product model, you will be contacted directly by mail or
            email with instructions on what to do.
          </p>
          <div className="space-y-2 text-sm text-foreground">
            <p className="font-semibold">Products you should register:</p>
            <ul className="space-y-1 list-disc list-inside text-muted">
              <li>Cribs, bassinets, and play yards</li>
              <li>Car seats and booster seats</li>
              <li>Strollers and jogging strollers</li>
              <li>High chairs and booster seats</li>
              <li>Swings, bouncers, and rockers</li>
              <li>Baby monitors</li>
              <li>Bath seats and baby gates</li>
              <li>Carriers and baby wraps</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection items={productSafetyFaqItems} />

        {/* Sources / Disclaimer */}
        <div className="text-xs text-muted space-y-3">
          <div>
            <p className="font-semibold mb-1">Sources</p>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="https://www.cpsc.gov/Recalls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  U.S. Consumer Product Safety Commission — Recalls
                </a>
              </li>
              <li>
                <a
                  href="https://www.nhtsa.gov/equipment/car-seats-and-booster-seats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  NHTSA — Car Seats and Booster Seats
                </a>
              </li>
              <li>
                <a
                  href="https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  FDA — Recalls, Market Withdrawals &amp; Safety Alerts
                </a>
              </li>
              <li>
                <a
                  href="https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Product-Recalls.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  AAP HealthyChildren.org — Product Recalls
                </a>
              </li>
              <li>
                <a
                  href="https://www.safekids.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  Safe Kids Worldwide
                </a>
              </li>
              <li>
                <a
                  href="https://www.kidsindanger.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  Kids In Danger
                </a>
              </li>
            </ul>
          </div>
          <p>
            This guide is for informational purposes only. Recall information
            changes frequently. Always verify current recall status directly
            with the CPSC, NHTSA, or FDA. This page does not constitute
            legal, medical, or product safety advice. If you believe a
            product is unsafe, report it at{" "}
            <a
              href="https://www.saferproducts.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              SaferProducts.gov
            </a>{" "}
            or call the CPSC at 1-800-638-2772.
          </p>
        </div>

        <BottomLine
          summary="Checking for product recalls takes only a few minutes but can prevent serious injuries. Register every durable baby product you own, bookmark cpsc.gov/Recalls, and stop using any recalled product immediately. Staying informed is one of the simplest ways to keep your child safe."
          supportiveMessage="You are doing the right thing by checking. Staying on top of recalls shows how much you care about your child's safety."
        />

        <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>
      </div>
    </article>
  );
}
