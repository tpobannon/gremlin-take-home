import { createContext } from "react"
import { NpmPackageSearchResult } from "./types";

type SearchContextData = {
    /** The query string to use when executing the package search */
    queryString?: string;
    /** Callback function for setting the query string */
    setQueryString: (queryString?: string) => void;
    /** The list of packages that were returned from the latest search */
    searchResultData?: NpmPackageSearchResult[];
    /** Callback function for setting the list of packages returned from the search */
    setSearchResultData: (searchResultData: NpmPackageSearchResult[]) => void;
    /** Flag indicating whether to force an error during a package search */
    forceSearchError: boolean;
}

const defaultContext: SearchContextData = {
    queryString: undefined,
    setQueryString: () => {},
    searchResultData: [],
    setSearchResultData: () => {},
    forceSearchError: false
}

/** Context information to be used throughout the search page */
export const SearchContext = createContext<SearchContextData>(defaultContext);