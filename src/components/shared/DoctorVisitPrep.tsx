'use client';

interface DoctorVisitPrepProps {
  title: string;
  talkingPoints: string[];
  whenToMention: string[];
  whenToActNow: string[];
}

export default function DoctorVisitPrep({
  title,
  talkingPoints,
  whenToMention,
  whenToActNow,
}: DoctorVisitPrepProps) {
  function handlePrint() {
    window.print();
  }

  return (
    <section className="mt-10 print:mt-4" aria-labelledby="doctor-prep-heading">
      <div className="rounded-xl border border-dashed border-[#C5BFAD] bg-[#FDFCF9] p-5 print:border-solid print:border-gray-300">
        <div className="flex items-center justify-between mb-3">
          <h2 id="doctor-prep-heading" className="text-base font-bold text-foreground">
            Doctor Visit Checklist
          </h2>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E2D9] bg-white px-3 py-1.5 text-xs text-muted hover:border-primary hover:text-primary transition-colors print:hidden"
            aria-label="Print this checklist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print
          </button>
        </div>

        <p className="text-xs text-muted mb-3 print:text-sm">
          Bring this checklist to your next pediatrician visit to discuss <strong>{title}</strong>.
        </p>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Things to mention</p>
            <ul className="space-y-1">
              {talkingPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted">
                  <span className="mt-0.5 flex-shrink-0 h-3.5 w-3.5 rounded border border-[#C5BFAD] print:border-gray-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {whenToMention.length > 0 && (
            <div>
              <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Observations to share</p>
              <ul className="space-y-1">
                {whenToMention.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-0.5 flex-shrink-0 h-3.5 w-3.5 rounded border border-[#C5BFAD] print:border-gray-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {whenToActNow.length > 0 && (
            <div>
              <p className="font-semibold text-red-700 text-xs uppercase tracking-wider mb-1">Urgent signs to report immediately</p>
              <ul className="space-y-1">
                {whenToActNow.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-red-800">
                    <span className="mt-0.5 flex-shrink-0 h-3.5 w-3.5 rounded border border-red-300 print:border-red-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">My notes</p>
            <div className="h-16 rounded border border-dashed border-[#C5BFAD] bg-white print:h-24 print:border-gray-400" />
          </div>
        </div>

        <p className="mt-3 text-[10px] text-muted-light print:text-xs">
          From ismybabyalright.com — free, evidence-based baby health guides
        </p>
      </div>
    </section>
  );
}
