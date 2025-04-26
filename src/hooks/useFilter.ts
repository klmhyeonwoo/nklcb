import { CATEGORY_STORE } from "@/components/store";
import { useAtom } from "jotai";
import { useState } from "react";

export function useFilter() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedGlobalFilter, setSelectedGlobalFilter] = useAtom<
    string | null
  >(CATEGORY_STORE);

  const removeSelectedFilter = () => {
    setSelectedGlobalFilter(null);
  };

  return {
    isOpenFilter,
    selectedGlobalFilter,
    setIsOpenFilter,
    setSelectedGlobalFilter,
    removeSelectedFilter,
  };
}
