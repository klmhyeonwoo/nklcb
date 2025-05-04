"use client";
import styles from "@/styles/components/card.module.scss";
import icon_arrow from "../../../public/icon/arrow_white.svg";
import icon_calendar from "../../../public/icon/calendar.svg";
import icon_calendar_light from "../../../public/icon/calendar_light.svg";
import icon_cube from "../../../public/icon/cube.svg";
import icon_cube_light from "../../../public/icon/cube_light.svg";

import Image from "next/image";
import { api } from "@/api";
import { formatDate, scaledPositionName } from "@/utils/common";

type cardType = {
  id: number;
  title: string;
  company: string;
  position: string;
  fromDate: string;
  toDate: string;
  link?: string;
};

async function pathToRecruitmentNotice({ id }: { id: number }) {
  const { data } = await api.get(`/recruitment-notices/${id}/redirect`);
  return data;
}

function CardContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.card__wrapper}>{children}</div>;
}

function CardContent({
  id,
  title,
  company,
  position,
  fromDate,
  toDate,
  link,
}: cardType) {
  const handleCardClick = (id: number) => {
    if (link) {
      window.open(link, "_blank");
    }
    if (id) {
      pathToRecruitmentNotice({ id })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  return (
    <div className={styles.card__container}>
      <span className={styles.card__company}> {company} </span>
      <div className={styles.card__title__container}>
        <Image
          src={icon_cube}
          width={23}
          height={23}
          data-theme="light"
          alt="해당 공고의 제목 아이콘"
        />
        <Image
          src={icon_cube_light}
          width={23}
          height={23}
          data-theme="dark"
          alt="해당 공고의 날짜 아이콘"
        />
        <span className={styles.card__title}> {title}</span>
      </div>
      <div className={styles.card__date__container}>
        <Image
          src={icon_calendar}
          width={23}
          height={23}
          data-theme="light"
          alt="해당 공고의 날짜 아이콘"
        />
        <Image
          src={icon_calendar_light}
          width={23}
          height={23}
          data-theme="dark"
          alt="해당 공고의 날짜 아이콘"
        />
        <span className={styles.card__timestamp}>
          {fromDate && toDate
            ? `${formatDate(fromDate)} ~ ${formatDate(toDate)}`
            : "해당 공고는 상시 채용이에요."}
        </span>
      </div>
      <span className={styles.card__position}>
        {position
          ? `${scaledPositionName(position)} 포지션으로 채용하고있어요.`
          : `해당 공고는 포지션이 명시되어 있지 않아요.`}
      </span>
      <div
        className={styles.card__path__container}
        onClick={() => handleCardClick(id)}
      >
        <Image
          width={12}
          height={12}
          src={icon_arrow}
          alt="해당 모집 공고가 관심있다면 클릭해보세요"
        />
        <span> 해당 모집 공고로 이동할 수 있어요 </span>
      </div>
    </div>
  );
}

const Card = Object.assign(CardContainer, {
  CardContent,
});

export default Card;
