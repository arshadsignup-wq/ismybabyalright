import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description:
    "Manage your baby's profile, preferences, and data. Export, import, or clear stored data.",
  alternates: {
    canonical: "/settings",
  },
  openGraph: {
    title: "Settings | Is My Baby Alright?",
    description:
      "Manage your baby's profile, preferences, and stored data.",
  },
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
