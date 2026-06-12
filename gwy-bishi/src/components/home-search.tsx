"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { searchQuestions } from "@/data/questions";
import { truncateText } from "@/lib/utils";

export function HomeSearch() {
  const [keyword, setKeyword] = React.useState("");
  const results = React.useMemo(() => searchQuestions(keyword).slice(0, 6), [keyword]);
  const showResults = keyword.trim().length > 0;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-3 rounded-card border border-ink/10 bg-white p-2 shadow-sm sm:flex-row">
        <Input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="搜索真题关键词，如“言语理解”“申论范文”..."
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
                <Link
                  key={item.id}
                  href={`/question/${item.id}`}
                  className="block rounded-card bg-white p-3 transition hover:bg-mint/5"
                >
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <Badge tone={item.examType === "xingce" ? "mint" : "gold"}>
                      {item.examType === "xingce" ? "行测" : "申论"}
                    </Badge>
                    <span className="text-xs font-semibold text-ink/55">
                      {item.year} · {item.province}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-ink">
                    {item.examType === "xingce"
                      ? truncateText(item.content, 68)
                      : `${item.theme}｜${item.questions[0].requirement}`}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="p-3 text-sm text-ink/60">暂未找到匹配真题。</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
