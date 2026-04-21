"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ReferenceDot,
  type TooltipContentProps,
} from "recharts";
import type { GrowthData } from "@/data/growth/types";
import { calculatePercentile, getPercentileLabel } from "@/lib/growthPercentile";

interface GrowthChartProps {
  data: GrowthData;
  measurements: { ageMonths: number; value: number }[];
  measurementType: "weight" | "length" | "headCircumference";
  sex: "boy" | "girl";
}

const MEASUREMENT_LABELS: Record<string, string> = {
  weight: "Weight",
  length: "Length",
  headCircumference: "Head Circumference",
};

const MEASUREMENT_UNITS: Record<string, string> = {
  weight: "kg",
  length: "cm",
  headCircumference: "cm",
};

/**
 * Build an array of chart-ready data points from the WHO growth reference
 * curves. Each point includes all five percentile values plus the age.
 */
function buildCurveData(data: GrowthData, measurementType: string) {
  const points = data[measurementType as keyof GrowthData];
  return points.map((pt) => ({
    ageMonths: pt.ageMonths,
    p3: pt.p3,
    p15: pt.p15,
    p50: pt.p50,
    p85: pt.p85,
    p97: pt.p97,
  }));
}

function CustomTooltip({
  active,
  payload,
  label,
}: Partial<TooltipContentProps<number, string>>) {
  if (!active || !payload || payload.length === 0) return null;

  const ageMonths = label as number;
  const p50 = payload.find((p) => p.dataKey === "p50");

  return (
    <div className="card p-3 text-sm shadow-md max-w-[220px]">
      <p className="font-semibold text-foreground mb-1">
        Age: {ageMonths} {ageMonths === 1 ? "month" : "months"}
      </p>
      {p50 && (
        <p className="text-muted">
          50th percentile: {p50.value}
        </p>
      )}
      {payload
        .filter(
          (p) =>
            p.dataKey &&
            !["p3", "p15", "p50", "p85", "p97"].includes(
              String(p.dataKey)
            )
        )
        .map((p, i) => (
          <p key={i} className="text-primary font-medium">
            Measurement: {p.value}
          </p>
        ))}
    </div>
  );
}

export default function GrowthChart({
  data,
  measurements,
  measurementType,
  sex,
}: GrowthChartProps) {
  const curveData = buildCurveData(data, measurementType);
  const label = MEASUREMENT_LABELS[measurementType];
  const unit = MEASUREMENT_UNITS[measurementType];
  const referencePoints = data[measurementType as keyof GrowthData];

  // Compute Y-axis domain with some padding
  const allValues = curveData.flatMap((d) => [d.p3, d.p97]);
  const measurementValues = measurements.map((m) => m.value);
  const allVals = [...allValues, ...measurementValues];
  const yMin = Math.floor(Math.min(...allVals) * 0.9);
  const yMax = Math.ceil(Math.max(...allVals) * 1.05);

  // Color scheme based on sex
  const accentColor = sex === "boy" ? "#4a90d9" : "#d97ab5";
  const fillLight = sex === "boy" ? "rgba(74, 144, 217, 0.06)" : "rgba(217, 122, 181, 0.06)";
  const fillMedium = sex === "boy" ? "rgba(74, 144, 217, 0.12)" : "rgba(217, 122, 181, 0.12)";
  const lineLight = sex === "boy" ? "rgba(74, 144, 217, 0.3)" : "rgba(217, 122, 181, 0.3)";
  const lineMedium = sex === "boy" ? "rgba(74, 144, 217, 0.5)" : "rgba(217, 122, 181, 0.5)";

  return (
    <div
      role="img"
      aria-label={`WHO growth chart for ${sex === "boy" ? "boys" : "girls"} showing ${label.toLowerCase()} by age in months with ${measurements.length} measurement${measurements.length !== 1 ? "s" : ""} plotted`}
    >
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {label} for Age ({sex === "boy" ? "Boys" : "Girls"})
      </h3>
      <p className="text-sm text-muted mb-4">
        WHO Child Growth Standards, 0 to 36 months
      </p>

      <ResponsiveContainer width="100%" height={360}>
        <LineChart
          data={curveData}
          margin={{ top: 8, right: 12, bottom: 8, left: 4 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />

          <XAxis
            dataKey="ageMonths"
            type="number"
            domain={[0, 36]}
            ticks={[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]}
            tick={{ fontSize: 12, fill: "var(--color-muted)" }}
            label={{
              value: "Age (months)",
              position: "insideBottom",
              offset: -2,
              fontSize: 12,
              fill: "var(--color-muted)",
            }}
          />

          <YAxis
            domain={[yMin, yMax]}
            tick={{ fontSize: 12, fill: "var(--color-muted)" }}
            label={{
              value: `${label} (${unit})`,
              angle: -90,
              position: "insideLeft",
              offset: 10,
              fontSize: 12,
              fill: "var(--color-muted)",
            }}
            width={50}
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ fontSize: 12 }}
          />

          {/* Area fill between p3 and p97 (light) */}
          <Area
            dataKey="p97"
            stroke="none"
            fill={fillLight}
            fillOpacity={1}
            name="3rd-97th range"
            legendType="none"
            isAnimationActive={false}
          />
          <Area
            dataKey="p3"
            stroke="none"
            fill="var(--color-background)"
            fillOpacity={1}
            legendType="none"
            isAnimationActive={false}
          />

          {/* Area fill between p15 and p85 (medium) */}
          <Area
            dataKey="p85"
            stroke="none"
            fill={fillMedium}
            fillOpacity={1}
            name="15th-85th range"
            legendType="none"
            isAnimationActive={false}
          />
          <Area
            dataKey="p15"
            stroke="none"
            fill={fillLight}
            fillOpacity={1}
            legendType="none"
            isAnimationActive={false}
          />

          {/* Percentile lines */}
          <Line
            dataKey="p3"
            stroke={lineLight}
            strokeWidth={1}
            strokeDasharray="4 4"
            dot={false}
            name="3rd"
            isAnimationActive={false}
          />
          <Line
            dataKey="p15"
            stroke={lineMedium}
            strokeWidth={1}
            strokeDasharray="2 2"
            dot={false}
            name="15th"
            isAnimationActive={false}
          />
          <Line
            dataKey="p50"
            stroke={accentColor}
            strokeWidth={2}
            dot={false}
            name="50th"
            isAnimationActive={false}
          />
          <Line
            dataKey="p85"
            stroke={lineMedium}
            strokeWidth={1}
            strokeDasharray="2 2"
            dot={false}
            name="85th"
            isAnimationActive={false}
          />
          <Line
            dataKey="p97"
            stroke={lineLight}
            strokeWidth={1}
            strokeDasharray="4 4"
            dot={false}
            name="97th"
            isAnimationActive={false}
          />

          {/* User measurements plotted as reference dots */}
          {measurements.map((m, i) => {
            const percentile = calculatePercentile(
              m.value,
              m.ageMonths,
              referencePoints
            );
            return (
              <ReferenceDot
                key={`measurement-${i}`}
                x={m.ageMonths}
                y={m.value}
                r={6}
                fill="var(--color-primary)"
                stroke="var(--color-card)"
                strokeWidth={2}
                label={{
                  value: `${getPercentileLabel(percentile)}`,
                  position: "top",
                  fontSize: 10,
                  fill: "var(--color-foreground)",
                  offset: 10,
                }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>

      {/* Screen reader table of measurements */}
      {measurements.length > 0 && (
        <div className="sr-only">
          <table>
            <caption>Plotted measurements</caption>
            <thead>
              <tr>
                <th>Age (months)</th>
                <th>{label} ({unit})</th>
                <th>Percentile</th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((m, i) => {
                const p = calculatePercentile(
                  m.value,
                  m.ageMonths,
                  referencePoints
                );
                return (
                  <tr key={i}>
                    <td>{m.ageMonths}</td>
                    <td>{m.value}</td>
                    <td>{getPercentileLabel(p)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
