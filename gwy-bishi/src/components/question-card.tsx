import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { type Question } from "@/data/questions";
import { truncateText } from "@/lib/utils";

const difficultyLabel = {
  easy: "易",
  medium: "中",
  hard: "难",
};

export function QuestionCard({ question }: { question: Question }) {
  return (
    <Link href={`/question/${question.id}`}>
      <Card className="transition hover:-translate-y-0.5 hover:border-mint/35 hover:shadow-xl">
        <CardContent className="p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge tone={question.examType === "xingce" ? "mint" : "gold"}>
              {question.year} · {question.province}
            </Badge>
            {question.examType === "xingce" ? (
              <>
                <Badge>{question.moduleName}</Badge>
                <Badge tone={question.difficulty === "hard" ? "red" : "plain"}>
                  {difficultyLabel[question.difficulty]}
                </Badge>
              </>
            ) : (
              <>
                <Badge>{question.questionTypeName}</Badge>
                <Badge tone="ink">{question.materialWordCount ?? question.material.length}字材料</Badge>
              </>
            )}
          </div>
          <h3 className="text-base font-bold leading-7 text-ink">
            {question.examType === "xingce"
              ? truncateText(question.content, 90)
              : `${question.theme}｜${question.questions[0].requirement}`}
          </h3>
          <p className="mt-2 text-sm text-ink/58">
            {question.examType === "xingce"
              ? `考点：${question.knowledgePoint}`
              : `题量：${question.questions.length}题 · 字数限制：${question.questions[0].wordLimit}字`}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
