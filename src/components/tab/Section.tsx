"use client";
import styles from "@/styles/components/tab.module.scss";
import Tab from "./Tab";
import useTab from "@/hooks/useTab";
import { SERVICE_CATEGORY } from "@/utils/const";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

type TabData = {
  data: string[];
  currentIndex: number;
};

function TabSection({ data, currentIndex }: TabData) {
  const router = useRouter();
  const { currentTab, setTab } = useTab({
    initialTab: currentIndex,
    totalTabs: data.length,
  });

  const handleClickTab = (index: number) => {
    setTab(index);
    router.replace(`/?company=${data[index]}`);
  };

  const tabs = useMemo(
    () =>
      data.map((key) => {
        const categoryName = key as keyof typeof SERVICE_CATEGORY;
        return {
          name: SERVICE_CATEGORY[categoryName].name,
          code: SERVICE_CATEGORY[categoryName].code,
          index: data.indexOf(key),
        };
      }),
    [data]
  );

  return (
    <div className={styles.tab__container}>
      {tabs.map(({ name, code, index }) => (
        <Tab
          key={code}
          label={name}
          value={code}
          index={index}
          active={currentTab}
          onClick={() => handleClickTab(index)}
        />
      ))}
    </div>
  );
}

export default TabSection;
