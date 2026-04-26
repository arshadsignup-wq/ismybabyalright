"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

interface EmergencyInfo {
  babyName: string;
  dateOfBirth: string;
  bloodType: string;
  allergies: string[];
  conditions: string[];
  medications: Medication[];
  pediatricianName: string;
  pediatricianPhone: string;
  pediatricianAddress: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  insuranceGroupNumber: string;
  emergencyContacts: EmergencyContact[];
}

const STORAGE_KEY = "imba_emergency_info";

const BLOOD_TYPES = [
  "Unknown",
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

function getDefaultInfo(): EmergencyInfo {
  return {
    babyName: "",
    dateOfBirth: "",
    bloodType: "Unknown",
    allergies: [],
    conditions: [],
    medications: [],
    pediatricianName: "",
    pediatricianPhone: "",
    pediatricianAddress: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    insuranceGroupNumber: "",
    emergencyContacts: [],
  };
}

function loadInfo(): EmergencyInfo {
  if (typeof window === "undefined") return getDefaultInfo();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultInfo();
    return { ...getDefaultInfo(), ...JSON.parse(raw) };
  } catch {
    return getDefaultInfo();
  }
}

function saveInfo(info: EmergencyInfo): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits[0] === "1") {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}

function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

function buildSummaryText(info: EmergencyInfo): string {
  const lines: string[] = [];
  lines.push("EMERGENCY INFO SUMMARY");
  lines.push("======================");
  lines.push("");

  if (info.babyName) lines.push(`Baby: ${info.babyName}`);
  if (info.dateOfBirth) lines.push(`Date of Birth: ${info.dateOfBirth}`);
  if (info.bloodType && info.bloodType !== "Unknown")
    lines.push(`Blood Type: ${info.bloodType}`);
  lines.push("");

  if (info.allergies.length > 0) {
    lines.push("ALLERGIES:");
    info.allergies.forEach((a) => lines.push(`  - ${a}`));
    lines.push("");
  }

  if (info.conditions.length > 0) {
    lines.push("MEDICAL CONDITIONS:");
    info.conditions.forEach((c) => lines.push(`  - ${c}`));
    lines.push("");
  }

  if (info.medications.length > 0) {
    lines.push("MEDICATIONS:");
    info.medications.forEach((m) => {
      lines.push(`  - ${m.name} | ${m.dosage} | ${m.frequency}`);
    });
    lines.push("");
  }

  if (info.pediatricianName || info.pediatricianPhone) {
    lines.push("PEDIATRICIAN:");
    if (info.pediatricianName) lines.push(`  Name: ${info.pediatricianName}`);
    if (info.pediatricianPhone)
      lines.push(`  Phone: ${info.pediatricianPhone}`);
    if (info.pediatricianAddress)
      lines.push(`  Address: ${info.pediatricianAddress}`);
    lines.push("");
  }

  if (
    info.insuranceProvider ||
    info.insurancePolicyNumber ||
    info.insuranceGroupNumber
  ) {
    lines.push("INSURANCE:");
    if (info.insuranceProvider)
      lines.push(`  Provider: ${info.insuranceProvider}`);
    if (info.insurancePolicyNumber)
      lines.push(`  Policy #: ${info.insurancePolicyNumber}`);
    if (info.insuranceGroupNumber)
      lines.push(`  Group #: ${info.insuranceGroupNumber}`);
    lines.push("");
  }

  if (info.emergencyContacts.length > 0) {
    lines.push("EMERGENCY CONTACTS:");
    info.emergencyContacts.forEach((c) => {
      lines.push(`  - ${c.name} (${c.relationship}) - ${c.phone}`);
    });
    lines.push("");
  }

  lines.push("---");
  lines.push("Generated from ismybabyalright.com Emergency Info Vault");

  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      {...iconProps}
      width={16}
      height={16}
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps} width={14} height={14} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg {...iconProps} width={16} height={16} aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg {...iconProps} width={14} height={14} aria-hidden="true">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg {...iconProps} width={16} height={16} aria-hidden="true">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg {...iconProps} width={16} height={16} aria-hidden="true">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg {...iconProps} width={20} height={20} aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper with collapsible header                            */
/* ------------------------------------------------------------------ */

function Section({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="bg-white rounded-xl border border-[#E8E2D9] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 min-h-[52px] text-left cursor-pointer hover:bg-[#FBF8F3] transition-colors"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-[#1B2838]">{title}</span>
        <ChevronIcon open={open} />
      </button>
      {open && <div className="px-5 pb-5 pt-1">{children}</div>}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Form field helpers                                                 */
/* ------------------------------------------------------------------ */

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-[#64748B] mb-1"
    >
      {children}
    </label>
  );
}

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-[#E2DDD5] bg-white text-[#1B2838] text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] placeholder:text-[#94a3b8]";

const selectClasses =
  "w-full px-4 py-3 rounded-lg border border-[#E2DDD5] bg-white text-[#1B2838] text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]";

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function EmergencyInfoForm() {
  const [info, setInfo] = useState<EmergencyInfo>(getDefaultInfo);
  const [loaded, setLoaded] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [newAllergy, setNewAllergy] = useState("");
  const [newCondition, setNewCondition] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    setInfo(loadInfo());
    setLoaded(true);
  }, []);

  // Auto-save with debounce
  const persistInfo = useCallback((updated: EmergencyInfo) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      saveInfo(updated);
    }, 400);
  }, []);

  function update(patch: Partial<EmergencyInfo>) {
    setInfo((prev) => {
      const next = { ...prev, ...patch };
      persistInfo(next);
      return next;
    });
  }

  // --- Allergies ---

  function addAllergy() {
    const value = newAllergy.trim();
    if (!value) return;
    update({ allergies: [...info.allergies, value] });
    setNewAllergy("");
  }

  function removeAllergy(index: number) {
    update({ allergies: info.allergies.filter((_, i) => i !== index) });
  }

  // --- Conditions ---

  function addCondition() {
    const value = newCondition.trim();
    if (!value) return;
    update({ conditions: [...info.conditions, value] });
    setNewCondition("");
  }

  function removeCondition(index: number) {
    update({ conditions: info.conditions.filter((_, i) => i !== index) });
  }

  // --- Medications ---

  function addMedication() {
    update({
      medications: [
        ...info.medications,
        { name: "", dosage: "", frequency: "" },
      ],
    });
  }

  function updateMedication(
    index: number,
    field: keyof Medication,
    value: string
  ) {
    const updated = info.medications.map((m, i) =>
      i === index ? { ...m, [field]: value } : m
    );
    update({ medications: updated });
  }

  function removeMedication(index: number) {
    update({ medications: info.medications.filter((_, i) => i !== index) });
  }

  // --- Emergency Contacts ---

  function addContact() {
    if (info.emergencyContacts.length >= 3) return;
    update({
      emergencyContacts: [
        ...info.emergencyContacts,
        { name: "", relationship: "", phone: "" },
      ],
    });
  }

  function updateContact(
    index: number,
    field: keyof EmergencyContact,
    value: string
  ) {
    const updated = info.emergencyContacts.map((c, i) =>
      i === index ? { ...c, [field]: value } : c
    );
    update({ emergencyContacts: updated });
  }

  function removeContact(index: number) {
    update({
      emergencyContacts: info.emergencyContacts.filter((_, i) => i !== index),
    });
  }

  // --- Copy & Print ---

  async function copySummary() {
    const text = buildSummaryText(info);
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2500);
    }
  }

  function printSummary() {
    window.print();
  }

  // Don't render form until data is loaded from localStorage
  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-3 border-[#0D9488] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const hasAnyInfo =
    info.babyName ||
    info.allergies.length > 0 ||
    info.pediatricianPhone ||
    info.emergencyContacts.length > 0;

  return (
    <div className="flex flex-col gap-5">
      {/* ============================================================ */}
      {/*  Quick-access emergency card                                  */}
      {/* ============================================================ */}
      {hasAnyInfo && (
        <div className="rounded-xl border-2 border-[#F07167] bg-[#FEF0EE] p-5 print:border-[#F07167]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#F07167]">
              <AlertIcon />
            </span>
            <h2 className="text-base font-bold text-[#9B2C2C]">
              Quick Emergency Card
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {info.babyName && (
              <div>
                <span className="font-semibold text-[#9B2C2C]">Baby: </span>
                <span className="text-[#1B2838]">{info.babyName}</span>
              </div>
            )}
            {info.bloodType && info.bloodType !== "Unknown" && (
              <div>
                <span className="font-semibold text-[#9B2C2C]">
                  Blood Type:{" "}
                </span>
                <span className="text-[#1B2838]">{info.bloodType}</span>
              </div>
            )}
            {info.dateOfBirth && (
              <div>
                <span className="font-semibold text-[#9B2C2C]">DOB: </span>
                <span className="text-[#1B2838]">{info.dateOfBirth}</span>
              </div>
            )}
          </div>

          {info.allergies.length > 0 && (
            <div className="mt-3">
              <span className="text-sm font-semibold text-[#9B2C2C]">
                Allergies:{" "}
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {info.allergies.map((a, i) => (
                  <span
                    key={i}
                    className="inline-block px-2.5 py-1 rounded-full bg-[#F07167] text-white text-xs font-bold"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {info.conditions.length > 0 && (
            <div className="mt-3">
              <span className="text-sm font-semibold text-[#9B2C2C]">
                Conditions:{" "}
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {info.conditions.map((c, i) => (
                  <span
                    key={i}
                    className="inline-block px-2.5 py-1 rounded-full bg-[#9B2C2C] text-white text-xs font-bold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {info.medications.length > 0 && (
            <div className="mt-3">
              <span className="text-sm font-semibold text-[#9B2C2C]">
                Medications:{" "}
              </span>
              <ul className="mt-1 text-sm text-[#1B2838]">
                {info.medications
                  .filter((m) => m.name)
                  .map((m, i) => (
                    <li key={i}>
                      {m.name}
                      {m.dosage ? ` - ${m.dosage}` : ""}
                      {m.frequency ? ` - ${m.frequency}` : ""}
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {info.pediatricianPhone && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm font-semibold text-[#9B2C2C]">
                Pediatrician:{" "}
              </span>
              <a
                href={phoneHref(info.pediatricianPhone)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D9488] hover:text-[#0A7A70] no-underline"
              >
                <PhoneIcon />
                {info.pediatricianName
                  ? `${info.pediatricianName} - ${formatPhone(info.pediatricianPhone)}`
                  : formatPhone(info.pediatricianPhone)}
              </a>
            </div>
          )}

          {info.emergencyContacts.length > 0 && (
            <div className="mt-3">
              <span className="text-sm font-semibold text-[#9B2C2C]">
                Emergency Contacts:{" "}
              </span>
              <div className="flex flex-col gap-1 mt-1">
                {info.emergencyContacts
                  .filter((c) => c.name || c.phone)
                  .map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-[#1B2838]">
                        {c.name}
                        {c.relationship ? ` (${c.relationship})` : ""}
                      </span>
                      {c.phone && (
                        <a
                          href={phoneHref(c.phone)}
                          className="inline-flex items-center gap-1 text-[#0D9488] font-bold hover:text-[#0A7A70] no-underline"
                        >
                          <PhoneIcon />
                          {formatPhone(c.phone)}
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {info.insuranceProvider && (
            <div className="mt-3">
              <span className="text-sm font-semibold text-[#9B2C2C]">
                Insurance:{" "}
              </span>
              <span className="text-sm text-[#1B2838]">
                {info.insuranceProvider}
                {info.insurancePolicyNumber
                  ? ` - Policy: ${info.insurancePolicyNumber}`
                  : ""}
                {info.insuranceGroupNumber
                  ? ` - Group: ${info.insuranceGroupNumber}`
                  : ""}
              </span>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/*  Action buttons                                               */}
      {/* ============================================================ */}
      {hasAnyInfo && (
        <div className="flex gap-3 no-print" data-print-hide>
          <button
            type="button"
            onClick={copySummary}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0D9488] text-white font-semibold text-sm hover:bg-[#0A7A70] transition-colors cursor-pointer"
          >
            <ClipboardIcon />
            {copyFeedback ? "Copied!" : "Copy Summary"}
          </button>
          <button
            type="button"
            onClick={printSummary}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#E2DDD5] bg-white text-[#1B2838] font-semibold text-sm hover:bg-[#FBF8F3] transition-colors cursor-pointer"
          >
            <PrinterIcon />
            Print Summary
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/*  Form sections                                                */}
      {/* ============================================================ */}
      <div className="flex flex-col gap-4 no-print" data-print-hide>
        {/* --- 1. Baby Information --- */}
        <Section title="Baby Information" defaultOpen={true}>
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="ei-baby-name">Baby&apos;s name</FieldLabel>
              <input
                id="ei-baby-name"
                type="text"
                value={info.babyName}
                onChange={(e) => update({ babyName: e.target.value })}
                placeholder="First and last name"
                className={inputClasses}
              />
            </div>
            <div>
              <FieldLabel htmlFor="ei-dob">Date of birth</FieldLabel>
              <input
                id="ei-dob"
                type="date"
                value={info.dateOfBirth}
                onChange={(e) => update({ dateOfBirth: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <FieldLabel htmlFor="ei-blood-type">Blood type</FieldLabel>
              <select
                id="ei-blood-type"
                value={info.bloodType}
                onChange={(e) => update({ bloodType: e.target.value })}
                className={selectClasses}
              >
                {BLOOD_TYPES.map((bt) => (
                  <option key={bt} value={bt}>
                    {bt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Section>

        {/* --- 2. Allergies --- */}
        <Section title="Allergies">
          <div className="flex flex-col gap-3">
            {info.allergies.map((allergy, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="flex-1 px-4 py-2.5 rounded-lg bg-[#FBF8F3] border border-[#E8E2D9] text-sm text-[#1B2838]">
                  {allergy}
                </span>
                <button
                  type="button"
                  onClick={() => removeAllergy(index)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[#DC2626] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                  aria-label={`Remove allergy: ${allergy}`}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="text"
                value={newAllergy}
                onChange={(e) => setNewAllergy(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addAllergy();
                  }
                }}
                placeholder="e.g. Peanuts, Penicillin"
                className={inputClasses}
              />
              <button
                type="button"
                onClick={addAllergy}
                className="flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#0A7A70] transition-colors cursor-pointer shrink-0"
              >
                <PlusIcon />
                Add
              </button>
            </div>
            {info.allergies.length === 0 && (
              <p className="text-xs text-[#64748B]">
                No allergies recorded. Add any known allergies above.
              </p>
            )}
          </div>
        </Section>

        {/* --- 3. Medical Conditions --- */}
        <Section title="Medical Conditions">
          <div className="flex flex-col gap-3">
            {info.conditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="flex-1 px-4 py-2.5 rounded-lg bg-[#FBF8F3] border border-[#E8E2D9] text-sm text-[#1B2838]">
                  {condition}
                </span>
                <button
                  type="button"
                  onClick={() => removeCondition(index)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[#DC2626] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                  aria-label={`Remove condition: ${condition}`}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="text"
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCondition();
                  }
                }}
                placeholder="e.g. Eczema, Heart murmur"
                className={inputClasses}
              />
              <button
                type="button"
                onClick={addCondition}
                className="flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#0A7A70] transition-colors cursor-pointer shrink-0"
              >
                <PlusIcon />
                Add
              </button>
            </div>
            {info.conditions.length === 0 && (
              <p className="text-xs text-[#64748B]">
                No medical conditions recorded.
              </p>
            )}
          </div>
        </Section>

        {/* --- 4. Medications --- */}
        <Section title="Current Medications">
          <div className="flex flex-col gap-4">
            {info.medications.map((med, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#E8E2D9] bg-[#FBF8F3] p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                    Medication {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeMedication(index)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-[#DC2626] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                    aria-label={`Remove medication ${index + 1}`}
                  >
                    <TrashIcon />
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <FieldLabel htmlFor={`med-name-${index}`}>Name</FieldLabel>
                    <input
                      id={`med-name-${index}`}
                      type="text"
                      value={med.name}
                      onChange={(e) =>
                        updateMedication(index, "name", e.target.value)
                      }
                      placeholder="Medication name"
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <FieldLabel htmlFor={`med-dosage-${index}`}>
                        Dosage
                      </FieldLabel>
                      <input
                        id={`med-dosage-${index}`}
                        type="text"
                        value={med.dosage}
                        onChange={(e) =>
                          updateMedication(index, "dosage", e.target.value)
                        }
                        placeholder="e.g. 5ml"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor={`med-freq-${index}`}>
                        Frequency
                      </FieldLabel>
                      <input
                        id={`med-freq-${index}`}
                        type="text"
                        value={med.frequency}
                        onChange={(e) =>
                          updateMedication(index, "frequency", e.target.value)
                        }
                        placeholder="e.g. Twice daily"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addMedication}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-dashed border-[#E2DDD5] text-[#64748B] text-sm font-semibold hover:border-[#0D9488] hover:text-[#0D9488] transition-colors cursor-pointer"
            >
              <PlusIcon />
              Add Medication
            </button>
          </div>
        </Section>

        {/* --- 5. Pediatrician Details --- */}
        <Section title="Pediatrician Details">
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="ei-ped-name">
                Pediatrician&apos;s name
              </FieldLabel>
              <input
                id="ei-ped-name"
                type="text"
                value={info.pediatricianName}
                onChange={(e) => update({ pediatricianName: e.target.value })}
                placeholder="Dr. Smith"
                className={inputClasses}
              />
            </div>
            <div>
              <FieldLabel htmlFor="ei-ped-phone">Phone number</FieldLabel>
              <input
                id="ei-ped-phone"
                type="tel"
                value={info.pediatricianPhone}
                onChange={(e) => update({ pediatricianPhone: e.target.value })}
                placeholder="(555) 123-4567"
                className={inputClasses}
              />
            </div>
            <div>
              <FieldLabel htmlFor="ei-ped-address">Office address</FieldLabel>
              <input
                id="ei-ped-address"
                type="text"
                value={info.pediatricianAddress}
                onChange={(e) =>
                  update({ pediatricianAddress: e.target.value })
                }
                placeholder="123 Main St, City, State"
                className={inputClasses}
              />
            </div>
          </div>
        </Section>

        {/* --- 6. Insurance Information --- */}
        <Section title="Insurance Information">
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="ei-ins-provider">
                Insurance provider
              </FieldLabel>
              <input
                id="ei-ins-provider"
                type="text"
                value={info.insuranceProvider}
                onChange={(e) => update({ insuranceProvider: e.target.value })}
                placeholder="e.g. Blue Cross Blue Shield"
                className={inputClasses}
              />
            </div>
            <div>
              <FieldLabel htmlFor="ei-ins-policy">Policy number</FieldLabel>
              <input
                id="ei-ins-policy"
                type="text"
                value={info.insurancePolicyNumber}
                onChange={(e) =>
                  update({ insurancePolicyNumber: e.target.value })
                }
                placeholder="Policy / Member ID"
                className={inputClasses}
              />
            </div>
            <div>
              <FieldLabel htmlFor="ei-ins-group">Group number</FieldLabel>
              <input
                id="ei-ins-group"
                type="text"
                value={info.insuranceGroupNumber}
                onChange={(e) =>
                  update({ insuranceGroupNumber: e.target.value })
                }
                placeholder="Group number"
                className={inputClasses}
              />
            </div>
          </div>
        </Section>

        {/* --- 7. Emergency Contacts --- */}
        <Section title="Emergency Contacts">
          <div className="flex flex-col gap-4">
            {info.emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#E8E2D9] bg-[#FBF8F3] p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                    Contact {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeContact(index)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-[#DC2626] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                    aria-label={`Remove contact ${index + 1}`}
                  >
                    <TrashIcon />
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <FieldLabel htmlFor={`contact-name-${index}`}>
                      Name
                    </FieldLabel>
                    <input
                      id={`contact-name-${index}`}
                      type="text"
                      value={contact.name}
                      onChange={(e) =>
                        updateContact(index, "name", e.target.value)
                      }
                      placeholder="Full name"
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <FieldLabel htmlFor={`contact-rel-${index}`}>
                        Relationship
                      </FieldLabel>
                      <input
                        id={`contact-rel-${index}`}
                        type="text"
                        value={contact.relationship}
                        onChange={(e) =>
                          updateContact(index, "relationship", e.target.value)
                        }
                        placeholder="e.g. Grandparent"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor={`contact-phone-${index}`}>
                        Phone
                      </FieldLabel>
                      <input
                        id={`contact-phone-${index}`}
                        type="tel"
                        value={contact.phone}
                        onChange={(e) =>
                          updateContact(index, "phone", e.target.value)
                        }
                        placeholder="(555) 123-4567"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {info.emergencyContacts.length < 3 ? (
              <button
                type="button"
                onClick={addContact}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-dashed border-[#E2DDD5] text-[#64748B] text-sm font-semibold hover:border-[#0D9488] hover:text-[#0D9488] transition-colors cursor-pointer"
              >
                <PlusIcon />
                Add Emergency Contact
              </button>
            ) : (
              <p className="text-xs text-[#64748B] text-center">
                Maximum of 3 emergency contacts reached.
              </p>
            )}
          </div>
        </Section>
      </div>

      {/* ============================================================ */}
      {/*  Privacy note                                                 */}
      {/* ============================================================ */}
      <p
        className="text-xs text-[#64748B] text-center leading-relaxed pb-4 no-print"
        data-print-hide
      >
        All data stays on your device. Nothing is sent to any server. Changes
        are saved automatically.
      </p>
    </div>
  );
}
