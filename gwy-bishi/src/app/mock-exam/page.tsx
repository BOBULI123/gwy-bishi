import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { MockExamClient } from "@/components/mock-exam-client";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "真题模考导入中",
  description: "站内真题正文完成授权导入后，将开放15分钟行测模考。",
};

export default function MockExamPage() {
  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "真题模考导入中" }]} />
        <MockExamClient />
      </section>
    </main>
  );
}
