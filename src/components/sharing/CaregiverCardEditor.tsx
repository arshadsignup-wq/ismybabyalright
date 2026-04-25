"use client";

import { useState } from "react";
import type { CaregiverCard } from "@/data/sharing/types";

interface CaregiverCardEditorProps {
  initial?: CaregiverCard;
  babyName: string;
  birthDate: string;
  onSave: (card: CaregiverCard) => void;
  onCancel?: () => void;
}

export default function CaregiverCardEditor({
  initial,
  babyName,
  birthDate,
  onSave,
  onCancel,
}: CaregiverCardEditorProps) {
  const [allergies, setAllergies] = useState(initial?.allergies.join(", ") ?? "");
  const [medications, setMedications] = useState(initial?.medications.join(", ") ?? "");
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [pedName, setPedName] = useState(initial?.pediatrician?.name ?? "");
  const [pedPhone, setPedPhone] = useState(initial?.pediatrician?.phone ?? "");
  const [pedClinic, setPedClinic] = useState(initial?.pediatrician?.clinic ?? "");
  const [contacts, setContacts] = useState(
    initial?.emergencyContacts ?? [{ name: "", phone: "", relationship: "" }]
  );

  function updateContact(idx: number, field: string, value: string) {
    const updated = contacts.map((c, i) =>
      i === idx ? { ...c, [field]: value } : c
    );
    setContacts(updated);
  }

  function addContact() {
    setContacts([...contacts, { name: "", phone: "", relationship: "" }]);
  }

  function removeContact(idx: number) {
    setContacts(contacts.filter((_, i) => i !== idx));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const card: CaregiverCard = {
      babyName,
      birthDate,
      allergies: allergies
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean),
      medications: medications
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean),
      emergencyContacts: contacts.filter((c) => c.name.trim() && c.phone.trim()),
      pediatrician:
        pedName.trim() && pedPhone.trim()
          ? { name: pedName.trim(), phone: pedPhone.trim(), clinic: pedClinic.trim() || undefined }
          : undefined,
      notes: notes.trim(),
    };
    onSave(card);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="card-allergies" className="block text-sm font-semibold text-foreground mb-1.5">
          Allergies
        </label>
        <input
          id="card-allergies"
          type="text"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          placeholder="e.g. Dairy, Eggs (comma-separated)"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="card-meds" className="block text-sm font-semibold text-foreground mb-1.5">
          Current medications
        </label>
        <input
          id="card-meds"
          type="text"
          value={medications}
          onChange={(e) => setMedications(e.target.value)}
          placeholder="e.g. Vitamin D drops (comma-separated)"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Pediatrician */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-semibold text-foreground mb-1">Pediatrician</legend>
        <input
          type="text"
          value={pedName}
          onChange={(e) => setPedName(e.target.value)}
          placeholder="Doctor's name"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="tel"
          value={pedPhone}
          onChange={(e) => setPedPhone(e.target.value)}
          placeholder="Phone number"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          value={pedClinic}
          onChange={(e) => setPedClinic(e.target.value)}
          placeholder="Clinic name (optional)"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </fieldset>

      {/* Emergency contacts */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-semibold text-foreground mb-1">Emergency Contacts</legend>
        {contacts.map((contact, idx) => (
          <div key={idx} className="flex flex-col gap-2 p-3 rounded-lg bg-card-alt border border-card-border">
            <input
              type="text"
              value={contact.name}
              onChange={(e) => updateContact(idx, "name", e.target.value)}
              placeholder="Name"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => updateContact(idx, "phone", e.target.value)}
              placeholder="Phone"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              value={contact.relationship}
              onChange={(e) => updateContact(idx, "relationship", e.target.value)}
              placeholder="Relationship (e.g. Parent, Grandparent)"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {contacts.length > 1 && (
              <button
                type="button"
                onClick={() => removeContact(idx)}
                className="self-end text-xs text-concern hover:underline cursor-pointer"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addContact}
          className="self-start text-sm text-primary font-medium hover:underline cursor-pointer min-h-[44px] flex items-center"
        >
          + Add contact
        </button>
      </fieldset>

      <div>
        <label htmlFor="card-notes" className="block text-sm font-semibold text-foreground mb-1.5">
          Additional notes
        </label>
        <textarea
          id="card-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Anything else a caregiver should know..."
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary resize-y"
        />
      </div>

      <div className="flex gap-3">
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
          className="flex-1 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
        >
          Save Card
        </button>
      </div>
    </form>
  );
}
