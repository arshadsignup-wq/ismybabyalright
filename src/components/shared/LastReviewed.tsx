interface LastReviewedProps {
  date: string;
}

export default function LastReviewed({ date }: LastReviewedProps) {
  const d = new Date(date);
  const formatted = d.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <p className="text-xs text-muted">
      Last reviewed:{' '}
      <time dateTime={date}>{formatted}</time>
    </p>
  );
}
