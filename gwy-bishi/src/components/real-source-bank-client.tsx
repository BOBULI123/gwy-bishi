"use client";

import * as React from "react";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { RealSourceCard } from "@/components/real-source-card";
import { type RealQuestionSource } from "@/data/real-question-sources";

export function RealSourceBankClient({ sources }: { sources: RealQuestionSource[] }) {
  const [keyword, setKeyword] = React.useState("");
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const filtered = React.useMemo(() => {
    const normalized = keyword.trim().toLowerCase();
    if (!normalized) return sources;
    return sources.filter((source) =>
      `${source.title}${source.year}${source.province}${source.category}${source.sourceName}${source.sourceNote}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [keyword, sources]);

  React.useEffect(() => {
    setPage(1);
  }, [keyword]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-5">
      <div className="rounded-card border border-ink/10 bg-paper p-4">
        <Input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="输入年份、地区、题型或来源关键词"
        />
      </div>

      <div className="flex items-center justify-between">
        <Badge tone="ink">
          <Filter className="mr-1 h-3 w-3" />
          共 {filtered.length} 条已核验来源
        </Badge>
        <span className="text-sm text-ink/55">每页10条</span>
      </div>

      <div className="grid gap-3">
        {paged.map((source) => (
          <RealSourceCard key={source.id} source={source} />
        ))}
      </div>
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </div>
  );
}
