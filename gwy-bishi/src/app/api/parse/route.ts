import { NextResponse } from "next/server";

type ParseRequest = {
  questionId: string;
  questionType: "xingce" | "shenlun";
  module: string;
  level: "basic" | "advanced" | "expert";
  questionText: string;
  options?: string[];
  userAnswer?: string;
};

function fallbackAnalysis(payload: ParseRequest) {
  if (payload.questionType === "xingce") {
    return {
      correctAnswer: "A",
      analysis:
        "本题应先抓住题干中的转折和评价性表达，判断作者真正强调的方向。正确选项通常回到文段核心问题，错误选项多为局部信息、过度推断或偷换概念。",
      knowledgePoint: payload.module,
      skill: "转折之后看重点，例子数据不抢主旨",
      trap: "容易把背景信息当成作者观点，忽略问题导向。",
      difficulty: "medium",
      relatedTopics: ["主旨概括", "细节判断", "转折关联词"],
    };
  }

  return {
    content:
      payload.level === "expert"
        ? "坚持以人民为中心推进治理创新，关键在于把技术优势转化为服务效能。要以问题为导向梳理群众急难愁盼，以系统观念整合平台、流程和资源，以结果评价倒逼责任落实。唯有让数据多跑路、群众少跑腿，治理现代化才能真正落到基层、暖到民心。"
        : "作答时先审清题型和字数，再回到材料找问题、原因、做法和成效。答案建议采用“总括句+分条要点”的结构，突出群众导向、问题导向和结果导向。",
    wordCount: payload.level === "expert" ? 118 : 64,
    scorePoints: ["问题导向", "群众需求", "流程再造", "资源下沉", "闭环反馈"],
    keySentences:
      payload.level === "expert"
        ? ["把技术优势转化为服务效能", "让数据多跑路、群众少跑腿"]
        : [],
  };
}

function buildPrompt(payload: ParseRequest) {
  if (payload.questionType === "xingce") {
    return `你是一位拥有10年经验的公务员考试培训专家，擅长行测各模块解题。

请对以下行测题目给出专业解析，要求：
1. 正确答案及详细分析：说明为什么正确选项是对的，其他选项错在哪里
2. 考点提醒：明确指出本题考察的知识点
3. 解题技巧：给出30字以内的速解口诀或技巧
4. 易错点：指出考生最容易犯的错误
5. 难度评级：易/中/难
6. 相关考点：列出3个相关知识点名称

题目：${payload.questionText}
选项：${payload.options?.join("\n") ?? ""}
用户答案：${payload.userAnswer ?? "未选择"}

返回JSON格式：
{"correctAnswer":"A","analysis":"详细解析文本","knowledgePoint":"考点名称","skill":"解题技巧","trap":"易错点提醒","difficulty":"medium","relatedTopics":["考点1","考点2","考点3"]}`;
  }

  return `你是一位参与过申论阅卷的资深专家，熟悉申论评分标准。

请根据以下申论材料和题目，生成${payload.level}级别的解析。
basic为答题思路，advanced为作答框架，expert为参考范文。

题目与材料：${payload.questionText}

返回JSON格式：
{"content":"解析内容文本","wordCount":120,"scorePoints":["采分点1","采分点2","采分点3"],"keySentences":["关键句1","关键句2"]}`;
}

function parseModelJson(content: string) {
  try {
    return JSON.parse(content);
  } catch {
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Model response is not JSON");
    return JSON.parse(match[0]);
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ParseRequest;
  const apiKey = process.env.OPENAI_API_KEY;
  const baseUrl = (process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  if (!apiKey) {
    return NextResponse.json({ data: fallbackAnalysis(payload), mock: true });
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "你只输出合法JSON，不输出Markdown。" },
        { role: "user", content: buildPrompt(payload) },
      ],
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "解析生成失败", data: fallbackAnalysis(payload), mock: true },
      { status: 200 },
    );
  }

  const result = await response.json();
  const content = result.choices?.[0]?.message?.content ?? "{}";
  return NextResponse.json({ data: parseModelJson(content), mock: false });
}
