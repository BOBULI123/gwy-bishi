"use client";

import * as React from "react";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { Select } from "@/components/ui/select";
import { QuestionCard } from "@/components/question-card";
import {
  type ExamType,
  type Question,
  provinces,
  shenlunTypes,
  xingceModules,
} from "@/data/questions";

const years = Array.from({ length: 12 }, (_, index) => 2026 - index);
const difficulties = [
  { value: "easy", label: "易" },
  { value: "medium", label: "中" },
  { value: "hard", label: "难" },
];

export function QuestionBankClient({
  examType,
  questions,
}: {
  examType: ExamType;
  questions: Question[];
}) {
  const [module, setModule] = React.useState("all");
  const [year, setYear] = React.useState("all");
  const [province, setProvince] = React.useState("all");
  const [difficulty, setDifficulty] = React.useState("all");
  const [keyword, setKeyword] = React.useState("");
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const moduleOptions = examType === "xingce" ? xingceModules : shenlunTypes;
  const filtered = React.useMemo(() => {
    return questions.filter((question) => {
      const moduleMatch =
        module === "all" ||
        (question.examType === "xingce"
          ? question.module === module
          : question.questionType === module);
      const yearMatch = year === "all" || question.year === Number(year);
      const provinceMatch = province === "all" || question.province === province;
      const difficultyMatch =
        examType !== "xingce" ||
        difficulty === "all" ||
        (question.examType === "xingce" && question.difficulty === difficulty);
      const text =
        question.examType === "xingce"
          ? `${question.content}${question.moduleName}${question.knowledgePoint}`
          : `${question.theme}${question.questionTypeName}${question.material}${question.questions[0].requirement}`;
      return (
        moduleMatch &&
        yearMatch &&
        provinceMatch &&
        difficultyMatch &&
        text.toLowerCase().includes(keyword.trim().toLowerCase())
      );
    });
  }, [difficulty, examType, keyword, module, province, questions, year]);

  React.useEffect(() => {
    setPage(1);
  }, [difficulty, keyword, module, province, year]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={module === "all" ? "default" : "secondary"}
          size="sm"
          onClick={() => setModule("all")}
        >
          全部
        </Button>
        {moduleOptions.map((option) => (
          <Button
            key={option.value}
            variant={module === option.value ? "default" : "secondary"}
            size="sm"
            onClick={() => setModule(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="grid gap-3 rounded-card border border-ink/10 bg-paper p-4 md:grid-cols-4">
        <Input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="输入关键词筛选"
        />
        <Select value={year} onChange={(event) => setYear(event.target.value)}>
          <option value="all">全部年份</option>
          {years.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select value={province} onChange={(event) => setProvince(event.target.value)}>
          <option value="all">全部地区</option>
          {provinces.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        {examType === "xingce" ? (
          <Select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            <option value="all">全部难度</option>
            {difficulties.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        ) : null}
      </div>

      <div className="flex items-center justify-between">
        <Badge tone="ink">
          <Filter className="mr-1 h-3 w-3" />
          共 {filtered.length} 道题目
        </Badge>
        <span className="text-sm text-ink/55">每页10题</span>
      </div>

      <div className="grid gap-3">
        {paged.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </div>
  );
}
