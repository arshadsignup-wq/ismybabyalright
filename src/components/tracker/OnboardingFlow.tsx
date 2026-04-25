"use client";

import type { BabyProfile } from "@/data/tracker/types";
import BabyProfileForm from "./BabyProfileForm";

interface OnboardingFlowProps {
  onComplete: (profile: BabyProfile) => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  return (
    <section
      className="mx-auto max-w-md px-4 py-10 sm:py-14"
      aria-labelledby="onboarding-heading"
    >
      <div className="card p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 id="onboarding-heading" className="text-foreground">
            Welcome to your baby tracker
          </h2>
          <p className="text-muted mt-2 leading-relaxed">
            Track feeds, sleep, and diapers  -  all free, all private, all on your
            device. No account needed.
          </p>
        </div>

        <BabyProfileForm onSave={onComplete} />
      </div>
    </section>
  );
}
