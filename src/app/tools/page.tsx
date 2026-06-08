import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Baby & Pregnancy Tools - Free Calculators & Trackers",
  description:
    "27 free baby and pregnancy tools: growth calculator, medicine dosage, due date calculator, sleep schedule, feeding guide, and more. Evidence-based and pediatrician-approved.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Baby & Pregnancy Tools - Free Calculators & Trackers | Is My Baby Alright?",
    description:
      "27 free baby and pregnancy tools: growth calculator, medicine dosage, due date calculator, sleep schedule, feeding guide, and more.",
  },
};

const toolCategories = [
  {
    name: "Pregnancy",
    tools: [
      { href: "/tools/pregnancy-tracker", label: "Pregnancy Tracker", desc: "Week-by-week pregnancy guide with baby size, development, and tips" },
      { href: "/tools/due-date", label: "Due Date Calculator", desc: "Calculate your estimated due date from LMP or conception date" },
      { href: "/tools/ovulation", label: "Ovulation Calculator", desc: "Track your fertile window and ovulation days" },
      { href: "/tools/contraction-timer", label: "Contraction Timer", desc: "Time contractions to know when to head to the hospital" },
      { href: "/tools/kick-counter", label: "Kick Counter", desc: "Track baby's movements to monitor fetal well-being" },
      { href: "/tools/gender-predictor", label: "Gender Predictor", desc: "Fun prediction based on Chinese calendar and other methods" },
      { href: "/tools/bmi", label: "Pregnancy BMI Calculator", desc: "Calculate BMI and healthy weight gain range for pregnancy" },
    ],
  },
  {
    name: "Growth & Development",
    tools: [
      { href: "/tools/growth", label: "Growth Percentile Calculator", desc: "Plot your baby on WHO/CDC growth charts for weight, length, and head" },
      { href: "/tools/weight-for-length", label: "Weight-for-Length", desc: "Check if your baby's weight is proportional to their length" },
      { href: "/tools/height-predictor", label: "Height Predictor", desc: "Estimate your child's adult height based on parental heights" },
      { href: "/tools/adjusted-age", label: "Adjusted Age Calculator", desc: "Calculate corrected age for premature babies" },
      { href: "/tools/wonder-weeks", label: "Wonder Weeks", desc: "Track developmental leaps and understand fussy periods" },
      { href: "/tools/eye-color", label: "Eye Color Predictor", desc: "Predict your baby's eye color based on genetics" },
    ],
  },
  {
    name: "Feeding & Nutrition",
    tools: [
      { href: "/tools/feeding-amount", label: "Feeding Amount Guide", desc: "How much breast milk or formula your baby needs by age" },
      { href: "/tools/breast-milk-storage", label: "Breast Milk Storage", desc: "Safe storage times for breast milk at room temp, fridge, and freezer" },
      { href: "/tools/pumping-schedule", label: "Pumping Schedule", desc: "Optimal pumping schedule for working moms and exclusive pumpers" },
      { href: "/tools/medicine-dosage", label: "Medicine Dosage Calculator", desc: "Weight-based Tylenol and Motrin dosing for infants and toddlers" },
    ],
  },
  {
    name: "Sleep & Schedule",
    tools: [
      { href: "/tools/sleep-schedule", label: "Sleep Schedule Calculator", desc: "Age-appropriate wake windows, nap times, and bedtime suggestions" },
      { href: "/tools/regression-log", label: "Sleep Regression Log", desc: "Track and identify sleep regression patterns by age" },
      { href: "/tools/screen-time", label: "Screen Time Guide", desc: "AAP-recommended screen time limits and alternatives by age" },
    ],
  },
  {
    name: "Safety & Health",
    tools: [
      { href: "/tools/baby-proofing", label: "Baby-Proofing Checklist", desc: "Room-by-room safety checklist for your home" },
      { href: "/tools/car-seat", label: "Car Seat Guide", desc: "Find the right car seat type and installation tips for your child's age" },
      { href: "/tools/diaper-size", label: "Diaper Size Guide", desc: "Find the right diaper size based on your baby's weight" },
      { href: "/tools/emergency-contacts", label: "Emergency Contacts", desc: "Poison control, crisis hotlines, and state-specific emergency numbers" },
    ],
  },
  {
    name: "Planning",
    tools: [
      { href: "/tools/baby-budget", label: "Baby Budget Planner", desc: "Estimate first-year costs for feeding, diapers, gear, and childcare" },
      { href: "/tools/childcare-cost", label: "Childcare Cost Calculator", desc: "Compare childcare options and costs in your area" },
      { href: "/tools/name-generator", label: "Baby Name Generator", desc: "Find the perfect baby name with filters for origin, meaning, and style" },
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ismybabyalright.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.ismybabyalright.com/tools" },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Baby & Pregnancy Tools",
  description: "27 free baby and pregnancy tools: calculators, trackers, and guides based on pediatric guidelines.",
  url: "https://www.ismybabyalright.com/tools",
  isPartOf: {
    "@type": "WebSite",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

export default function ToolsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Tools" }]} />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Baby &amp; Pregnancy Tools
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted text-base sm:text-lg">
            27 free calculators, trackers, and guides to help you through pregnancy
            and your baby&apos;s first years. All based on CDC, WHO, and AAP guidelines.
          </p>
          <div className="mt-4 inline-flex items-center gap-2.5">
            <span className="source-badge source-badge-cdc">CDC</span>
            <span className="source-badge source-badge-who">WHO</span>
            <span className="source-badge source-badge-aap">AAP</span>
          </div>
        </div>

        {toolCategories.map((category) => (
          <section key={category.name} className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">{category.name}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col gap-1 rounded-2xl border border-[#E8E2D9] bg-white p-4 no-underline transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="text-sm font-bold text-foreground group-hover:text-[#F07167] transition-colors">
                    {tool.label}
                  </span>
                  <span className="text-xs text-muted leading-relaxed">
                    {tool.desc}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
