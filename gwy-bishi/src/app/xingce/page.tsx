import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuestionBankClient } from "@/components/question-bank-client";
import { SiteHeader } from "@/components/site-header";
import { xingceQuestions } from "@/data/questions";

export const metadata: Metadata = {
  title: "行测真题库",
  description: "2015-2026公务员行测真题库，支持言语理解、数量关系、判断推理、资料分析、常识判断筛选与深度解析。",
};

export default function XingcePage() {
  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "行测真题库" }]} />
        <div className="mb-6">
          <h1 className="text-3xl font-black text-ink">行测真题库</h1>
          <p className="mt-2 text-ink/62">
            按模块、年份、省份和难度快速定位题目，点击进入详情查看作答与解析。
          </p>
        </div>
        <QuestionBankClient examType="xingce" questions={xingceQuestions} />
      </section>
    </main>
  );
}
