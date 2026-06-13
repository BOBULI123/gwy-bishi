export type ExamType = "xingce" | "shenlun";
export type Difficulty = "easy" | "medium" | "hard";

export type XingceModule = "yanyu" | "shuliang" | "panduan" | "ziliao" | "changshi";
export type ShenlunType = "gaikuo" | "zonghefenxi" | "duice" | "zhixing" | "zuowen";

export type XingceQuestion = {
  id: string;
  year: number;
  province: string;
  examType: "xingce";
  module: XingceModule;
  moduleName: string;
  difficulty: Difficulty;
  title: string;
  content: string;
  options: string[];
  correctAnswer: "A" | "B" | "C" | "D";
  knowledgePoint: string;
};

export type ShenlunSubQuestion = {
  id: number;
  requirement: string;
  wordLimit: number;
  type: ShenlunType;
  typeName?: string;
};

export type ShenlunQuestion = {
  id: string;
  year: number;
  province: string;
  examType: "shenlun";
  questionType: ShenlunType;
  questionTypeName: string;
  theme: string;
  material: string;
  materialWordCount?: number;
  questions: ShenlunSubQuestion[];
};

export type Question = XingceQuestion | ShenlunQuestion;

export const xingceQuestions: XingceQuestion[] = [];
export const shenlunQuestions: ShenlunQuestion[] = [];
export const allQuestions: Question[] = [];
export const questions = allQuestions;

export const xingceModuleMap: Record<XingceModule, string> = {
  yanyu: "言语理解",
  shuliang: "数量关系",
  panduan: "判断推理",
  ziliao: "资料分析",
  changshi: "常识判断",
};

export const shenlunTypeMap: Record<ShenlunType, string> = {
  gaikuo: "概括归纳",
  zonghefenxi: "综合分析",
  duice: "提出对策",
  zhixing: "贯彻执行",
  zuowen: "大作文",
};

export const xingceProvinces = ["国考", "北京", "上海", "广东", "江苏", "浙江", "山东", "河南", "四川", "湖北", "湖南", "安徽", "福建", "河北", "山西", "辽宁"];
export const shenlunProvinces = xingceProvinces;
export const xingceYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
export const shenlunYears = xingceYears;

export const xingceModules = Object.entries(xingceModuleMap).map(([value, label]) => ({
  value: value as XingceModule,
  label,
}));

export const shenlunTypes = Object.entries(shenlunTypeMap).map(([value, label]) => ({
  value: value as ShenlunType,
  label,
}));

export const provinces = Array.from(new Set([...xingceProvinces, ...shenlunProvinces]));

export function getQuestionById(id: string) {
  return allQuestions.find((question) => question.id === id);
}

export function getXingceById(id: string) {
  return xingceQuestions.find((question) => question.id === id);
}

export function getShenlunById(id: string) {
  return shenlunQuestions.find((question) => question.id === id);
}

export function getRelatedXingce(question: XingceQuestion) {
  return xingceQuestions
    .filter((item) => item.id !== question.id && item.module === question.module)
    .slice(0, 3);
}

export function getLatestXingce(limit = 10) {
  return [...xingceQuestions]
    .sort((a, b) => b.year - a.year || a.id.localeCompare(b.id))
    .slice(0, limit);
}

export function getLatestShenlun(limit = 5) {
  return [...shenlunQuestions]
    .sort((a, b) => b.year - a.year || a.id.localeCompare(b.id))
    .slice(0, limit);
}

export function searchQuestions(keyword: string) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) return allQuestions;
  return allQuestions.filter((question) => {
    const text =
      question.examType === "xingce"
        ? `${question.content}${question.moduleName}${question.province}${question.knowledgePoint}`
        : `${question.theme}${question.questionTypeName}${question.material}${question.questions.map((item) => item.requirement).join("")}`;
    return text.toLowerCase().includes(normalized);
  });
}
