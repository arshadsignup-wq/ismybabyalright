interface AuthoritativeQuoteProps {
  quote: string;
  source: string;
  sourceUrl?: string;
  organization: string;
}

export default function AuthoritativeQuote({
  quote,
  source,
  sourceUrl,
  organization,
}: AuthoritativeQuoteProps) {
  return (
    <figure className="rounded-xl border-l-4 border-primary bg-primary-light/50 px-5 py-4 my-6">
      <blockquote className="text-sm text-foreground leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-2 text-xs text-muted">
        &mdash;{' '}
        <cite>
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {source}
            </a>
          ) : (
            source
          )}
          , {organization}
        </cite>
      </figcaption>
    </figure>
  );
}
