"use client";
import styles from "@/styles/components/input.module.scss";
import Select from "./Select";

type SectionType = {
  data: Set<string>;
};

function SearchSection({ data }: SectionType) {
  return (
    <div className={styles.input__section}>
      <Select data={data} placeholder="해당 공고에서 제공하는 필터예요" />
    </div>
  );
}

export default SearchSection;
