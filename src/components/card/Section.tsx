"use client";

import Card from "@/components/card/Card";
import styles from "@/styles/components/card.module.scss";
import { useAtom } from "jotai";
import { SEARCH_KEYWORD_STORE } from "../store";
import Image from "next/image";
import icon_swimming from "../../../public/icon/swimming.gif";
import { scaledPositionName } from "@/utils/common";

type RecruitData = {
  recruitmentNoticeId: number;
  categories: string[];
  clickCount: number;
  companyCode: string;
  companyName: string;
  corporates: {
    corporateName: string;
    corporateCode: string;
  }[];
  endAt: string;
  startAt: string;
  jobOfferTitle: string;
  url: string;
};

export default function CardSection({ data }: { data: RecruitData[] }) {
  const [keyword] = useAtom(SEARCH_KEYWORD_STORE);
  const filteredData =
    data?.filter((item) => {
      if (keyword === null) return true;
      return (
        item.jobOfferTitle?.toLowerCase().includes(keyword) ||
        item.jobOfferTitle.includes(keyword) ||
        item.categories?.some((category) => {
          const originalCategory = category?.toLowerCase().trim();
          const scaledCategory = scaledPositionName(
            category?.trim()
          )?.toLowerCase();
          return (
            originalCategory?.includes(keyword) ||
            scaledCategory?.includes(keyword)
          );
        })
      );
    }) ?? [];
  const generateCompanyName = (item: RecruitData) => {
    if (item.corporates.length > 0) {
      if (item.corporates.length === 1) {
        return item.corporates[0].corporateName;
      } else {
        return `${item.corporates[0].corporateName} 외 ${
          item.corporates.length - 1
        }개 계열사`;
      }
    }
    return item.companyName;
  };
  return (
    <section
      className={styles.card__section}
      data-exists={!!filteredData.length}
    >
      {filteredData.length ? (
        filteredData.map((item) => {
          return (
            <Card key={item.recruitmentNoticeId}>
              <Card.CardContent
                id={item.recruitmentNoticeId}
                title={item.jobOfferTitle}
                company={generateCompanyName(item)}
                corporates={item.corporates}
                position={item.categories[0]?.trim()}
                fromDate={item.startAt}
                toDate={item.endAt}
                link={item.url}
              />
            </Card>
          );
        })
      ) : (
        <div className={styles.not__data}>
          <Image
            src={icon_swimming}
            width={120}
            height={120}
            alt="해딩 기업의 공고가 존재하지 않아요"
          />
          <span> 웁스, 해당 기업의 공고가 존재하지 않아요</span>
        </div>
      )}
    </section>
  );
}
