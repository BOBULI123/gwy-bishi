import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { MockExamClient } from "@/components/mock-exam-client";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "15分钟行测快闪模考",
  description: "随机抽取15道公务员行测练习题，限时15分钟完成并查看模块正确率与错题解析。",
};

export default function MockExamPage() {
  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "15分钟行测快闪模考" }]} />
        <MockExamClient />
      </section>
    </main>
  );
}
