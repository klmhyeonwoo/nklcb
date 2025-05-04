"use client";
import styles from "@/styles/components/tab.module.scss";
import Tab from "./Tab";
import useTab from "@/hooks/useTab";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useSetAtom } from "jotai";
import { SELECTED_COMPANY_STORE } from "../store";

type companiesType = {
  companyCode: string;
  name: string;
};

type TabData = {
  data: companiesType[];
  currentIndex?: number;
};

const setCurrentIndex = (index: number) => {
  return Math.max(index, 0);
};

const getCompanyCodeArray = (data: companiesType[]) => {
  return data.map((company) => company?.companyCode) ?? [];
};

function TabSection({ data, currentIndex }: TabData) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setGlobalCompanyInfo = useSetAtom(SELECTED_COMPANY_STORE);
  const company = searchParams.get("company") || "NAVER";

  const { currentTab, setTab } = useTab({
    initialTab: setCurrentIndex(
      currentIndex ?? getCompanyCodeArray(data).indexOf(company)
    ),
    totalTabs: data.length,
  });

  const handleClickTab = async (index: number) => {
    if (index === currentTab) return;
    setTab(index);
    setGlobalCompanyInfo(data[index]);
    const params = new URLSearchParams(searchParams.toString());
    params.set("company", data[index].companyCode);
    router.push(`/?${params.toString()}`);
  };

  const tabs = useMemo(
    () =>
      data.map((item, index) => {
        return {
          name: item.name,
          code: item.companyCode,
          id: index,
        };
      }),
    [data]
  );

  return (
    <div className={styles.tab__container}>
      {tabs.map(({ name, code, id }) => (
        <Tab
          key={code}
          label={name}
          value={code}
          index={id}
          active={currentTab}
          onClick={() => handleClickTab(id)}
        />
      ))}
    </div>
  );
}

export default TabSection;
