"use client";

import Card from "@/components/card/Card";
import styles from "@/styles/components/card.module.scss";

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

type CardSectionProps = {
  data: RecruitData[];
  isLoading?: boolean;
};

export default function CardSection({ data, isLoading = false }: CardSectionProps) {
  if (isLoading) {
    return (
      <section className={styles.card__section}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={`skeleton-${index}`}>
            <Card.CardSkeleton />
          </Card>
        ))}
      </section>
    );
  }

  return (
    <section className={styles.card__section}>
      {data.map((item) => (
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
