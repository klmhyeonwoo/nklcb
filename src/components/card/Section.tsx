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
  endAt: string;
  startAt: string;
  jobOfferTitle: string;
};

export default function CardSection({ data }: { data: RecruitData[] }) {
  const [keyword] = useAtom(SEARCH_KEYWORD_STORE);
  const filteredData =
    data?.filter((item) => {
      if (keyword === null) return true;
      return (
        item.jobOfferTitle?.toLowerCase().includes(keyword) ||
        item.categories?.some((category) =>
          category?.toLowerCase().includes(keyword)
        ) ||
        scaledPositionName(item.categories[0]?.trim())?.includes(keyword)
      );
    }) ?? [];
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
                company={item.companyName}
                position={item.categories[0]?.trim()}
                fromDate={item.startAt}
                toDate={item.endAt}
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
