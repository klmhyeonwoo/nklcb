import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { SERVICE_CATEGORY } from "@/utils/const";
import { api } from "@/api";
import CardSection from "@/components/card/Section";
import TabSection from "@/components/tab/Section";
import "@/styles/style.scss";
import SearchSection from "@/components/search/Section";
import { Metadata } from "next";

type paramsType = {
  searchParams: Promise<{ company?: string }>;
};

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

export default async function Home({ searchParams }: paramsType) {
  const { company } = await searchParams;
  const { data, category } = await getRecruitData({
    query: (company as keyof typeof SERVICE_CATEGORY) || "naver",
  });

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
          <SearchSection data={category || new Set<string>()} />
          <CardSection data={data} />
        </div>
      </article>
    </section>
  );
}
