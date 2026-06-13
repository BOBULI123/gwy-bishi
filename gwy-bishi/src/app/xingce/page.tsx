import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { RealSourceBankClient } from "@/components/real-source-bank-client";
import { SiteHeader } from "@/components/site-header";
import { getRealQuestionSources } from "@/data/real-question-sources";

export const metadata: Metadata = {
  title: "行测真题来源库",
  description: "公开可访问的公务员行测真题来源索引，保留年份、地区、题型和出处链接。",
};

export default function XingcePage() {
  const sources = getRealQuestionSources("xingce");

  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "行测真题来源库" }]} />
        <div className="mb-6">
          <h1 className="text-3xl font-black text-ink">行测真题来源库</h1>
          <p className="mt-2 text-ink/62">
            按年份、地区、题型和来源快速定位公开资料，点击卡片跳转原始出处。
          </p>
        </div>
        <RealSourceBankClient sources={sources} />
      </section>
    </main>
  );
}
