import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { RealSourceBankClient } from "@/components/real-source-bank-client";
import { SiteHeader } from "@/components/site-header";
import { getRealQuestionSources } from "@/data/real-question-sources";

export const metadata: Metadata = {
  title: "申论真题来源库",
  description: "公开可访问的公务员申论真题来源索引，保留年份、地区、题型和出处链接。",
};

export default function ShenlunPage() {
  const sources = getRealQuestionSources("shenlun");

  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "申论真题来源库" }]} />
        <div className="mb-6">
          <h1 className="text-3xl font-black text-ink">申论真题来源库</h1>
          <p className="mt-2 text-ink/62">
            优先展示可追溯出处的申论试卷、参考答案和解析资料。
          </p>
        </div>
        <RealSourceBankClient sources={sources} />
      </section>
    </main>
  );
}
