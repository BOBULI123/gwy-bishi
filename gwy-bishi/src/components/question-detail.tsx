"use client";

import * as React from "react";
import { Bookmark, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioOption } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Question,
  type ShenlunQuestion,
  type XingceQuestion,
  getRelatedXingce,
} from "@/data/questions";
import { getFavoriteIds, toggleFavorite } from "@/lib/storage";
import { cn } from "@/lib/utils";

type XingceAnalysis = {
  correctAnswer: string;
  analysis: string;
  knowledgePoint: string;
  skill: string;
  trap: string;
  difficulty: string;
  relatedTopics: string[];
};

type ShenlunAnalysis = {
  content: string;
  wordCount: number;
  scorePoints: string[];
  keySentences?: string[];
};

async function requestAnalysis(payload: {
  questionId: string;
  questionType: "xingce" | "shenlun";
  module: string;
  level: "basic" | "advanced" | "expert";
  questionText: string;
  options?: string[];
  userAnswer?: string;
}) {
  const response = await fetch("/api/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result.data;
}

function XingceDetail({ question }: { question: XingceQuestion }) {
  const [selected, setSelected] = React.useState("");
  const [answerVisible, setAnswerVisible] = React.useState(false);
  const [analysis, setAnalysis] = React.useState<XingceAnalysis | null>(null);
  const [loading, setLoading] = React.useState(false);
  const related = getRelatedXingce(question);

  function chooseAnswer(option: string) {
    setSelected(option);
    setAnswerVisible(false);
    window.setTimeout(() => setAnswerVisible(true), 500);
  }

  async function loadAnalysis() {
    setLoading(true);
    const data = (await requestAnalysis({
      questionId: question.id,
      questionType: "xingce",
      module: question.moduleName,
      level: "basic",
      questionText: question.content,
      options: question.options,
      userAnswer: selected,
    })) as XingceAnalysis;
    setAnalysis({ ...data, correctAnswer: data.correctAnswer || question.correctAnswer });
    setLoading(false);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
      <div className="space-y-5">
        <Card>
          <CardHeader>
            <div className="flex flex-wrap gap-2">
              <Badge tone="mint">
                {question.year} · {question.province}
              </Badge>
              <Badge>{question.moduleName}</Badge>
              <Badge tone="ink">{question.knowledgePoint}</Badge>
            </div>
            <CardTitle className="text-2xl leading-9">{question.content}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option) => {
              const letter = option.slice(0, 1);
              return (
                <RadioOption
                  key={option}
                  checked={selected === letter}
                  onClick={() => chooseAnswer(letter)}
                >
                  {option}
                </RadioOption>
              );
            })}
            {selected ? (
              <div className="rounded-card bg-white p-4 text-sm font-semibold text-ink">
                你的答案：{selected}
                {answerVisible ? (
                  <span className="ml-4 text-mint">正确答案：{question.correctAnswer}</span>
                ) : (
                  <span className="ml-4 text-ink/45">正在判题...</span>
                )}
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>深度解析</CardTitle>
          </CardHeader>
          <CardContent>
            {!analysis ? (
              <Button onClick={loadAnalysis} disabled={loading}>
                <Sparkles className="h-4 w-4" />
                {loading ? "整理中..." : "查看解析"}
              </Button>
            ) : (
              <div className="space-y-4 text-sm leading-7 text-ink/78">
                <div className="rounded-card bg-mint/8 p-4 font-semibold text-mint">
                  正确答案：{analysis.correctAnswer}
                </div>
                <p>{analysis.analysis}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <InfoBlock title="考点提醒" content={analysis.knowledgePoint} />
                  <InfoBlock title="解题技巧" content={analysis.skill} />
                  <InfoBlock title="易错点提醒" content={analysis.trap} />
                  <InfoBlock title="相关考点" content={analysis.relatedTopics.join("、")} />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <aside className="space-y-4">
        <RelatedActions questionId={question.id} />
        <Card>
          <CardHeader>
            <CardTitle>同考点推荐</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {related.length ? (
              related.map((item) => (
                <a
                  key={item.id}
                  href={`/question/${item.id}`}
                  className="block rounded-card bg-white p-3 text-sm font-semibold leading-6 text-ink hover:text-mint"
                >
                  {item.id}
                  <span className="block text-xs font-medium text-ink/50">{item.knowledgePoint}</span>
                </a>
              ))
            ) : (
              <p className="text-sm leading-6 text-ink/58">暂无相关推荐。</p>
            )}
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-card border border-ink/10 bg-white p-4">
      <p className="mb-1 text-xs font-bold text-ink/45">{title}</p>
      <p className="font-semibold text-ink">{content}</p>
    </div>
  );
}

function RelatedActions({ questionId }: { questionId: string }) {
  const [favorites, setFavorites] = React.useState<string[]>([]);

  React.useEffect(() => {
    setFavorites(getFavoriteIds());
  }, []);

  return (
    <Card>
      <CardContent className="grid gap-3 p-4">
        <Button
          variant={favorites.includes(questionId) ? "default" : "secondary"}
          onClick={() => setFavorites(toggleFavorite(questionId))}
        >
          <Bookmark className="h-4 w-4" />
          {favorites.includes(questionId) ? "已收藏" : "收藏题目"}
        </Button>
      </CardContent>
    </Card>
  );
}

function ShenlunDetail({ question }: { question: ShenlunQuestion }) {
  const [materialOpen, setMaterialOpen] = React.useState(true);
  const [analyses, setAnalyses] = React.useState<Record<string, ShenlunAnalysis>>({
    basic: {
      content:
        "先判断题型与作答对象，再回到材料提炼问题、原因、做法和成效。答案建议采用总分结构，开头点明核心判断，随后分条呈现采分点，最后用一句话扣回治理目标。",
      wordCount: 68,
      scorePoints: ["审清题型", "回扣材料", "分条作答", "突出群众导向"],
    },
  });
  const [loadingLevel, setLoadingLevel] = React.useState("");

  async function loadLevel(level: "basic" | "advanced" | "expert") {
    setLoadingLevel(level);
    const data = (await requestAnalysis({
      questionId: question.id,
      questionType: "shenlun",
      module: question.questionTypeName,
      level,
      questionText: `${question.material}\n\n${question.questions[0].requirement}`,
    })) as ShenlunAnalysis;
    setAnalyses((current) => ({ ...current, [level]: data }));
    setLoadingLevel("");
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
      <div className="space-y-5">
        <Card>
          <CardHeader>
            <button
              type="button"
              onClick={() => setMaterialOpen((open) => !open)}
              className="flex w-full items-center justify-between text-left"
            >
              <CardTitle>给定材料</CardTitle>
              {materialOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
          </CardHeader>
          {materialOpen ? (
            <CardContent>
              <p className="text-base leading-8 text-ink/78">{question.material}</p>
            </CardContent>
          ) : null}
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-wrap gap-2">
              <Badge tone="gold">
                {question.year} · {question.province}
              </Badge>
              <Badge>{question.questionTypeName}</Badge>
              <Badge tone="ink">{question.theme}</Badge>
            </div>
            <CardTitle className="text-2xl leading-9">
              {question.questions[0].requirement}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>申论解析</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic">
              <TabsList className="flex flex-wrap">
                <TabsTrigger value="basic">答题思路</TabsTrigger>
                <TabsTrigger value="advanced">作答框架</TabsTrigger>
                <TabsTrigger value="expert">参考范文</TabsTrigger>
              </TabsList>
              {(["basic", "advanced", "expert"] as const).map((level) => (
                <TabsContent key={level} value={level}>
                  {analyses[level] ? (
                    <ShenlunAnalysisView question={question} analysis={analyses[level]} level={level} />
                  ) : (
                    <Button onClick={() => loadLevel(level)} disabled={loadingLevel === level}>
                      <Sparkles className="h-4 w-4" />
                      {loadingLevel === level ? "生成中..." : "查看解析"}
                    </Button>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <aside className="space-y-4">
        <RelatedActions questionId={question.id} />
      </aside>
    </div>
  );
}

function ShenlunAnalysisView({
  question,
  analysis,
  level,
}: {
  question: ShenlunQuestion;
  analysis: ShenlunAnalysis;
  level: string;
}) {
  return (
    <div className="space-y-4 text-sm leading-7 text-ink/78">
      <p className={cn(level === "expert" && "text-base leading-8")}>{analysis.content}</p>
      <div className="rounded-card bg-white p-4">
        <p className="mb-2 font-bold text-ink">采分点</p>
        <div className="flex flex-wrap gap-2">
          {analysis.scorePoints.map((point) => (
            <Badge key={point} tone="mint">
              {point}
            </Badge>
          ))}
        </div>
      </div>
      {level === "advanced" ? (
        <InfoBlock
          title="字数分配"
          content={`建议控制在${question.questions[0].wordLimit}字以内，开头约15%，主体要点约75%，结尾约10%。`}
        />
      ) : null}
      {analysis.keySentences?.length ? (
        <InfoBlock title="亮点句" content={analysis.keySentences.join("；")} />
      ) : null}
    </div>
  );
}

export function QuestionDetail({ question }: { question: Question }) {
  return question.examType === "xingce" ? (
    <XingceDetail question={question} />
  ) : (
    <ShenlunDetail question={question} />
  );
}
