import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuestionBankClient } from "@/components/question-bank-client";
import { SiteHeader } from "@/components/site-header";
import { shenlunQuestions } from "@/data/questions";

export const metadata: Metadata = {
  title: "申论模拟题库",
  description: "2015-2026公务员申论模拟题库，覆盖概括归纳、综合分析、提出对策、贯彻执行和大作文。",
};

export default function ShenlunPage() {
  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "申论模拟题库" }]} />
        <div className="mb-6">
          <h1 className="text-3xl font-black text-ink">申论模拟题库</h1>
          <p className="mt-2 text-ink/62">
            覆盖五类申论题型，支持材料、主题、年份和地区筛选。
          </p>
        </div>
        <QuestionBankClient examType="shenlun" questions={shenlunQuestions} />
      </section>
    </main>
  );
}
