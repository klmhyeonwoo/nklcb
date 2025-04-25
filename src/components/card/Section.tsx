"use client";

import Card from "@/components/card/Card";
import styles from "@/styles/components/card.module.scss";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type RecruitData = {
  id: number;
  companyCd: string;
  annoId: number;
  empTypeCdNm: string;
  annoSubject: string;
  subJobCdNm: string;
  sysCompanyCdNm: string;
  jobDetailLink: string;
  workplace: string;
  startDate: string;
  endDate: string;
};

export default function CardSection({ data }: { data: RecruitData[] }) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [displayData, setDisplayData] = useState<RecruitData[]>(data);
  
  useEffect(() => {
    // 회사 탭이 변경될 때 로딩 상태 활성화
    const company = searchParams.get('company');
    if (company) {
      setIsLoading(true);
      
      // 데이터가 로드되면 로딩 상태 비활성화 (실제로는 서버 컴포넌트에서 데이터를 가져오므로 약간의 지연만 시뮬레이션)
      const timer = setTimeout(() => {
        setIsLoading(false);
        setDisplayData(data);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [searchParams, data]);

  if (isLoading) {
    return (
      <section className={styles.card__section}>
        {[...Array(4)].map((_, index) => (
          <Card key={`skeleton-${index}`}>
            <Card.CardSkeleton />
          </Card>
        ))}
      </section>
    );
  }

  return (
    <section className={styles.card__section}>
      {displayData.map((item) => (
        <Card key={item.id}>
          <Card.CardContent
            title={item.annoSubject}
            company={item.sysCompanyCdNm}
            position={item.subJobCdNm}
            employType={item.empTypeCdNm}
            fromDate={item.startDate}
            toDate={item.endDate}
            link={item.jobDetailLink}
          />
        </Card>
      ))}
    </section>
  );
}
