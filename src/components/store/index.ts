import { atom } from "jotai";

const CATEGORY_STORE = atom<string | null>(null);
const SEARCH_KEYWORD_STORE = atom<string>("");
const SELECTED_COMPANY_STORE = atom<{
  companyCode: string;
  name: string;
}>({
  companyCode: "",
  name: "",
});

export { CATEGORY_STORE, SEARCH_KEYWORD_STORE, SELECTED_COMPANY_STORE };
