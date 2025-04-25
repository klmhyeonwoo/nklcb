"use client";

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { SERVICE_CATEGORY } from "@/utils/const";
import { api } from "@/api";
import CardSection from "@/components/card/Section";
import TabSection from "@/components/tab/Section";
import "@/styles/style.scss";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function LoadingCardSection() {
  return <CardSection data={[]} isLoading={true} />;
}

export default function Home() {
  const searchParams = useSearchParams();
  const company = searchParams.get("company") || "naver";
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `list?company=${
          SERVICE_CATEGORY[query as keyof typeof SERVICE_CATEGORY]?.code || SERVICE_CATEGORY["naver"].code
        }`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(company);
  }, [company]);

  return (
    <section>
      <article className="content-wrapper">
        <div>
          <Image
            src={logo}
            alt="네카라쿠배 공고 서비스 공식 로고"
            width={200}
            height={50}
            style={{ width: '100%', height: 'auto' }}
            priority
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
          {isLoading ? (
            <LoadingCardSection />
          ) : (
            <CardSection data={data} />
          )}
        </div>
      </article>
    </section>
  );
}
