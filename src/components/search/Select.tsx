"use client";
import React, { Fragment, useRef } from "react";
import icon_arrow from "../../../public/icon/arrow_gray.svg";
import icon_airplane from "../../../public/icon/airplane.svg";
import icon_quit from "../../../public/icon/quit.svg";
import Image from "next/image";
import { scaledPositionName } from "@/utils/common";
import styles from "@/styles/components/input.module.scss";
import { useFilter } from "@/hooks/useFilter";
import useClickOutside from "@/hooks/useClickOutside";

type SelectType = {
  data: Set<string>;
  placeholder: string;
};

function Select({ data, placeholder, ...props }: SelectType) {
  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside({
    ref: selectRef as React.RefObject<HTMLElement>,
    callback: () => {
      setIsOpenFilter(false);
    },
  });
  const {
    isOpenFilter,
    selectedGlobalFilter,
    setIsOpenFilter,
    setSelectedGlobalFilter,
    removeSelectedFilter,
  } = useFilter();

  const handleOpenSelect = () => {
    setIsOpenFilter(true);
  };

  const handleCloseSelect = (item: string) => {
    setIsOpenFilter(false);
    setSelectedGlobalFilter(item);
  };

  return (
    <Fragment>
      <div className={styles.select__box} onClick={handleOpenSelect} {...props}>
        <Image src={icon_airplane} alt={placeholder} width={16} height={16} />
        {selectedGlobalFilter ? (
          <span data-selected={true}>
            {scaledPositionName(selectedGlobalFilter)}
          </span>
        ) : (
          <span data-selected={false}>{placeholder}</span>
        )}
        {selectedGlobalFilter ? (
          <Image
            src={icon_quit}
            alt={placeholder}
            width={12}
            height={12}
            onClick={removeSelectedFilter}
          />
        ) : (
          <Image src={icon_arrow} alt={placeholder} width={18} height={18} />
        )}
      </div>
      {isOpenFilter && (
        <div className={styles.search__container} ref={selectRef}>
          {Array.from(data).map((item) => (
            <div
              key={item}
              className={styles.item__wrapper}
              onClick={() => handleCloseSelect(item)}
            >
              <span> {scaledPositionName(item)} </span>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default Select;
