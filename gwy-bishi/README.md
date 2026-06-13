# gwy-bishi

公务员笔试真题库应用，基于 Next.js 14 App Router、TypeScript、Tailwind CSS 和本地 shadcn 风格组件构建。

## 功能

- 首页 Hero、搜索、行测/申论入口、15分钟模考入口、最新真题展示
- 行测题库：模块、年份、省份、难度、关键词筛选，10题分页
- 申论题库：题型、年份、省份、关键词筛选
- 真题详情：行测作答判题、深度解析、收藏、PDF会员提示、相关推荐
- 申论详情：材料折叠、答题思路/作答框架/参考范文三版本解析
- 模考：15分钟15题，保存答题状态，交卷后显示得分、模块正确率、错题解析
- API：`/api/parse` 调用兼容模型服务，未配置密钥时返回演示解析

## 文件结构

```text
src/
  app/
    api/parse/route.ts        解析接口
    mock-exam/page.tsx        模考页
    question/[id]/page.tsx    真题详情页与SEO metadata
    shenlun/page.tsx          申论题库页
    xingce/page.tsx           行测题库页
    layout.tsx                全局布局与站点metadata
    page.tsx                  首页
  components/
    ui/                       Card/Button/Badge/Tabs/Input等组件
    home-search.tsx           首页搜索
    mock-exam-client.tsx      模考交互
    question-bank-client.tsx  题库筛选分页
    question-detail.tsx       行测/申论详情交互
    site-header.tsx           顶部导航
  data/questions.ts           1000道行测、1000道申论模拟题数据
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


