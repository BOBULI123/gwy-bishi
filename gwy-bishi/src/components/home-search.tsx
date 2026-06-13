"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { searchRealQuestionSources } from "@/data/real-question-sources";

export function HomeSearch() {
  const [keyword, setKeyword] = React.useState("");
  const results = React.useMemo(() => searchRealQuestionSources(keyword).slice(0, 6), [keyword]);
  const showResults = keyword.trim().length > 0;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-3 rounded-card border border-ink/10 bg-white p-2 shadow-sm sm:flex-row">
        <Input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="搜索真题来源，如“2012国考”“申论试卷”“言语理解”..."
          className="border-0 text-base focus:ring-0"
        />
        <Button className="shrink-0" onClick={() => setKeyword(keyword.trim())}>
          <Search className="h-4 w-4" />
          搜索
        </Button>
      </div>
      {showResults ? (
        <div className="mt-3 rounded-card border border-ink/10 bg-paper p-3 text-left shadow-sm">
          {results.length ? (
            <div className="space-y-2">
              {results.map((item) => (
                <a
                  key={item.id}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-card bg-white p-3 transition hover:bg-mint/5"
                >
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <Badge tone={item.examType === "xingce" ? "mint" : "gold"}>
                      {item.examType === "xingce" ? "行测" : "申论"}
                    </Badge>
                    <span className="text-xs font-semibold text-ink/55">
                      {item.year} · {item.province} · {item.sourceName}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="p-3 text-sm text-ink/60">暂未找到匹配来源。</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
