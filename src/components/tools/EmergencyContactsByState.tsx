"use client";

import { useState, useMemo } from "react";
import {
  nationalContacts,
  stateEmergencyContacts,
} from "@/data/emergency-contacts/states";
import type { StateEmergencyContact } from "@/data/emergency-contacts/states";

function PhoneLink({
  phone,
  className,
}: {
  phone: string;
  className?: string;
}) {
  const telHref =
    phone === "741741" ? "sms:741741&body=HOME" : `tel:${phone}`;
  return (
    <a href={telHref} className={className ?? "text-primary font-bold underline"}>
      {phone === "741741" ? "Text HOME to 741741" : phone}
    </a>
  );
}

function NationalContactsSection() {
  return (
    <section className="mb-10" aria-labelledby="national-contacts-heading">
      <h2
        id="national-contacts-heading"
        className="text-lg font-bold text-foreground mb-4"
      >
        National Emergency Numbers
      </h2>

      {/* 911 callout */}
      <div className="rounded-2xl border-2 border-red-400 bg-red-50 dark:bg-red-950/30 p-5 sm:p-6 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white text-lg font-black flex-shrink-0"
              aria-hidden="true"
            >
              911
            </span>
            <div>
              <p className="text-base font-bold text-foreground">
                Emergency Services
              </p>
              <p className="text-sm text-muted">
                Life-threatening emergencies &mdash; not breathing, unconscious,
                seizure, severe injury
              </p>
            </div>
          </div>
          <a
            href="tel:911"
            className="sm:ml-auto inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 text-lg font-bold text-white hover:bg-red-600 transition-colors min-h-[48px]"
          >
            Call 911
          </a>
        </div>
      </div>

      {/* Poison Control callout */}
      <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 dark:bg-orange-950/30 p-5 sm:p-6 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <div>
              <p className="text-base font-bold text-foreground">
                Poison Control
              </p>
              <p className="text-sm text-muted">
                Free, confidential expert advice for any poison emergency
              </p>
            </div>
          </div>
          <a
            href="tel:1-800-222-1222"
            className="sm:ml-auto inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-lg font-bold text-white hover:bg-orange-600 transition-colors min-h-[48px]"
          >
            1-800-222-1222
          </a>
        </div>
      </div>

      {/* Other national contacts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {nationalContacts
          .filter((c) => c.phone !== "911" && c.phone !== "1-800-222-1222")
          .map((contact) => (
            <div
              key={contact.phone}
              className="rounded-2xl border border-card-border bg-card p-4 sm:p-5"
            >
              <p className="text-sm font-bold text-foreground mb-1">
                {contact.name}
              </p>
              <PhoneLink
                phone={contact.phone}
                className="text-base font-bold text-primary underline"
              />
              <p className="text-xs text-muted mt-2 leading-relaxed">
                {contact.description}
              </p>
              <p className="text-xs text-muted mt-1">
                Available: {contact.available}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}

function StateContactCard({ contact }: { contact: StateEmergencyContact }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {contact.state} Emergency Contacts
        </h3>
        <p className="text-sm text-muted mb-4">
          {contact.state} ({contact.stateAbbr})
        </p>

        <div className="space-y-4">
          {/* Poison Control */}
          <div className="rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/20 p-4">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
              Poison Control
            </p>
            <p className="text-sm font-semibold text-foreground mb-1">
              {contact.poisonControl.name}
            </p>
            <PhoneLink
              phone={contact.poisonControl.phone}
              className="text-lg font-bold text-primary underline"
            />
          </div>

          {/* Child Abuse Hotline */}
          <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-4">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
              Child Abuse Hotline
            </p>
            <p className="text-sm font-semibold text-foreground mb-1">
              {contact.childAbuseHotline.name}
            </p>
            <PhoneLink
              phone={contact.childAbuseHotline.phone}
              className="text-lg font-bold text-primary underline"
            />
          </div>

          {/* Children's Medical Hotline */}
          {contact.childrensMedicalHotline && (
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20 p-4">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                Children&apos;s Medical Hotline
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">
                {contact.childrensMedicalHotline.name}
              </p>
              <PhoneLink
                phone={contact.childrensMedicalHotline.phone}
                className="text-lg font-bold text-primary underline"
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Resources */}
      {contact.additionalResources && contact.additionalResources.length > 0 && (
        <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
          <h4 className="text-sm font-bold text-foreground mb-3">
            Additional Resources in {contact.state}
          </h4>
          <div className="space-y-3">
            {contact.additionalResources.map((resource, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 border-b border-card-border pb-3 last:border-b-0 last:pb-0"
              >
                <p className="text-sm font-semibold text-foreground">
                  {resource.name}
                </p>
                {resource.phone && (
                  <PhoneLink
                    phone={resource.phone}
                    className="text-sm text-primary font-medium underline"
                  />
                )}
                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline break-all"
                  >
                    {resource.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function EmergencyContactsByState() {
  const [selectedState, setSelectedState] = useState<string>("");

  const selectedContact = useMemo(() => {
    if (!selectedState) return null;
    return (
      stateEmergencyContacts.find((s) => s.stateAbbr === selectedState) ?? null
    );
  }, [selectedState]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Emergency Contacts for Parents
        </h1>
        <p className="mt-2 text-muted">
          Important phone numbers every parent should have. Select your state to
          find local poison control, child protective services, children&apos;s
          hospitals, and more.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-2xl border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950/30 p-4">
        <p className="text-sm text-foreground font-semibold">
          If your child is in immediate danger, call 911 right now.
        </p>
        <p className="text-xs text-muted mt-1">
          This page provides reference numbers for emergencies and crisis
          situations. It is not a substitute for professional medical advice.
        </p>
      </div>

      {/* National contacts */}
      <NationalContactsSection />

      {/* State selector */}
      <section className="mb-10" aria-labelledby="state-contacts-heading">
        <h2
          id="state-contacts-heading"
          className="text-lg font-bold text-foreground mb-4"
        >
          Find Your State&apos;s Emergency Contacts
        </h2>

        <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 mb-6">
          <label
            htmlFor="state-select"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Select your state
          </label>
          <select
            id="state-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full max-w-sm px-4 py-2.5 min-h-[44px] rounded-xl border border-card-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="">Choose a state...</option>
            {stateEmergencyContacts.map((s) => (
              <option key={s.stateAbbr} value={s.stateAbbr}>
                {s.state}
              </option>
            ))}
          </select>
        </div>

        {selectedContact && <StateContactCard contact={selectedContact} />}

        {!selectedContact && selectedState === "" && (
          <p className="text-sm text-muted py-4">
            Select a state above to see local emergency contacts, children&apos;s
            hospitals, and state-specific resources.
          </p>
        )}
      </section>

      {/* Tips section */}
      <section aria-labelledby="tips-heading">
        <h2
          id="tips-heading"
          className="text-lg font-bold text-foreground mb-4"
        >
          When to Call for Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-5">
            <p className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">
              Call 911 immediately if your child:
            </p>
            <ul className="text-sm text-muted space-y-1.5">
              <li>Is not breathing or is turning blue</li>
              <li>Is unconscious or unresponsive</li>
              <li>Is having a seizure</li>
              <li>Has a severe allergic reaction (swelling, difficulty breathing)</li>
              <li>Has a serious head injury or broken bone</li>
              <li>Has been in a drowning incident</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-5">
            <p className="text-sm font-bold text-orange-600 dark:text-orange-400 mb-2">
              Call Poison Control (1-800-222-1222) if your child:
            </p>
            <ul className="text-sm text-muted space-y-1.5">
              <li>Swallowed medicine, vitamins, or supplements</li>
              <li>Ingested a household chemical or cleaning product</li>
              <li>Ate a plant, berry, or mushroom you cannot identify</li>
              <li>Got chemicals in their eyes or on their skin</li>
              <li>Inhaled fumes from a chemical product</li>
              <li>Swallowed a battery or magnet</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
