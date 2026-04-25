"use client";

import { useState } from "react";
import type { BabyProfile, Sex } from "@/data/tracker/types";
import { generateId } from "@/lib/tracker";

interface BabyProfileFormProps {
  initial?: BabyProfile;
  onSave: (profile: BabyProfile) => void;
  onCancel?: () => void;
}

export default function BabyProfileForm({
  initial,
  onSave,
  onCancel,
}: BabyProfileFormProps) {
  const [name, setName] = useState(initial?.name ?? "");
  const [birthDate, setBirthDate] = useState(initial?.birthDate ?? "");
  const [dueDate, setDueDate] = useState(initial?.dueDate ?? "");
  const [sex, setSex] = useState<Sex | "">(initial?.sex ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !birthDate) return;

    const profile: BabyProfile = {
      id: initial?.id ?? generateId(),
      name: name.trim(),
      birthDate,
      dueDate: dueDate || undefined,
      sex: sex || undefined,
      createdAt: initial?.createdAt ?? new Date().toISOString(),
    };
    onSave(profile);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="baby-name"
          className="block text-sm font-semibold text-foreground mb-1.5"
        >
          Baby&apos;s name
        </label>
        <input
          id="baby-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Alex"
          required
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="birth-date"
          className="block text-sm font-semibold text-foreground mb-1.5"
        >
          Date of birth
        </label>
        <input
          id="birth-date"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          max={today}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="due-date"
          className="block text-sm font-semibold text-foreground mb-1.5"
        >
          Original due date{" "}
          <span className="font-normal text-muted">(optional, for adjusted age)</span>
        </label>
        <input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="baby-sex"
          className="block text-sm font-semibold text-foreground mb-1.5"
        >
          Sex{" "}
          <span className="font-normal text-muted">(optional, for growth charts)</span>
        </label>
        <select
          id="baby-sex"
          value={sex}
          onChange={(e) => setSex(e.target.value as Sex | "")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Prefer not to say</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        All data stays on your device. No account needed, nothing sent to any server.
      </p>

      <div className="flex gap-3 pt-1">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={!name.trim() || !birthDate}
          className="flex-1 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {initial ? "Save Changes" : "Get Started"}
        </button>
      </div>
    </form>
  );
}
