export default function ComparisonTable({
  caption,
  headers,
  rows,
  sourceNote,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  sourceNote?: string;
}) {
  return (
    <div className="my-4">
      {/* Mobile card layout */}
      <div className="sm:hidden space-y-3">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="rounded-xl border border-[#E8E2D9] bg-white p-4 space-y-1"
          >
            {row.map((cell, ci) => (
              <p key={ci} className="text-sm text-muted leading-relaxed">
                <span className="font-semibold text-foreground">
                  {headers[ci]}:
                </span>{' '}
                {cell}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
        <table className="w-full text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-card-alt border-b border-[#E8E2D9]">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-5 py-3 font-bold text-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={
                  ri < rows.length - 1 ? 'border-b border-[#E8E2D9]' : ''
                }
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-5 py-3 align-top leading-relaxed ${ci === 0 ? 'font-semibold text-foreground' : 'text-muted'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sourceNote && (
        <p className="text-xs text-muted mt-2 leading-relaxed">{sourceNote}</p>
      )}
    </div>
  );
}
