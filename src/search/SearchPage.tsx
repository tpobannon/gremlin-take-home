import { useState } from "react";
import { SearchContext } from "./SearchContext"
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export const SearchPage = () => {
    const [searchText, setSearchText] = useState<string | undefined>(undefined);
    const [searchResultData, setSearchResultData] = useState<any>(undefined);

    return <SearchContext.Provider value={{searchText, setSearchText, searchResultData, setSearchResultData}}>
        <SearchBar/>
        <SearchResults/>
    </SearchContext.Provider>
}