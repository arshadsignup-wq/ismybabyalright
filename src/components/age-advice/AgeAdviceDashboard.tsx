'use client';

import Link from 'next/link';
import type { AgeAdvice } from '@/lib/ageAdvice';
import { formatAge } from '@/lib/ageAdvice';
import type { MilestoneCategory } from '@/data/milestones/types';

interface AgeAdviceDashboardProps {
  advice: AgeAdvice;
  ageLabel: string;
}

const categoryLabels: Record<MilestoneCategory, string> = {
  grossMotor: 'Gross Motor',
  fineMotor: 'Fine Motor',
  language: 'Language',
  socialEmotional: 'Social & Emotional',
  cognitive: 'Cognitive',
};

const concernCategoryColors: Record<string, string> = {
  physical: '#38BDF8',
  communication: '#A78BFA',
  feeding: '#F4A261',
  sleep: '#818CF8',
  skin: '#F472B6',
  digestive: '#34D399',
  behavior: '#FBBF24',
  medical: '#F07167',
};

const concernCategoryLabels: Record<string, string> = {
  physical: 'Physical',
  communication: 'Speech',
  feeding: 'Feeding',
  sleep: 'Sleep',
  skin: 'Skin',
  digestive: 'Digestive',
  behavior: 'Behavior',
  medical: 'Medical',
};

export default function AgeAdviceDashboard({
  advice,
  ageLabel,
}: AgeAdviceDashboardProps) {
  const { months, milestones, concerns, foods, sleep, vaccines } = advice;

  const prevMonth = months > 0 ? months - 1 : null;
  const nextMonth = months < 36 ? months + 1 : null;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        {prevMonth !== null ? (
          <Link
            href={`/age-advice/${prevMonth}`}
            className="text-sm text-primary font-semibold no-underline hover:text-primary-hover transition-colors min-h-[44px] flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {formatAge(prevMonth)}
          </Link>
        ) : (
          <div />
        )}
        {nextMonth !== null ? (
          <Link
            href={`/age-advice/${nextMonth}`}
            className="text-sm text-primary font-semibold no-underline hover:text-primary-hover transition-colors min-h-[44px] flex items-center"
          >
            {formatAge(nextMonth)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl">{ageLabel}</h1>
        <p className="text-muted text-lg mt-2">
          Here&apos;s what&apos;s happening at this age - milestones, common
          concerns, nutrition, sleep, and vaccines.
        </p>
      </div>

      {/* Milestones Section */}
      {milestones && (
        <section className="mb-8" aria-labelledby="milestones-heading">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
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
                  className="text-primary"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h2 id="milestones-heading" className="text-xl mb-0">
                  Developmental Milestones
                </h2>
                <p className="text-muted text-sm mt-0.5">
                  Based on the {milestones.label} checkpoint
                  {milestones.ageInMonths !== months && (
                    <span>
                      {' '}
                      - the closest milestone age to {months} months
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {(Object.keys(categoryLabels) as MilestoneCategory[]).map(
                (category) => {
                  const items = milestones.categories[category];
                  if (!items || items.length === 0) return null;

                  return (
                    <div key={category}>
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">
                        {categoryLabels[category]}
                      </h3>
                      <ul className="space-y-1.5">
                        {items.slice(0, 3).map((milestone) => (
                          <li
                            key={milestone.id}
                            className="flex items-start gap-2 text-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-primary mt-0.5 flex-shrink-0"
                            >
                              <circle cx="12" cy="12" r="4" />
                            </svg>
                            <div>
                              <span className="font-semibold">
                                {milestone.name}
                              </span>
                              <span className="text-muted">
                                {' '}
                                - {milestone.plainDescription}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>

            {milestones.redFlags.length > 0 && (
              <div className="mt-5 p-4 rounded-xl bg-coral-light border border-[#FECACA]">
                <h3 className="text-sm font-bold text-coral-foreground mb-2">
                  Red Flags to Watch For
                </h3>
                <ul className="space-y-1">
                  {milestones.redFlags.slice(0, 3).map((flag, i) => (
                    <li
                      key={i}
                      className="text-sm text-coral-foreground flex items-start gap-2"
                    >
                      <span className="text-coral font-bold mt-0.5">!</span>
                      <span>{flag.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <Link
                href={`/milestones/${milestones.id}`}
                className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
              >
                View full {milestones.label} milestone details &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Concerns Section */}
      {concerns.length > 0 && (
        <section className="mb-8" aria-labelledby="concerns-heading">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sunny-light flex items-center justify-center flex-shrink-0">
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
                  className="text-sunny-foreground"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <div>
                <h2 id="concerns-heading" className="text-xl mb-0">
                  Common Concerns at This Age
                </h2>
                <p className="text-muted text-sm mt-0.5">
                  Things parents often wonder about around {ageLabel.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {concerns.map((concern) => (
                <Link
                  key={concern.slug}
                  href={`/concerns/${concern.slug}`}
                  className="block p-3 rounded-xl border border-card-border bg-card-alt hover:border-primary hover:shadow-sm transition-all no-underline group"
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${concernCategoryColors[concern.category]}15`,
                        color: concernCategoryColors[concern.category],
                      }}
                    >
                      {concernCategoryLabels[concern.category]}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-1.5 mb-1">
                    {concern.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-2">
                    {concern.quickAnswer.slice(0, 120)}
                    {concern.quickAnswer.length > 120 ? '...' : ''}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/concerns"
                className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
              >
                Browse all 325 concerns &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Food Readiness Section */}
      {months >= 4 && (
        <section className="mb-8" aria-labelledby="food-heading">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center flex-shrink-0">
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
                  className="text-mint-foreground"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                </svg>
              </div>
              <div>
                <h2 id="food-heading" className="text-xl mb-0">
                  Food Readiness
                </h2>
                <p className="text-muted text-sm mt-0.5">
                  {months < 6
                    ? 'Some babies show signs of readiness around 4-6 months - talk to your pediatrician'
                    : `Foods appropriate for ${ageLabel.toLowerCase()}`}
                </p>
              </div>
            </div>

            {foods.length > 0 ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {foods.map((food) => (
                  <div
                    key={food.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card-alt"
                  >
                    <span className="text-2xl flex-shrink-0" role="img">
                      {food.emoji}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold mb-0.5">
                        {food.name}
                      </h4>
                      {food.preps[0] && (
                        <p className="text-xs text-muted">
                          {food.preps[0].method}
                        </p>
                      )}
                      {food.allergen && (
                        <span className="inline-block mt-1 text-[10px] font-bold text-coral bg-coral-light px-2 py-0.5 rounded-full">
                          Allergen: {food.allergen}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-card-alt text-center">
                <p className="text-sm text-muted">
                  {months < 4
                    ? 'Breast milk or formula is all your baby needs right now. Solid foods are typically introduced around 6 months.'
                    : 'Talk to your pediatrician about when to start solids.'}
                </p>
              </div>
            )}

            <div className="mt-4">
              <Link
                href="/food"
                className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
              >
                View full food guide &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {months < 4 && (
        <section className="mb-8" aria-labelledby="food-heading-early">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center flex-shrink-0">
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
                  className="text-mint-foreground"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                </svg>
              </div>
              <div>
                <h2 id="food-heading-early" className="text-xl mb-0">
                  Feeding
                </h2>
                <p className="text-muted text-sm mt-0.5">
                  Breast milk or formula only at this age
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card-alt">
              <p className="text-sm text-muted">
                Your baby gets all the nutrition they need from breast milk or
                formula right now. The AAP and WHO recommend exclusive breast
                milk or formula for about the first 6 months. Solid foods are
                usually introduced around 6 months, when your baby shows signs
                of readiness like sitting with support, good head control, and
                interest in food.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Sleep Section */}
      {sleep && (
        <section className="mb-8" aria-labelledby="sleep-heading">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0">
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
                  className="text-lavender-foreground"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <div>
                <h2 id="sleep-heading" className="text-xl mb-0">
                  Sleep Needs
                </h2>
                <p className="text-muted text-sm mt-0.5">
                  {sleep.ageRange}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-4">
              <div className="p-4 rounded-xl bg-lavender-light text-center">
                <p className="text-2xl font-bold text-lavender-foreground">
                  {sleep.totalSleepHours}
                </p>
                <p className="text-xs text-lavender-foreground mt-1">
                  Total sleep per day
                </p>
              </div>
              <div className="p-4 rounded-xl bg-lavender-light text-center">
                <p className="text-2xl font-bold text-lavender-foreground">
                  {sleep.nightSleepHours}
                </p>
                <p className="text-xs text-lavender-foreground mt-1">
                  Nighttime sleep
                </p>
              </div>
              <div className="p-4 rounded-xl bg-lavender-light text-center">
                <p className="text-lg font-bold text-lavender-foreground">
                  {sleep.napInfo}
                </p>
                <p className="text-xs text-lavender-foreground mt-1">Naps</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                Tips for this age
              </h3>
              <ul className="space-y-1.5">
                {sleep.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lavender mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-muted">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <Link
                href="/sleep"
                className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
              >
                View full sleep guide &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Vaccines Section */}
      <section className="mb-8" aria-labelledby="vaccines-heading">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
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
                className="text-sky-foreground"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div>
              <h2 id="vaccines-heading" className="text-xl mb-0">
                Vaccines
              </h2>
              <p className="text-muted text-sm mt-0.5">
                {vaccines.length > 0
                  ? `Vaccines due around ${ageLabel.toLowerCase()}`
                  : `No new vaccines typically scheduled at ${ageLabel.toLowerCase()}`}
              </p>
            </div>
          </div>

          {vaccines.length > 0 ? (
            <div className="space-y-3">
              {vaccines.map((item, i) => (
                <div
                  key={`${item.vaccine.id}-${item.dose.doseNumber}-${i}`}
                  className="p-3 rounded-xl bg-sky-light"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-sky-foreground">
                      {item.vaccine.abbreviation}
                    </span>
                    <span className="text-xs text-sky-foreground bg-white/60 px-2 py-0.5 rounded-full font-medium">
                      Dose {item.dose.doseNumber} - {item.dose.ageLabel}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-sky-foreground">
                    {item.vaccine.name}
                  </p>
                  <p className="text-xs text-sky-foreground/80 mt-0.5">
                    {item.vaccine.description}
                  </p>
                  {item.dose.notes && (
                    <p className="text-xs text-sky-foreground/70 mt-1 italic">
                      {item.dose.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-card-alt text-center">
              <p className="text-sm text-muted">
                No new vaccines are typically scheduled at this exact age. The
                CDC schedule has doses at birth, 1, 2, 4, 6, 12, 15, and 18
                months. Your pediatrician will let you know what&apos;s due at
                each well visit.
              </p>
            </div>
          )}

          <div className="mt-4">
            <Link
              href="/vaccines"
              className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
            >
              View full vaccine schedule &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Reassurance Footer */}
      <div className="card-alt p-6 text-center">
        <p className="text-sm text-muted">
          Every baby develops at their own pace. The ranges here are based on
          typical development from the CDC, AAP, and WHO. If something feels
          off or you have questions, trust your instincts and talk to your
          pediatrician. You know your baby best.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {prevMonth !== null && (
            <Link
              href={`/age-advice/${prevMonth}`}
              className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
            >
              &larr; {formatAge(prevMonth)}
            </Link>
          )}
          <Link
            href="/age-advice"
            className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
          >
            All Ages
          </Link>
          {nextMonth !== null && (
            <Link
              href={`/age-advice/${nextMonth}`}
              className="text-sm font-semibold text-primary no-underline hover:text-primary-hover transition-colors"
            >
              {formatAge(nextMonth)} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
