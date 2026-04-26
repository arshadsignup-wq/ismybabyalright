import type { Metadata } from "next";
import EmergencyInfoForm from "@/components/emergency-info/EmergencyInfoForm";

export const metadata: Metadata = {
  title: "Emergency Info Vault - ismybabyalright",
  description:
    "Store your baby's critical emergency information for quick access. Allergies, medications, pediatrician contact, and more.",
  alternates: {
    canonical: "/emergency-info",
  },
  openGraph: {
    title: "Emergency Info Vault | Is My Baby Alright?",
    description:
      "Store your baby's critical emergency information for quick access. Allergies, medications, and pediatrician contact.",
  },
};

export default function EmergencyInfoPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Emergency Info Vault
      </h1>
      <p className="text-sm text-muted leading-relaxed mb-8">
        Keep your baby's critical information in one place for quick access
        during emergencies. All data stays on your device.
      </p>
      <EmergencyInfoForm />
    </main>
  );
}
