import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuestionDetail } from "@/components/question-detail";
import { SiteHeader } from "@/components/site-header";
import { getQuestionById, questions } from "@/data/questions";
import { truncateText } from "@/lib/utils";

type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return questions.map((question) => ({ id: question.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const question = getQuestionById(decodeURIComponent(params.id));
  if (!question) {
    return { title: "题目不存在" };
  }
  if (question.examType === "xingce") {
    return {
      title: `${question.year}${question.province}行测模拟题_${question.moduleName}_${question.knowledgePoint}`,
      description: truncateText(question.content, 120),
    };
  }
  return {
    title: `${question.year}${question.province}申论模拟题_${question.questionTypeName}_${question.theme}`,
    description: truncateText(question.questions[0].requirement, 120),
  };
}

export default function QuestionPage({ params }: PageProps) {
  const question = getQuestionById(decodeURIComponent(params.id));
  if (!question) notFound();

  const sectionHref = question.examType === "xingce" ? "/xingce" : "/shenlun";
  const sectionLabel = question.examType === "xingce" ? "行测模拟题库" : "申论模拟题库";
  const moduleLabel = question.examType === "xingce" ? question.moduleName : question.questionTypeName;

  return (
    <main className="min-h-screen paper-grid">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: sectionLabel, href: sectionHref },
            { label: moduleLabel },
            { label: "题目" },
          ]}
        />
        <QuestionDetail question={question} />
      </section>
    </main>
  );
}
