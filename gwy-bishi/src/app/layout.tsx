import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "公务员笔试真题库 - 2015-2026国考省考行测申论真题及深度解析",
  description:
    "覆盖国考、各省省考、事业单位笔试真题，行测深度解析+申论三版本范文，每日更新，助你上岸。",
  keywords: "公务员笔试真题,国考行测真题,省考申论真题,行测题库,申论范文,事业单位笔试",
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
