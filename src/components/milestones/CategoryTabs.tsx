"use client";

import { useState } from "react";
import type { AgeCheckpoint, MilestoneCategory } from "@/data/milestones";
import MilestoneCard from "./MilestoneCard";

interface CategoryTabsProps {
  categories: AgeCheckpoint["categories"];
}

interface TabDefinition {
  key: MilestoneCategory;
  label: string;
}

const TABS: TabDefinition[] = [
  { key: "grossMotor", label: "Gross Motor" },
  { key: "fineMotor", label: "Fine Motor" },
  { key: "language", label: "Language" },
  { key: "socialEmotional", label: "Social & Emotional" },
  { key: "cognitive", label: "Cognitive" },
];

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState<MilestoneCategory>("grossMotor");

  const milestones = categories[activeTab] ?? [];

  return (
    <div className="flex flex-col gap-6">
      {/* Tab bar -- horizontally scrollable on mobile */}
      <div
        className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Milestone categories"
      >
        <div className="flex min-w-max gap-1 rounded-xl bg-card-alt p-1">
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            const count = (categories[tab.key] ?? []).length;

            return (
              <button
                key={tab.key}
                role="tab"
                id={`tab-${tab.key}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center gap-1.5 whitespace-nowrap rounded-lg
                  px-4 py-2.5 text-sm font-medium
                  transition-all duration-150
                  ${
                    isActive
                      ? "bg-card text-primary shadow-sm"
                      : "text-muted hover:text-foreground hover:bg-card/50"
                  }
                `}
              >
                {tab.label}
                {count > 0 && (
                  <span
                    className={`
                      inline-flex h-5 min-w-5 items-center justify-center
                      rounded-full px-1 text-xs font-semibold
                      ${
                        isActive
                          ? "bg-primary-light text-primary"
                          : "bg-card-alt text-muted"
                      }
                    `}
                    aria-label={`${count} milestone${count !== 1 ? "s" : ""}`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab panel */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="flex flex-col gap-5"
      >
        {milestones.length > 0 ? (
          milestones.map((milestone) => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))
        ) : (
          <div className="card-alt py-10 text-center">
            <p className="text-muted">
              No milestones listed for this category at this age yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
