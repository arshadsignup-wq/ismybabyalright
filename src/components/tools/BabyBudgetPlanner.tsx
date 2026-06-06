"use client";

import { useState } from "react";
import {
  BUDGET_CATEGORIES,
  savingsTips,
  getItemCost,
  adjustForFeedingMethod,
  type BudgetLevel,
  type FeedingMethod,
  type BudgetCategory,
} from "@/data/baby-budget/data";

const LEVEL_LABELS: { value: BudgetLevel; label: string }[] = [
  { value: "low", label: "Budget" },
  { value: "mid", label: "Mid-Range" },
  { value: "high", label: "Premium" },
];

const FEEDING_LABELS: { value: FeedingMethod; label: string }[] = [
  { value: "breastfeeding", label: "Breastfeeding" },
  { value: "formula", label: "Formula" },
  { value: "combo", label: "Combo" },
];

export default function BabyBudgetPlanner() {
  const [globalLevel, setGlobalLevel] = useState<BudgetLevel>("mid");
  const [feedingMethod, setFeedingMethod] = useState<FeedingMethod>("combo");
  const [categoryOverrides, setCategoryOverrides] = useState<
    Record<string, BudgetLevel | null>
  >({});
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showOptional, setShowOptional] = useState(true);

  function getCategoryLevel(categoryId: string): BudgetLevel {
    return categoryOverrides[categoryId] ?? globalLevel;
  }

  function setCategoryLevel(categoryId: string, level: BudgetLevel | null) {
    setCategoryOverrides((prev) => ({ ...prev, [categoryId]: level }));
  }

  function getCategoryCost(category: BudgetCategory): number {
    const level = getCategoryLevel(category.id);
    return category.subcategories.reduce((sum, item) => {
      if (!showOptional && item.isOptional) return sum;
      if (category.id === "feeding") {
        return sum + adjustForFeedingMethod(item, feedingMethod, level);
      }
      return sum + getItemCost(item, level);
    }, 0);
  }

  const monthlyTotal = BUDGET_CATEGORIES.reduce(
    (sum, cat) => sum + getCategoryCost(cat),
    0
  );
  const yearlyTotal = monthlyTotal * 12;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Budget Planner
        </h1>
        <p className="mt-2 text-muted">
          Estimate your first-year baby costs by category. Choose a global
          budget level, adjust individual categories, and see how feeding
          choices affect your bottom line.
        </p>
      </div>

      {/* Global Controls */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        {/* Budget Level Toggle */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Budget Level
          </label>
          <div className="flex rounded-xl border border-card-border overflow-hidden">
            {LEVEL_LABELS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setGlobalLevel(opt.value);
                  setCategoryOverrides({});
                }}
                className={`flex-1 px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                  globalLevel === opt.value
                    ? "bg-primary text-white"
                    : "bg-background text-muted hover:bg-primary-light/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-muted">
            {globalLevel === "low"
              ? "Budget-conscious: secondhand, store-brand, DIY approach"
              : globalLevel === "mid"
                ? "Mid-range: mix of new name-brand and value picks"
                : "Premium: top brands, new everything, full-service options"}
          </p>
        </div>

        {/* Feeding Method */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Feeding Method
          </label>
          <div className="flex rounded-xl border border-card-border overflow-hidden">
            {FEEDING_LABELS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFeedingMethod(opt.value)}
                className={`flex-1 px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                  feedingMethod === opt.value
                    ? "bg-primary text-white"
                    : "bg-background text-muted hover:bg-primary-light/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-muted">
            {feedingMethod === "breastfeeding"
              ? "Formula costs removed; nursing supply costs included"
              : feedingMethod === "formula"
                ? "Full formula costs; nursing supply costs removed"
                : "Half formula costs plus nursing supplies"}
          </p>
        </div>

        {/* Optional Items Toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showOptional}
            onChange={(e) => setShowOptional(e.target.checked)}
            className="h-4 w-4 rounded accent-primary"
          />
          <span className="text-sm font-medium text-foreground">
            Include optional items
          </span>
          <span className="text-xs text-muted">(shoes, decor, swing, etc.)</span>
        </label>
      </div>

      {/* Monthly / Yearly Summary */}
      <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Estimated Totals
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="text-center">
            <p className="text-xs font-semibold text-muted uppercase">
              Monthly
            </p>
            <p className="text-2xl font-extrabold text-primary">
              ${monthlyTotal.toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-muted uppercase">
              First Year
            </p>
            <p className="text-2xl font-extrabold text-primary">
              ${yearlyTotal.toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted">
          Based on{" "}
          {globalLevel === "low"
            ? "budget"
            : globalLevel === "mid"
              ? "mid-range"
              : "premium"}{" "}
          estimates with{" "}
          {feedingMethod === "breastfeeding"
            ? "breastfeeding"
            : feedingMethod === "formula"
              ? "formula feeding"
              : "combination feeding"}
          .{" "}
          {!showOptional && "Optional items excluded."}
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-foreground">
          Category Breakdown
        </h2>

        {BUDGET_CATEGORIES.map((category) => {
          const catLevel = getCategoryLevel(category.id);
          const catCost = getCategoryCost(category);
          const isExpanded = expandedCategory === category.id;
          const percentage =
            monthlyTotal > 0 ? Math.round((catCost / monthlyTotal) * 100) : 0;

          return (
            <div
              key={category.id}
              className="rounded-2xl border border-card-border bg-card overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() =>
                  setExpandedCategory(isExpanded ? null : category.id)
                }
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-primary-light/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {category.emoji}
                  </span>
                  <div>
                    <p className="text-base font-bold text-foreground">
                      {category.name}
                    </p>
                    <p className="text-xs text-muted">
                      {category.subcategories.length} items &middot;{" "}
                      {percentage}% of total
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-primary tabular-nums">
                    ${catCost.toLocaleString()}/mo
                  </span>
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
                    className={`text-muted transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-4">
                  {/* Category-level override */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-muted">
                      Override budget level:
                    </span>
                    {LEVEL_LABELS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() =>
                          setCategoryLevel(
                            category.id,
                            catLevel === opt.value &&
                              categoryOverrides[category.id] != null
                              ? null
                              : opt.value
                          )
                        }
                        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                          catLevel === opt.value
                            ? "bg-primary text-white"
                            : "bg-background text-muted hover:bg-primary-light/50 border border-card-border"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                    {categoryOverrides[category.id] != null && (
                      <button
                        onClick={() => setCategoryLevel(category.id, null)}
                        className="text-xs text-muted underline cursor-pointer hover:text-foreground"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  {/* Item list */}
                  <div className="space-y-2">
                    {category.subcategories.map((item) => {
                      if (!showOptional && item.isOptional) return null;

                      let itemCost: number;
                      if (category.id === "feeding") {
                        itemCost = adjustForFeedingMethod(
                          item,
                          feedingMethod,
                          catLevel
                        );
                      } else {
                        itemCost = getItemCost(item, catLevel);
                      }

                      return (
                        <div
                          key={item.id}
                          className="flex items-start justify-between gap-3 p-3 rounded-xl bg-background"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-foreground">
                                {item.name}
                              </p>
                              {item.isOptional && (
                                <span className="text-xs font-semibold text-muted bg-card px-1.5 py-0.5 rounded">
                                  Optional
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted mt-0.5">
                              {item.notes}
                            </p>
                            {item.alternativeTip && (
                              <p className="text-xs text-primary mt-1">
                                Tip: {item.alternativeTip}
                              </p>
                            )}
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-bold text-foreground tabular-nums">
                              {itemCost === 0 ? (
                                <span className="text-green-600 dark:text-green-400">
                                  $0
                                </span>
                              ) : (
                                `$${itemCost}`
                              )}
                            </p>
                            <p className="text-xs text-muted">/mo</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Category subtotal */}
                  <div className="flex justify-between items-center pt-2 border-t border-card-border">
                    <p className="text-sm font-semibold text-foreground">
                      {category.name} Subtotal
                    </p>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary tabular-nums">
                        ${catCost.toLocaleString()}/mo
                      </p>
                      <p className="text-xs text-muted tabular-nums">
                        ${(catCost * 12).toLocaleString()}/yr
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Cost Comparison Bar Chart */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Spending by Category
        </h2>
        <div className="space-y-3">
          {BUDGET_CATEGORIES.map((category) => {
            const catCost = getCategoryCost(category);
            const maxCost = Math.max(
              ...BUDGET_CATEGORIES.map((c) => getCategoryCost(c))
            );
            const barWidth =
              maxCost > 0 ? Math.max(2, (catCost / maxCost) * 100) : 0;

            return (
              <div key={category.id} className="flex items-center gap-3">
                <span className="text-sm w-24 shrink-0 truncate text-foreground font-medium">
                  {category.emoji} {category.name}
                </span>
                <div className="flex-1 h-6 rounded-full bg-background overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/80 transition-all duration-300"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-foreground tabular-nums w-16 text-right">
                  ${catCost.toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Savings Tips */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Money-Saving Tips
        </h2>
        <div className="space-y-3">
          {savingsTips.map((tip, i) => (
            <div
              key={i}
              className="border-b border-card-border/50 pb-3 last:border-0 last:pb-0"
            >
              <p className="text-sm font-bold text-foreground">{tip.title}</p>
              <p className="text-sm text-muted mt-1">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-500/40 dark:bg-amber-950/30">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          These are estimates based on national averages for 2024. Actual costs
          vary significantly by region, lifestyle, and individual choices.
          Childcare costs, in particular, can differ dramatically by location.
          This tool is for planning purposes only.
        </p>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.usda.gov/media/blog/2017/01/13/cost-raising-child"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              USDA - Cost of Raising a Child
            </a>
          </li>
          <li>
            <a
              href="https://www.babycenter.com/baby/baby-gear/baby-costs-calculator_1199776"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              BabyCenter - Cost of Baby Calculator
            </a>
          </li>
          <li>
            <a
              href="https://www.nerdwallet.com/article/finance/how-much-does-a-baby-cost"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              NerdWallet - How Much Does a Baby Cost?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
