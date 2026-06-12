import Link from "next/link";

export function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink/55">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="font-medium hover:text-mint">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-ink">{item.label}</span>
          )}
          {index < items.length - 1 ? <span>/</span> : null}
        </span>
      ))}
    </nav>
  );
}
