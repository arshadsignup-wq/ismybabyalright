"use client";

import { useState } from "react";
import {
  ACTIVITIES,
  AGE_GROUPS,
  DOMAINS,
  type DevelopmentDomain,
} from "@/data/developmental-activities/data";

export default function DevelopmentalActivities() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(AGE_GROUPS[0].id);
  const [selectedDomain, setSelectedDomain] = useState<
    DevelopmentDomain | "all"
  >("all");

  const activeAgeGroup = AGE_GROUPS.find((g) => g.id === selectedAgeGroup)!;

  const filtered = ACTIVITIES.filter((a) => {
    const ageMatch =
      a.ageRange.min >= activeAgeGroup.min &&
      a.ageRange.max <= activeAgeGroup.max;
    const domainMatch =
      selectedDomain === "all" || a.domain === selectedDomain;
    return ageMatch && domainMatch;
  });

  const domainInfo = (id: DevelopmentDomain) =>
    DOMAINS.find((d) => d.id === id)!;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Developmental Activities for Babies &amp; Toddlers
        </h1>
        <p className="mt-2 text-muted">
          Age-appropriate activities to support your child&apos;s motor,
          cognitive, language, social, and sensory development. Based on CDC,
          Zero to Three, and AAP guidelines.
        </p>
      </div>

      {/* Age group selector — horizontal scroll on mobile */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <p className="mb-3 text-sm font-semibold text-foreground">
          Select Age Group
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
          {AGE_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedAgeGroup(group.id)}
              className={`flex-shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedAgeGroup === group.id
                  ? "bg-primary text-white"
                  : "bg-card-alt text-foreground hover:bg-primary/10"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">{activeAgeGroup.description}</p>
      </div>

      {/* Domain filter tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedDomain("all")}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedDomain === "all"
              ? "bg-primary text-white"
              : "bg-card-alt text-foreground hover:bg-primary/10"
          }`}
        >
          All Domains
        </button>
        {DOMAINS.map((domain) => (
          <button
            key={domain.id}
            onClick={() => setSelectedDomain(domain.id)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedDomain === domain.id
                ? "bg-primary text-white"
                : "bg-card-alt text-foreground hover:bg-primary/10"
            }`}
          >
            <span aria-hidden="true" className="mr-1">
              {domain.emoji}
            </span>
            {domain.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted">
        Showing{" "}
        <span className="font-bold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "activity" : "activities"} for{" "}
        <span className="font-bold text-foreground">
          {activeAgeGroup.label}
        </span>
        {selectedDomain !== "all" && (
          <>
            {" "}
            in{" "}
            <span className="font-bold text-foreground">
              {domainInfo(selectedDomain).label}
            </span>
          </>
        )}
      </p>

      {/* Activity cards grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-card-border bg-card p-8 text-center">
          <p className="text-muted">
            No activities found for this combination. Try selecting a different
            domain or age group.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((activity) => {
            const domain = domainInfo(activity.domain);
            return (
              <article
                key={activity.id}
                className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-base font-bold text-foreground leading-snug">
                    {activity.title}
                  </h2>
                  <span className="flex-shrink-0 inline-flex items-center gap-1 rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                    <span aria-hidden="true">{domain.emoji}</span>
                    {domain.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-1.5 mb-3 text-xs text-muted">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {activity.duration}
                </div>

                {/* Materials */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-foreground mb-1.5">
                    Materials
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activity.materials.map((material, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-lg bg-card-alt px-2 py-0.5 text-xs text-muted"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tip */}
                {activity.tip && (
                  <div className="rounded-xl bg-primary-light/50 px-3 py-2.5 mb-3">
                    <p className="text-xs text-foreground leading-relaxed">
                      <span className="font-bold text-primary">Tip: </span>
                      {activity.tip}
                    </p>
                  </div>
                )}

                {/* Safety note */}
                {activity.safetyNote && (
                  <div className="rounded-xl bg-amber-50 px-3 py-2.5 dark:bg-amber-950/30 mt-auto">
                    <p className="text-xs text-amber-800 leading-relaxed dark:text-amber-300">
                      <span className="font-bold">Safety: </span>
                      {activity.safetyNote}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
