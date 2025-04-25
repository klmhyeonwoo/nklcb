"use client";

import styles from "@/styles/components/card.module.scss";
import icon_arrow from "../../../public/icon/arrow.svg";
import icon_calendar from "../../../public/icon/calendar.svg";
import icon_calendar_light from "../../../public/icon/calendar_light.svg";
import icon_cube from "../../../public/icon/cube.svg";
import icon_cube_light from "../../../public/icon/cube_light.svg";

import Image from "next/image";

type cardType = {
  title: string;
  company: string;
  position: string;
  employType: string;
  fromDate: string;
  toDate: string;
  link: string;
};

function CardContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.card__wrapper}>{children}</div>;
}

function CardContent({
  title,
  company,
  position,
  fromDate,
  toDate,
  employType,
  link,
}: cardType) {
  const handleCardClick = () => {
    window.open(link, "_blank");
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
            ? `${fromDate} ~ ${toDate}`
            : "해당 공고는 상시 채용이에요."}
        </span>
      </div>
      <span className={styles.card__position}>
        {position} 포지션의 {employType}직으로 뽑고 있어요.
      </span>
      <div className={styles.card__path__container} onClick={handleCardClick}>
        <Image
          width={12}
          height={12}
          src={icon_arrow}
          alt="해당 모집 공고가 관심있다면 클릭해보세요"
        />
        <span> 해당 모집 공고가 관심있다면 여기를 클릭해보세요 </span>
      </div>
    </div>
  );
}

const Card = Object.assign(CardContainer, {
  CardContent,
});

export default Card;
