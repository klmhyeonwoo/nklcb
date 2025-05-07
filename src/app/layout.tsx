import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/styles/global.scss";
import "@/styles/components.scss";
import "@/styles/schema.scss";
import "@/styles/error.scss";

export const metadata: Metadata = {
  title: "네카라쿠배 채용",
  description: "내가 원했던 기업을 한 눈에 확인해보세요",
  keywords: `네카라쿠배 채용, 네이버 채용, 카카오 채용, 라인 채용, 쿠팡 채용, 우아한형제들 채용, 당근 채용,토스 채용, 
  프론트엔드 채용, 백엔드 채용, 풀스택 개발자 채용, 모바일 개발자 채용, UI/UX 디자이너 채용,
  그래픽 디자이너 채용, 데이터 분석가 채용, AI 엔지니어 채용, 머신러닝 엔지니어 채용, 서비스 기획 채용,
  프로덕트 매니저 채용, 프로젝트 매니저 채용, 신입 공개 채용, 경력직 공개 채용, 네카라쿠배 수시 채용, IT 기업 수시 채용,
  네카라쿠배 인턴 채용, IT 기업 인턴십, 원격 근무 채용, 재택 근무 가능 채용, 2025 개발자 채용, IT 채용 트렌드, 네카라쿠배 채용 공고,
  네카라쿠배 공고, 블록체인 개발자 채용, AI 스타트업 채용, IT 대기업 채용
  `,
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "네카라쿠배 채용 - IT 기업 채용정보 플랫폼",
    description:
      "네이버, 카카오, 라인, 쿠팡, 배달의민족 등 대한민국 대표 IT 기업의 채용 정보를 한눈에 확인하세요",
    url: "https://nklcb.io",
    siteName: "nklcb",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "네카라쿠배 채용 플랫폼",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Analytics />
      <GoogleAnalytics gaId="G-6M2JP9HLCY" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1550225145364569"
        crossOrigin="anonymous"
      ></script>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
