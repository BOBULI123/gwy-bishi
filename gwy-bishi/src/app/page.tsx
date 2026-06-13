import Link from "next/link";
import { Calculator, FileText, Flame, SearchCheck, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSearch } from "@/components/home-search";
import { QuestionCard } from "@/components/question-card";
import { SiteHeader } from "@/components/site-header";
import { getLatestShenlun, getLatestXingce } from "@/data/questions";

export default function Home() {
  const latestXingce = getLatestXingce(10);
  const latestShenlun = getLatestShenlun(5);

  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:pt-16">
        <div className="text-center">
          <Badge tone="gold" className="mb-5">
            <Flame className="mr-1 h-3.5 w-3.5" />
            每日更新 · 深度解析
          </Badge>
          <h1 className="mx-auto max-w-5xl text-balance text-4xl font-black leading-tight text-ink md:text-6xl">
            公务员笔试模拟题库 - 2015-2026国考省考行测申论练习及深度解析
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/68">
            覆盖国考、各省省考、事业单位笔试模拟练习，行测深度解析+申论三版本范文，助你备考
          </p>
          <div className="mt-8">
            <HomeSearch />
          </div>
          <p className="mt-5 text-sm font-semibold text-ink/58">
            收录1,000道行测模拟题 | 1,000道申论模拟题 | 覆盖多省份 | 系统练习
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-xs leading-5 text-ink/45">
            题目用于备考训练与能力提升，不标称官方原题；如需真实历年试题，应以招录机关和考试机构公开资料为准。
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 md:grid-cols-2">
        <Link href="/xingce">
          <Card className="h-full transition hover:-translate-y-1 hover:border-mint/40">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-card bg-mint text-white">
                <Calculator className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">行测模拟题库</CardTitle>
              <CardDescription>
                言语理解、数量关系、判断推理、资料分析、常识判断
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/shenlun">
          <Card className="h-full transition hover:-translate-y-1 hover:border-gold/60">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-card bg-gold text-white">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">申论模拟题库</CardTitle>
              <CardDescription>
                概括归纳、综合分析、提出对策、贯彻执行、大作文
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <Card className="overflow-hidden bg-ink text-white">
          <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge tone="gold" className="mb-3 border-white/20 bg-white/10 text-white">
                <Timer className="mr-1 h-3.5 w-3.5" />
                快速测评
              </Badge>
              <h2 className="text-2xl font-black">15分钟行测快闪模考</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
                随机抽取15道练习题，限时训练，测试你的水平
              </p>
            </div>
            <Link href="/mock-exam" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              <SearchCheck className="h-5 w-5" />
              开始模考
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[1.35fr_0.85fr]">
        <div>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <Badge tone="mint">2026最新</Badge>
              <h2 className="mt-2 text-2xl font-black text-ink">最新行测练习</h2>
            </div>
            <Link href="/xingce" className="text-sm font-bold text-mint">
              查看全部
            </Link>
          </div>
          <div className="grid gap-3">
            {latestXingce.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <Badge tone="gold">申论范文</Badge>
              <h2 className="mt-2 text-2xl font-black text-ink">最新申论练习</h2>
            </div>
            <Link href="/shenlun" className="text-sm font-bold text-mint">
              查看全部
            </Link>
          </div>
          <div className="grid gap-3">
            {latestShenlun.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
