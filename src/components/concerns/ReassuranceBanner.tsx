interface ReassuranceBannerProps {
  slug: string;
  popular?: boolean;
}

const messages = [
  "Thousands of parents search for this exact thing. You are not alone.",
  "This is one of the most common questions parents ask. Searching for answers means you care.",
  "Parents everywhere have the same worry. You are doing the right thing by looking into it.",
];

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export default function ReassuranceBanner({ slug, popular }: ReassuranceBannerProps) {
  const index = hashSlug(slug) % messages.length;
  const message = messages[index];

  return (
    <div className="rounded-xl bg-primary-light py-3 px-4 mt-6">
      <p className="text-sm italic text-foreground/80 leading-relaxed">
        {message}
        {popular && (
          <span className="block mt-1 font-semibold not-italic text-primary">
            This is one of the most-searched concerns on our site.
          </span>
        )}
      </p>
    </div>
  );
}
