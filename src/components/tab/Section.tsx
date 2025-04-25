"use client";
import styles from "@/styles/components/tab.module.scss";
import Tab from "./Tab";
import useTab from "@/hooks/useTab";
import { SERVICE_CATEGORY } from "@/utils/const";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type TabData = {
  data: string[];
  currentIndex: number;
};

function TabSection({ data, currentIndex }: TabData) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { currentTab, setTab } = useTab({
    initialTab: currentIndex,
    totalTabs: data.length,
  });

  const handleClickTab = useCallback((index: number) => {
    // 현재 선택된 탭과 다를 때만 라우팅 변경
    if (currentTab !== index) {
      setTab(index);
      
      // URL 파라미터 변경
      const params = new URLSearchParams(searchParams.toString());
      params.set("company", data[index]);
      router.push(`/?${params.toString()}`);
    }
  }, [currentTab, data, router, searchParams, setTab]);

  return (
    <div className={styles.tab__container}>
      {data.map((key, index) => {
        const categoryName = key as keyof typeof SERVICE_CATEGORY;
        const name = SERVICE_CATEGORY[categoryName].name;
        const code = SERVICE_CATEGORY[categoryName].code;
        return (
          <Tab
            key={index}
            label={name}
            value={code}
            index={index}
            active={currentTab}
            onClick={() => handleClickTab(index)}
          />
        );
      })}
    </div>
  );
}

export default TabSection;
