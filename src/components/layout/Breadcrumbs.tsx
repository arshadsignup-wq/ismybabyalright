import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <li className="flex items-center">
          <Link
            href="/"
            className="min-h-[44px] flex items-center hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-light flex-shrink-0"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {item.href ? (
              <Link
                href={item.href}
                className="min-h-[44px] flex items-center hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="min-h-[44px] flex items-center text-foreground font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
