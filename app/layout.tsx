import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "프리드라이프 라이프케어(LC) 모집 | 김두환 본부장",
  description:
    "웅진 프리드라이프 라이프케어(LC) 파트너 모집. 수수료 익월 즉시지급, 가전결합상조·순수상조·즉시상조 상담 가능. 초보도 가능, 추가 프로모션 운영.",
  keywords: "프리드라이프, 라이프케어, LC모집, 상조, 가전결합상조, 순수상조, 즉시상조",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="min-h-full break-keep">{children}</body>
    </html>
  );
}
