"use client";

import { Button } from "@/components/ui/button";

export function Pagination({
  page,
  pageCount,
  onPageChange,
}: {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="secondary"
        size="sm"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        上一页
      </Button>
      <span className="px-3 text-sm font-semibold text-ink/70">
        {page} / {pageCount}
      </span>
      <Button
        variant="secondary"
        size="sm"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        下一页
      </Button>
    </div>
  );
}
