import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "公务员笔试真题来源库 - 国考省考行测申论公开资料索引",
  description: "汇总公开可访问的公务员行测申论真题来源，保留年份、地区、题型和出处链接。",
  keywords: "公务员笔试真题来源,国考行测真题,省考申论真题,行测题库,申论真题,事业单位笔试",
  verification: {
    google: "3CiCI9H-cGunaJ1EG1xVaZlFMeQoIWcdghrWqSp3dc4",
    other: {
      "baidu-site-verification": "codeva-CLJN3WrKPi",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
