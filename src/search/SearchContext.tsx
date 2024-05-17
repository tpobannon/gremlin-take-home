import { createContext } from "react"
import { NpmPackageSearchResult } from "./types";

type SearchContextData = {
    searchText?: string;
    setSearchText: (searchText?: string) => void;
    searchResultData?: NpmPackageSearchResult[];
    setSearchResultData: (searchResultData: NpmPackageSearchResult[]) => void;
}

const defaultContext: SearchContextData = {
    searchText: undefined,
    setSearchText: () => {},
    searchResultData: [],
    setSearchResultData: () => {},
}

export const SearchContext = createContext<SearchContextData>(defaultContext);