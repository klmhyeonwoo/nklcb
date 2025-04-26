import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { SERVICE_CATEGORY } from "@/utils/const";
import { api } from "@/api";
import CardSection from "@/components/card/Section";
import TabSection from "@/components/tab/Section";
import "@/styles/style.scss";
import SearchSection from "@/components/search/Section";

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
