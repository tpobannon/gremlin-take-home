import { useContext } from "react"
import { SearchContext } from "./SearchContext"
import { useNpmSearch } from "./useNpmSearch"
import { SearchResultListItem } from "./SearchResultListItem"
import { ErrorMessage } from "../common/ErrorMessage"

/**
 * Main component for displaying the search results for the package search page
 */
export const SearchResults = () => {
    const { queryString: searchText, forceSearchError } = useContext(SearchContext)

    const { error, isLoading, data } = useNpmSearch(searchText, forceSearchError);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>
    }

    return <div>
        {data.map(npmPackage => <SearchResultListItem key={npmPackage.package.name} item={npmPackage}/>)}
    </div>
}