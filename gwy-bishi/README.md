# gwy-bishi

公务员笔试真题来源库应用，基于 Next.js 14 App Router、TypeScript、Tailwind CSS 和本地 shadcn 风格组件构建。

> 当前站内展示已切换为公开可访问的真题来源索引。为避免版权和真实性风险，站内不批量复制第三方题目全文；真题正文以原始来源页面为准。

## 功能

- 首页 Hero、搜索、行测/申论入口、最新真题来源展示
- 行测来源库：年份、地区、题型、来源关键词筛选，10条分页
- 申论来源库：年份、地区、题型、来源关键词筛选，10条分页
- 来源卡片：保留出处链接和来源说明，点击跳转原始网页
- 模考：等待真实题目正文授权或官方来源导入后开放
- API：`/api/parse` 调用兼容模型服务，未配置密钥时返回演示解析

## 文件结构

```text
src/
  app/
    api/parse/route.ts        解析接口
    mock-exam/page.tsx        模考导入提示页
    question/[id]/page.tsx    预留题目详情页
    shenlun/page.tsx          申论来源库页
    xingce/page.tsx           行测来源库页
    layout.tsx                全局布局与站点metadata
    page.tsx                  首页
  components/
    ui/                       Card/Button/Badge/Tabs/Input等组件
    home-search.tsx           首页来源搜索
    real-source-bank-client.tsx 来源筛选分页
    real-source-card.tsx      来源卡片
    site-header.tsx           顶部导航
  data/real-question-sources.ts  可追溯真题来源索引数据
  data/questions.ts           预留结构化题目类型，当前不导出模拟题
  lib/storage.ts              localStorage限制、收藏、模考状态
  lib/utils.ts                通用工具
```

## 开发

```bash
npm install
npm run dev
```

当前本地服务可用端口：

```text
http://localhost:3001
```

## 环境变量

复制 `.env.example` 为 `.env.local`：

```text
OPENAI_API_KEY=sk-your-openai-api-key
```

## 验证

```bash
npm run lint
npm run build
```

## Vercel部署

1. 将项目推送到 GitHub。
2. 在 Vercel 导入仓库。
3. 添加环境变量 `OPENAI_API_KEY`。
4. 使用默认构建命令 `npm run build` 和输出配置即可。
