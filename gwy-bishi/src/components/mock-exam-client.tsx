"use client";

import * as React from "react";
import { RotateCcw, Send, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioOption } from "@/components/ui/radio-group";
import { type XingceQuestion, xingceQuestions } from "@/data/questions";
import { canViewAnalysis, clearMockState, markAnalysisViewed, readMockState, saveMockState } from "@/lib/storage";

type MockState = {
  started: boolean;
  submitted: boolean;
  questionIds: string[];
  current: number;
  answers: Record<string, string>;
  endAt: number;
};

const initialState: MockState = {
  started: false,
  submitted: false,
  questionIds: [],
  current: 0,
  answers: {},
  endAt: 0,
};

const distribution = {
  yanyu: 5,
  shuliang: 2,
  panduan: 4,
  ziliao: 3,
  changshi: 1,
} as const;

function pickExamQuestions() {
  const selected: XingceQuestion[] = [];
  Object.entries(distribution).forEach(([module, count]) => {
    selected.push(...xingceQuestions.filter((item) => item.module === module).slice(0, count));
  });
  return selected;
}

function formatTime(seconds: number) {
  const minute = Math.floor(seconds / 60).toString().padStart(2, "0");
  const second = (seconds % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
}

export function MockExamClient() {
  const [state, setState] = React.useState<MockState>(initialState);
  const [now, setNow] = React.useState(Date.now());
  const questions = React.useMemo(() => {
    const ids = state.questionIds.length ? state.questionIds : pickExamQuestions().map((item) => item.id);
    return ids
      .map((id) => xingceQuestions.find((item) => item.id === id))
      .filter(Boolean) as XingceQuestion[];
  }, [state.questionIds]);

  React.useEffect(() => {
    setState(readMockState(initialState));
  }, []);

  React.useEffect(() => {
    if (state.started) saveMockState(state);
  }, [state]);

  React.useEffect(() => {
    if (!state.started || state.submitted) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [state.started, state.submitted]);

  React.useEffect(() => {
    if (state.started && !state.submitted && state.endAt && now >= state.endAt) {
      setState((current) => ({ ...current, submitted: true }));
    }
  }, [now, state.endAt, state.started, state.submitted]);

  function startExam() {
    const picked = pickExamQuestions();
    setState({
      started: true,
      submitted: false,
      questionIds: picked.map((item) => item.id),
      current: 0,
      answers: {},
      endAt: Date.now() + 15 * 60 * 1000,
    });
  }

  function resetExam() {
    clearMockState();
    setState(initialState);
  }

  function choose(letter: string) {
    const question = questions[state.current];
    setState((current) => ({
      ...current,
      answers: { ...current.answers, [question.id]: letter },
    }));
  }

  if (!state.started) {
    return (
      <Card>
        <CardHeader>
          <Badge tone="mint" className="w-fit">
            <Timer className="mr-1 h-3.5 w-3.5" />
            15:00
          </Badge>
          <CardTitle className="text-3xl">15分钟行测快闪模考</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-base leading-8 text-ink/68">
            随机抽取15道真题（言语5+数量2+判断4+资料3+常识1），限时15分钟。
          </p>
          <Button size="lg" onClick={startExam}>
            开始模考
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (state.submitted) {
    const correct = questions.filter((question) => state.answers[question.id] === question.correctAnswer);
    const score = Math.round((correct.length / questions.length) * 100);
    const modules = Array.from(new Set(questions.map((question) => question.moduleName)));

    return (
      <div className="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">模考结果：{score}分</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={score} />
            <div className="grid gap-3 md:grid-cols-5">
              {modules.map((module) => {
                const moduleQuestions = questions.filter((item) => item.moduleName === module);
                const moduleCorrect = moduleQuestions.filter(
                  (item) => state.answers[item.id] === item.correctAnswer,
                ).length;
                return (
                  <div key={module} className="rounded-card bg-white p-3 text-sm">
                    <p className="font-bold text-ink">{module}</p>
                    <p className="mt-1 text-ink/60">
                      {moduleCorrect}/{moduleQuestions.length}
                    </p>
                  </div>
                );
              })}
            </div>
            <Button onClick={resetExam}>
              <RotateCcw className="h-4 w-4" />
              再考一次
            </Button>
          </CardContent>
        </Card>
        <div className="grid gap-3">
          {questions
            .filter((question) => state.answers[question.id] !== question.correctAnswer)
            .map((question) => (
              <details key={question.id} className="rounded-card border border-ink/10 bg-paper p-4">
                <summary className="cursor-pointer font-bold text-ink">{question.content}</summary>
                <div className="mt-3 text-sm leading-7 text-ink/70">
                  <p>你的答案：{state.answers[question.id] || "未答"}，正确答案：{question.correctAnswer}</p>
                  {canViewAnalysis(`mock-${question.id}`) ? (
                    <Button
                      className="mt-3"
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        markAnalysisViewed(`mock-${question.id}`);
                        window.alert(`考点：${question.knowledgePoint}。建议复盘对应模块的解题技巧。`);
                      }}
                    >
                      展开错题解析
                    </Button>
                  ) : (
                    <p className="mt-2 text-cinnabar">今日免费解析次数已用完（5/5）。</p>
                  )}
                </div>
              </details>
            ))}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[state.current];
  const remainingSeconds = Math.max(0, Math.ceil((state.endAt - now) / 1000));

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge tone="mint">
            {state.current + 1}/{questions.length}
          </Badge>
          <Badge tone={remainingSeconds < 180 ? "red" : "ink"}>
            <Timer className="mr-1 h-3.5 w-3.5" />
            {formatTime(remainingSeconds)}
          </Badge>
        </div>
        <Progress value={((state.current + 1) / questions.length) * 100} />
        <CardTitle className="text-2xl leading-9">{currentQuestion.content}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {currentQuestion.options.map((option) => {
          const letter = option.slice(0, 1);
          return (
            <RadioOption
              key={option}
              checked={state.answers[currentQuestion.id] === letter}
              onClick={() => choose(letter)}
            >
              {option}
            </RadioOption>
          );
        })}
        <div className="flex flex-wrap justify-between gap-3 pt-3">
          <Button
            variant="secondary"
            disabled={state.current === 0}
            onClick={() => setState((current) => ({ ...current, current: current.current - 1 }))}
          >
            上一题
          </Button>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              disabled={state.current === questions.length - 1}
              onClick={() => setState((current) => ({ ...current, current: current.current + 1 }))}
            >
              下一题
            </Button>
            <Button
              variant="warning"
              onClick={() => setState((current) => ({ ...current, submitted: true }))}
            >
              <Send className="h-4 w-4" />
              交卷
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
