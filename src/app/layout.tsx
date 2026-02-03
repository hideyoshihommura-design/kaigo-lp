import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ホリエモンAI学校 介護校｜介護業界特化のAI活用スクール",
  description:
    "介護記録、ケアプラン作成、業務自動化。介護現場の事務作業をAIで効率化する方法を学ぶ、介護業界特化型AIスクール。240以上の講義が受講し放題。助成金活用で最大75%オフ。",
  keywords: [
    "介護 AI 研修",
    "介護 DX",
    "助成金 AI研修",
    "ホリエモン AI学校",
    "介護 業務効率化",
    "介護記録 AI",
    "ケアプラン AI",
  ],
  openGraph: {
    title: "ホリエモンAI学校 介護校｜介護業界特化のAI活用スクール",
    description:
      "介護記録に追われる毎日を、AIで変える。240以上の講義が受講し放題。助成金活用で最大75%オフ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
