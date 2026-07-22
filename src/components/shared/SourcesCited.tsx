interface Source {
  org: string;
  citation: string;
  url: string;
}

interface SourcesCitedProps {
  sources: Source[];
}

export default function SourcesCited({ sources }: SourcesCitedProps) {
  if (sources.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="references-heading">
      <h3 id="references-heading" className="text-sm font-semibold text-foreground mb-3">
        References
      </h3>
      <ol className="list-none space-y-2">
        {sources.map((source, index) => (
          <li key={index} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
            <span className="flex-shrink-0 font-semibold text-foreground">[{index + 1}]</span>
            <span>
              {source.citation}{' '}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {source.org}
              </a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
