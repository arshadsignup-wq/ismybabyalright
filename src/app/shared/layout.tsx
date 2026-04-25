import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caregiver Handoff",
  description:
    "View a shared baby care summary.",
};

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
