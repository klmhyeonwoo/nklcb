import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { SERVICE_CATEGORY } from "@/utils/const";
import { api } from "@/api";
import CardSection from "@/components/card/Section";
import TabSection from "@/components/tab/Section";
import "@/styles/style.scss";
import SearchSection from "@/components/search/Section";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";
import EyesLoading from "@/components/loading/EyesLoading";

type paramsType = {
  searchParams: Promise<{ company?: string }>;
};

export async function generateMetadata({
  searchParams,
}: paramsType): Promise<Metadata> {
  const { company } = await searchParams;
  const companyName =
    SERVICE_CATEGORY[company as keyof typeof SERVICE_CATEGORY]?.name;

  return {
    title: companyName
      ? `네카라쿠배 채용 | ${companyName} 채용 정보`
      : "네카라쿠배 채용",
    description: companyName
      ? `${companyName}의 최신 채용 정보를 확인해보세요`
      : "내가 원했던 기업을 한 눈에 확인해보세요",
    keywords: [
      "네카라쿠배 채용",
      "nklcb",
      "nklcb.io",
      "네이버 채용",
      "카카오 채용",
      "라인 채용",
      "쿠팡 채용",
      "우아한형제들 채용",
      "당근 채용",
      "토스 채용",
      "프론트엔드 채용",
      "백엔드 채용",
      "풀스택 개발자 채용",
      "모바일 개발자 채용",
      "UI/UX 디자이너 채용",
      "그래픽 디자이너 채용",
      "데이터 분석가 채용",
      "AI 엔지니어 채용",
      "머신러닝 엔지니어 채용",
      "서비스 기획 채용",
      "프로덕트 매니저 채용",
      "프로젝트 매니저 채용",
      "신입 공개 채용",
      "경력직 공개 채용",
      "네카라쿠배 수시 채용",
      "IT 기업 수시 채용",
      "네카라쿠배 인턴 채용",
      "IT 기업 인턴십",
      "원격 근무 채용",
      "재택 근무 가능 채용",
      "2025 개발자 채용",
      "IT 채용 트렌드",
      "네카라쿠배 채용 공고",
      "네카라쿠배 공고",
      "블록체인 개발자 채용",
      "AI 스타트업 채용",
      "IT 대기업 채용",
      "네카라쿠배 채용 정보",
      "네카라쿠배 채용 공고",
      "네카라쿠배 채용 사이트",
      "네카라쿠배 채용 플랫폼",
      "네카라쿠배 채용 리스트",
      "네카라쿠배 채용 공고 리스트",
      "네카라쿠배 채용 정보 리스트",
      "네카라쿠배 채용 공고 정보",
      "네카라쿠배 채용 공고 검색",
      "네카라쿠배 채용 공고 필터링",
      "네카라쿠배 채용 공고 정렬",
      "네카라쿠배 채용 공고 알림",
      "네카라쿠배 채용 공고 북마크",
      "네카라쿠배 채용 공고 즐겨찾기",
      "네카라쿠배 채용 공고 추천",
      "네카라쿠배 채용 공고 공유",
      "IT 기업 채용",
      "개발자 채용",
      "프론트엔드 개발자",
      "백엔드 개발자",
      "소프트웨어 엔지니어",
      "IT 채용정보",
      companyName ? `${companyName} 채용` : "",
    ].filter(Boolean),
    alternates: {
      canonical: `https://nklcb.kr${company ? `/?company=${company}` : ""}`,
    },
    openGraph: {
      title: companyName
        ? `네카라쿠배 채용 | ${companyName} 채용 정보`
        : "네카라쿠배 채용",
      description: companyName
        ? `${companyName}의 최신 채용 정보를 확인해보세요`
        : "내가 원했던 기업을 한 눈에 확인해보세요",
      type: "website",
      images: [
        {
          url: "https://raw.githubusercontent.com/klmhyeonwoo/Asset-Archieve./main/nklcb.png",
          width: 1200,
          height: 630,
          alt: "네카라쿠배 채용 이미지",
        },
      ],
    },
  };
}

async function getRecruitData({ query = "naver" }: { query: string }) {
  try {
    const response = await api.get(
      `list?company=${
        SERVICE_CATEGORY[query as keyof typeof SERVICE_CATEGORY].code
      }`
    );

    const category: Set<string> = new Set(
      response.data.map((item: { subJobCdNm: string }) => item.subJobCdNm)
    );

    return { data: response.data, category };
  } catch (error) {
    return { data: [], error };
  }
}

async function RecruitDataSection({ company }: { company?: string }) {
  const { data, category } = await getRecruitData({
    query: (company as keyof typeof SERVICE_CATEGORY) || "naver",
  });

  return (
    <Fragment>
      <SearchSection data={category || new Set<string>()} />
      <CardSection data={data} />
    </Fragment>
  );
}

export default async function Home({ searchParams }: paramsType) {
  const { company } = await searchParams;

  return (
    <section>
      <article className="content-wrapper">
        <div>
          <Image
            src={logo}
            alt="네카라쿠배 공고 서비스 공식 로고"
            layout="responsive"
          />
          <TabSection
            data={Object.keys(SERVICE_CATEGORY)}
            currentIndex={Math.max(
              Object.keys(SERVICE_CATEGORY).indexOf(
                company as keyof typeof SERVICE_CATEGORY
              ),
              0
            )}
          />
          <Suspense key={company} fallback={<EyesLoading />}>
            <RecruitDataSection company={company} />
          </Suspense>
        </div>
      </article>
    </section>
  );
}
