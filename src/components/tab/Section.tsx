"use client";
import styles from "@/styles/components/tab.module.scss";
import Tab from "./Tab";
import useTab from "@/hooks/useTab";
import { SERVICE_CATEGORY } from "@/utils/const";
import { useRouter } from "next/navigation";

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
