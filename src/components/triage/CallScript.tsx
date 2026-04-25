"use client";

import { useState } from "react";

interface CallScriptProps {
  script: string;
}

export default function CallScript({ script }: CallScriptProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = script;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }

  return (
    <div className="card-alt p-5 print:border print:border-black">
      <h4 className="text-sm font-bold text-foreground mb-2">
        When you call, say this:
      </h4>
      <blockquote className="text-sm text-foreground italic leading-relaxed bg-card rounded-lg p-4 border-l-4 border-l-primary">
        &ldquo;{script}&rdquo;
      </blockquote>
      <p className="text-xs text-muted mt-2 mb-3">
        Fill in the [BRACKETS] with your baby&apos;s details.
      </p>
      <div className="flex gap-2 no-print">
        <button
          onClick={handleCopy}
          className="flex-1 px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-colors cursor-pointer text-sm"
        >
          {copied ? "Copied!" : "Copy to clipboard"}
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-colors cursor-pointer text-sm"
        >
          Print
        </button>
      </div>
    </div>
  );
}
