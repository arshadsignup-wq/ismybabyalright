"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { decodeSnapshot } from "@/lib/sharing";
import HandoffView from "@/components/sharing/HandoffView";
import Link from "next/link";

function SharedContent() {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("d");

  if (!encoded) {
    return (
      <div className="mx-auto max-w-lg px-4 py-10 text-center">
        <h1 className="text-xl font-bold text-foreground mb-3">
          Invalid Share Link
        </h1>
        <p className="text-muted mb-4">
          This link doesn&apos;t contain any data. Ask the person who shared it
          to generate a new link.
        </p>
        <Link
          href="/"
          className="inline-flex px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const snapshot = decodeSnapshot(encoded);

  if (!snapshot) {
    return (
      <div className="mx-auto max-w-lg px-4 py-10 text-center">
        <h1 className="text-xl font-bold text-foreground mb-3">
          Could Not Read Data
        </h1>
        <p className="text-muted mb-4">
          The share link appears to be corrupted or incomplete. Ask the person
          who shared it to generate a new link.
        </p>
        <Link
          href="/"
          className="inline-flex px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <HandoffView snapshot={snapshot} />
    </div>
  );
}

export default function SharedViewPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-lg px-4 py-10 text-center">
          <p className="text-muted">Loading handoff data...</p>
        </div>
      }
    >
      <SharedContent />
    </Suspense>
  );
}
