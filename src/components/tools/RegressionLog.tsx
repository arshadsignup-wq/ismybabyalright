"use client";

import { useState } from "react";
import PrintButton from "@/components/shared/PrintButton";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface RegressionFormData {
  childName: string;
  skillDescription: string;
  skillFirstNoticed: string;
  skillStoppedDate: string;
  otherChanges: string;
  recentLifeChanges: string;
}

const EMPTY_FORM: RegressionFormData = {
  childName: "",
  skillDescription: "",
  skillFirstNoticed: "",
  skillStoppedDate: "",
  otherChanges: "",
  recentLifeChanges: "",
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function RegressionLog() {
  const [form, setForm] = useState<RegressionFormData>(EMPTY_FORM);
  const [report, setReport] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /* ---------------------------------------------------------------------- */
  /*  Helpers                                                                */
  /* ---------------------------------------------------------------------- */

  function updateField(
    field: keyof RegressionFormData,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function formatDate(dateStr: string): string {
    if (!dateStr) return "Not specified";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  /* ---------------------------------------------------------------------- */
  /*  Generate report                                                        */
  /* ---------------------------------------------------------------------- */

  function handleGenerate() {
    setError(null);

    if (!form.skillDescription.trim()) {
      setError("Please describe the skill that was present.");
      return;
    }

    if (!form.skillStoppedDate) {
      setError("Please enter when the skill stopped or changed.");
      return;
    }

    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const childLabel = form.childName.trim()
      ? form.childName.trim()
      : "My child";

    const lines = [
      `DEVELOPMENTAL REGRESSION LOG`,
      `Prepared: ${today}`,
      ``,
      `---`,
      ``,
    ];

    if (form.childName.trim()) {
      lines.push(`Child's name: ${form.childName.trim()}`);
      lines.push(``);
    }

    lines.push(`SKILL THAT WAS PRESENT:`);
    lines.push(`${form.skillDescription.trim()}`);
    lines.push(``);

    if (form.skillFirstNoticed) {
      lines.push(`When first noticed: ${formatDate(form.skillFirstNoticed)}`);
    }

    lines.push(`When skill stopped or changed: ${formatDate(form.skillStoppedDate)}`);
    lines.push(``);

    if (form.otherChanges.trim()) {
      lines.push(`OTHER CHANGES NOTICED:`);
      lines.push(`${form.otherChanges.trim()}`);
      lines.push(``);
    }

    if (form.recentLifeChanges.trim()) {
      lines.push(`RECENT LIFE CHANGES:`);
      lines.push(`${form.recentLifeChanges.trim()}`);
      lines.push(``);
    }

    lines.push(`---`);
    lines.push(``);
    lines.push(
      `Note: This log was created to share with ${childLabel === "My child" ? "my" : `${childLabel}'s`} healthcare provider. ` +
      `I am concerned about possible developmental regression.`
    );

    setReport(lines.join("\n"));
  }

  /* ---------------------------------------------------------------------- */
  /*  Reset                                                                  */
  /* ---------------------------------------------------------------------- */

  function handleReset() {
    setForm(EMPTY_FORM);
    setReport(null);
    setError(null);
  }

  /* ---------------------------------------------------------------------- */
  /*  Render                                                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <section className="card p-5 sm:p-8" aria-label="Regression documentation tool">
      <h2>Regression Documentation Tool</h2>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        If your child has lost a skill they once had, documenting it clearly
        helps your doctor understand the situation quickly. This tool creates a
        dated report you can print or share. Everything stays in your browser
        &mdash; nothing is stored or sent anywhere.
      </p>

      {/* ---------------------------------------------------------------- */}
      {/*  Guidance Box                                                     */}
      {/* ---------------------------------------------------------------- */}
      <div className="tier-monitor p-5 mb-6">
        <div className="flex items-start gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <path d="M12 20h9" />
            <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
          </svg>
          <div>
            <p className="text-sm font-semibold mb-1">
              Use the word &ldquo;regression&rdquo; with your doctor
            </p>
            <p className="text-sm leading-relaxed">
              &ldquo;Regression&rdquo; is a specific medical term that
              healthcare providers take seriously. Saying &ldquo;my child lost a
              skill&rdquo; or &ldquo;my child regressed&rdquo; will prompt a
              different and more thorough response than &ldquo;my child seems
              behind.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Urgent Referral Box                                              */}
      {/* ---------------------------------------------------------------- */}
      <div className="tier-concern p-5 mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="tier-concern-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            When to seek urgent evaluation
          </span>
        </div>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed" role="list">
          <li className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern" aria-hidden="true" />
            <span>Loss of any language skills (words, babbling) at any age</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern" aria-hidden="true" />
            <span>Loss of social engagement (stops making eye contact, stops responding to name)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern" aria-hidden="true" />
            <span>Loss of motor skills (could walk but now cannot, could grasp but no longer can)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern" aria-hidden="true" />
            <span>Any regression paired with seizures, unusual movements, or loss of consciousness</span>
          </li>
        </ul>
        <p className="text-sm font-semibold mt-3">
          If any of these apply, contact your pediatrician now &mdash; do not wait for the next scheduled visit.
        </p>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Form                                                             */}
      {/* ---------------------------------------------------------------- */}
      {!report ? (
        <div className="space-y-5">
          {/* Child's name (optional) */}
          <div>
            <label
              htmlFor="reg-name"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Child&apos;s name{" "}
              <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="reg-name"
              type="text"
              value={form.childName}
              onChange={(e) => updateField("childName", e.target.value)}
              placeholder="First name"
              className="w-full max-w-sm px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* What skill was present */}
          <div>
            <label
              htmlFor="reg-skill"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              What skill was present?
            </label>
            <input
              id="reg-skill"
              type="text"
              value={form.skillDescription}
              onChange={(e) => updateField("skillDescription", e.target.value)}
              placeholder='e.g. "was saying mama and dada", "could walk independently"'
              className="w-full px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-required="true"
            />
          </div>

          {/* When first noticed */}
          <div>
            <label
              htmlFor="reg-first-noticed"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              When did you first notice this skill?
            </label>
            <input
              id="reg-first-noticed"
              type="date"
              value={form.skillFirstNoticed}
              onChange={(e) => updateField("skillFirstNoticed", e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              className="w-full max-w-xs px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* When skill stopped */}
          <div>
            <label
              htmlFor="reg-stopped"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              When did the skill stop or change?
            </label>
            <input
              id="reg-stopped"
              type="date"
              value={form.skillStoppedDate}
              onChange={(e) => updateField("skillStoppedDate", e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              className="w-full max-w-xs px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-required="true"
            />
          </div>

          {/* Other changes */}
          <div>
            <label
              htmlFor="reg-other-changes"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              What other changes have you noticed?
            </label>
            <textarea
              id="reg-other-changes"
              value={form.otherChanges}
              onChange={(e) => updateField("otherChanges", e.target.value)}
              placeholder='e.g. "less eye contact", "more tantrums", "stopped pointing"'
              rows={3}
              className="w-full px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Recent life changes */}
          <div>
            <label
              htmlFor="reg-life-changes"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Has anything else changed recently?
            </label>
            <p className="text-xs text-muted mb-2">
              e.g., illness, family changes, new sibling, starting daycare,
              moving homes
            </p>
            <textarea
              id="reg-life-changes"
              value={form.recentLifeChanges}
              onChange={(e) => updateField("recentLifeChanges", e.target.value)}
              placeholder="Describe any recent changes..."
              rows={3}
              className="w-full px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="tier-concern p-4 text-sm" role="alert">
              {error}
            </div>
          )}

          {/* Generate button */}
          <button
            type="button"
            onClick={handleGenerate}
            className="px-6 py-2.5 min-h-[44px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
            aria-label="Generate regression report"
          >
            Generate Report
          </button>
        </div>
      ) : (
        /* -------------------------------------------------------------- */
        /*  Generated Report                                               */
        /* -------------------------------------------------------------- */
        <div className="space-y-5">
          <div className="card-alt p-5">
            <h3 className="text-base font-semibold text-foreground mb-3">
              Your Regression Report
            </h3>
            <pre className="whitespace-pre-wrap font-mono text-sm text-foreground leading-relaxed bg-card p-4 rounded-lg border border-border overflow-x-auto">
              {report}
            </pre>
          </div>

          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-card-alt transition-colors cursor-pointer"
              aria-label="Start a new report"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
