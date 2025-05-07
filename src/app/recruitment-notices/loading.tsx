import React from "react";
import styles from "@/styles/components/loading.module.scss";
import icon_clapping from "../../../public/icon/clapping.gif";
import Image from "next/image";

function Loading() {
  return (
    <div className={styles.loading__container}>
      <Image src={icon_clapping} alt="클랩 아이콘" width={80} height={80} />
      <span> 선택하신 공고로 이동을 하고 있어요 </span>
    </div>
  );
}

export default Loading;
