import { useState, ChangeEvent } from "react";
import { SearchContext } from "./SearchContext"
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { NpmPackageSearchResult } from "./types";
import styles from "./SearchPage.module.scss";

/**
 * Main component for the package search page
 */
export const SearchPage = () => {
    const [searchText, setSearchText] = useState<string | undefined>(undefined);
    const [searchResultData, setSearchResultData] = useState<NpmPackageSearchResult[]>([]);
    const [forceSearchError, setForceSearchError] = useState<boolean>(false);

    const handleSearchErrorChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setForceSearchError(e.target.checked)
    }

    return <SearchContext.Provider value={{queryString: searchText, setQueryString: setSearchText, searchResultData, setSearchResultData, forceSearchError}}>
        <div className={styles.info}>
            <p>
                This page is responsive - resizing will do the following:
                <ul>
                    <li>Stack the graphs below the tags when going below 800px</li>
                    <li>Remove the NPM logo when going below 600px</li>
                    <li>Remove the magnifying glass when going below 400px</li>
                </ul>
            </p>
            <p>
                To force an error on search, check the checkbox below
            </p>
            <label>
                <input type="checkbox" onChange={handleSearchErrorChanged} checked={forceSearchError}/>
                Force Search Error
            </label>
        </div>
        <SearchBar/>
        <SearchResults/>
    </SearchContext.Provider>
}