import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share with Caregiver",
  description:
    "Create a shareable handoff card for babysitters, grandparents, or daycare.",
};

export default function SharingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
