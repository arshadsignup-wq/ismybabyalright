import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ChecklistTool from "@/components/checklist/ChecklistTool";

export const metadata: Metadata = {
  title: "Milestone Checklist",
  description:
    "Interactive developmental milestone checklist. Track your baby's progress across motor, language, social, and cognitive skills. Based on CDC and AAP guidelines.",
};

export default function ChecklistPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Checklist" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <ChecklistTool />
      </div>
    </div>
  );
}
