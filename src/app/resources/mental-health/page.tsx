import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EPDSScreener from "@/components/tools/EPDSScreener";

export const metadata: Metadata = {
  title: "Mental Health Resources for Parents",
  description:
    "Postpartum depression screening, warmline numbers, and mental health resources for new parents. You deserve support.",
  alternates: {
    canonical: "/resources/mental-health",
  },
  openGraph: {
    title: "Mental Health Resources for Parents | Is My Baby Alright?",
    description:
      "Postpartum depression screening, warmline numbers, and mental health resources for new parents.",
  },
};

export default function MentalHealthPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources/mental-health" },
          { label: "Mental Health" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Mental Health Resources for Parents</h1>
        <p className="text-muted text-lg mb-8 max-w-2xl">
          Your mental health matters just as much as your baby&apos;s
          development. If you are struggling, you are not alone and help is
          available right now.
        </p>

        {/* Crisis & Warmline Numbers */}
        <section
          className="card border-l-4 border-l-primary mb-8"
          aria-labelledby="warmlines-heading"
        >
          <h2 id="warmlines-heading" className="text-lg mb-4">
            Immediate Support
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold text-foreground">
                Postpartum Support International (PSI) Warmline
              </p>
              <p className="text-sm text-muted mt-1">
                Call or text{" "}
                <a
                  href="tel:1-800-944-4773"
                  className="font-bold text-primary underline"
                >
                  1-800-944-4773
                </a>
              </p>
              <p className="text-sm text-muted">
                Available in English and Spanish. Not a crisis line -- a
                warmline staffed by trained volunteers who understand what you
                are going through.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Crisis Text Line</p>
              <p className="text-sm text-muted mt-1">
                Text{" "}
                <span className="font-bold text-primary">HOME</span> to{" "}
                <a
                  href="sms:741741&body=HOME"
                  className="font-bold text-primary underline"
                >
                  741741
                </a>
              </p>
              <p className="text-sm text-muted">
                Free, 24/7 crisis support via text message. Trained crisis
                counselors available any time.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">
                988 Suicide &amp; Crisis Lifeline
              </p>
              <p className="text-sm text-muted mt-1">
                Call or text{" "}
                <a
                  href="tel:988"
                  className="font-bold text-primary underline"
                >
                  988
                </a>
              </p>
              <p className="text-sm text-muted">
                Free, confidential, 24/7 support for anyone in emotional
                distress.
              </p>
            </div>
          </div>
        </section>

        {/* EPDS Screening Tool */}
        <section className="mb-10" aria-labelledby="screening-heading">
          <h2 id="screening-heading">Self-Screening</h2>
          <p className="text-sm text-muted mb-6">
            The Edinburgh Postnatal Depression Scale (EPDS) is a validated
            screening tool used worldwide. It is not a diagnosis -- it helps you
            decide whether to seek further support.
          </p>
          <EPDSScreener />
        </section>

        {/* Postpartum Anxiety */}
        <section className="mb-8" aria-labelledby="anxiety-heading">
          <div className="card p-6">
            <h2 id="anxiety-heading" className="text-lg mb-3">
              Postpartum Anxiety
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Postpartum anxiety is just as common as postpartum depression but
              talked about far less. It can look like constant worry that
              something is wrong with your baby, difficulty sleeping even when
              the baby sleeps, racing thoughts, or a feeling that something bad
              is about to happen.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Intrusive thoughts -- unwanted, frightening thoughts about harm
              coming to your baby -- are a hallmark of postpartum anxiety and
              OCD. Having these thoughts does not mean you want to act on them.
              They are a symptom, not a reflection of your character.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              If anxiety is interfering with your daily life or your ability to
              enjoy time with your baby, talk to your healthcare provider.
              Effective treatments (therapy and/or medication) are available and
              safe for breastfeeding parents.
            </p>
          </div>
        </section>

        {/* Birth Trauma */}
        <section className="mb-8" aria-labelledby="birth-trauma-heading">
          <div className="card p-6">
            <h2 id="birth-trauma-heading" className="text-lg mb-3">
              Birth Trauma
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              A traumatic birth experience can leave lasting emotional effects.
              This can happen after an emergency C-section, a complicated
              delivery, a NICU stay, feeling unheard during labor, or any
              experience where you felt your life or your baby&apos;s life was
              in danger.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Symptoms may include flashbacks, nightmares, avoidance of anything
              related to the birth, hypervigilance, or emotional numbness. These
              are signs of birth-related PTSD, which affects approximately 4-6%
              of birthing parents.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Trauma-focused therapy (such as EMDR or CPT) can help. You do not
              need to &quot;just get over it.&quot; Your experience was real and
              your feelings are valid.
            </p>
          </div>
        </section>

        {/* Paternal / Partner Mental Health */}
        <section className="mb-8" aria-labelledby="paternal-mh-heading">
          <div className="card p-6">
            <h2 id="paternal-mh-heading" className="text-lg mb-3">
              Paternal &amp; Partner Mental Health
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Postpartum depression and anxiety affect non-birthing parents too.
              Research shows that approximately 8-10% of fathers experience
              paternal postpartum depression, and the rate is higher when the
              birthing parent is also struggling.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              In partners, it may look different: irritability, anger,
              withdrawal, increased work hours, risk-taking behavior, or
              substance use. These are not character flaws -- they can be
              symptoms of depression.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The PSI warmline (1-800-944-4773) is for all parents and
              caregivers, not just birthing parents. You deserve support too.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
