import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "公务员笔试模拟题库 - 2015-2026国考省考行测申论练习及深度解析",
  description:
    "覆盖国考、各省省考、事业单位笔试模拟练习，行测深度解析+申论三版本范文，系统刷题助你备考。",
  keywords: "公务员笔试模拟题,国考行测练习,省考申论模拟题,行测题库,申论范文,事业单位笔试",
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
