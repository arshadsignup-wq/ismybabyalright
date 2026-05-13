"use client";

import { getEncouragement } from "@/data/encouragement";

interface AgeEncouragementProps {
  ageMonths: number;
}

export default function AgeEncouragement({ ageMonths }: AgeEncouragementProps) {
  const message = getEncouragement(ageMonths);

  return (
    <div className="rounded-xl bg-[#FFF0E6] py-3 px-4">
      <p className="text-sm italic text-foreground/80 leading-relaxed">
        {message}
      </p>
    </div>
  );
}
