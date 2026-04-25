"use client";

import { cdcVaccineSchedule } from "@/data/vaccines/cdc-schedule";
import type { VaccineRecord } from "@/data/vaccines/types";
import VaccineCard from "./VaccineCard";

interface VaccineScheduleProps {
  ageMonths: number;
  records: VaccineRecord[];
  onToggleDose: (vaccineId: string, doseNumber: number) => void;
}

export default function VaccineSchedule({
  ageMonths,
  records,
  onToggleDose,
}: VaccineScheduleProps) {
  // Group vaccines by when they're due relative to baby's age
  const upcoming = cdcVaccineSchedule
    .map((vaccine) => {
      const nextDue = vaccine.doses.find((d) => {
        const isGiven = records.some(
          (r) => r.vaccineId === vaccine.id && r.doseNumber === d.doseNumber
        );
        return !isGiven && d.ageMonths <= ageMonths + 3;
      });
      return { vaccine, nextDue };
    })
    .filter((v) => v.nextDue);

  const completed = cdcVaccineSchedule.filter((vaccine) =>
    vaccine.doses.every((d) =>
      records.some(
        (r) => r.vaccineId === vaccine.id && r.doseNumber === d.doseNumber
      )
    )
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Upcoming / due */}
      {upcoming.length > 0 && (
        <section>
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
            Due or Upcoming
          </h3>
          <div className="flex flex-col gap-3">
            {upcoming.map(({ vaccine, nextDue }) => (
              <VaccineCard
                key={vaccine.id}
                vaccine={vaccine}
                records={records.filter((r) => r.vaccineId === vaccine.id)}
                highlightDose={nextDue?.doseNumber}
                ageMonths={ageMonths}
                onToggleDose={onToggleDose}
              />
            ))}
          </div>
        </section>
      )}

      {/* All vaccines */}
      <section>
        <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
          All Vaccines ({completed.length}/{cdcVaccineSchedule.length} complete)
        </h3>
        <div className="flex flex-col gap-3">
          {cdcVaccineSchedule.map((vaccine) => (
            <VaccineCard
              key={vaccine.id}
              vaccine={vaccine}
              records={records.filter((r) => r.vaccineId === vaccine.id)}
              ageMonths={ageMonths}
              onToggleDose={onToggleDose}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
