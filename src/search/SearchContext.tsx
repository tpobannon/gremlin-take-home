import { createContext } from "react"
import { NpmPackageSearchResult } from "./types";

type SearchContextData = {
    queryString?: string;
    setQueryString: (queryString?: string) => void;
    searchResultData?: NpmPackageSearchResult[];
    setSearchResultData: (searchResultData: NpmPackageSearchResult[]) => void;
    forceSearchError: boolean;
}

const defaultContext: SearchContextData = {
    queryString: undefined,
    setQueryString: () => {},
    searchResultData: [],
    setSearchResultData: () => {},
    forceSearchError: false
}

export const SearchContext = createContext<SearchContextData>(defaultContext);