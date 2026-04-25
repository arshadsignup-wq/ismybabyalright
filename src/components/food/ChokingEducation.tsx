import {
  gaggingVsChoking,
  highRiskFoods,
  safeEatingTips,
} from "@/data/food/choking-education";

export default function ChokingEducation() {
  return (
    <div className="flex flex-col gap-5">
      {/* Gagging vs Choking */}
      <div className="grid gap-3 sm:grid-cols-2">
        {gaggingVsChoking.map((info) => (
          <div
            key={info.title}
            className={`p-4 rounded-xl border-2 ${
              info.title.includes("Normal")
                ? "border-safe-border bg-safe-light"
                : "border-concern-border bg-concern-light"
            }`}
          >
            <h3
              className={`text-sm font-bold mb-2 ${
                info.title.includes("Normal")
                  ? "text-safe-foreground"
                  : "text-concern-foreground"
              }`}
            >
              {info.title}
            </h3>
            <p className="text-xs text-foreground mb-2">{info.description}</p>
            <ul className="flex flex-col gap-1">
              {info.items.map((item, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground flex items-start gap-1.5"
                >
                  <span
                    className={`flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full ${
                      info.title.includes("Normal")
                        ? "bg-safe"
                        : "bg-concern"
                    }`}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* High-risk foods */}
      <div className="card p-4">
        <h3 className="text-sm font-bold text-foreground mb-2">
          High-Risk Choking Foods
        </h3>
        <ul className="flex flex-col gap-1.5">
          {highRiskFoods.map((food, i) => (
            <li
              key={i}
              className="text-sm text-foreground flex items-start gap-2"
            >
              <span
                className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern"
                aria-hidden="true"
              />
              {food}
            </li>
          ))}
        </ul>
      </div>

      {/* Safe eating tips */}
      <div className="card-alt p-4">
        <h3 className="text-sm font-bold text-foreground mb-2">
          Safe Eating Tips
        </h3>
        <ul className="flex flex-col gap-1.5">
          {safeEatingTips.map((tip, i) => (
            <li
              key={i}
              className="text-sm text-foreground flex items-start gap-2"
            >
              <span
                className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-safe"
                aria-hidden="true"
              />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
