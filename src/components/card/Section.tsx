"use client";

import Card from "@/components/card/Card";
import { useFilter } from "@/hooks/useFilter";
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

export default function CardSection({ data }: { data: RecruitData[] }) {
  const { selectedGlobalFilter } = useFilter();
  const filteredData = data.filter((item) => {
    if (selectedGlobalFilter === null) return true;
    return item.subJobCdNm === selectedGlobalFilter;
  });
  return (
    <section className={styles.card__section}>
      {filteredData.map((item) => (
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
