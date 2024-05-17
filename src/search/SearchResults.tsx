import { useContext } from "react"
import { SearchContext } from "./SearchContext"
import { useNpmSearch } from "./useNpmSearch"
import { SearchResultListItem } from "./SearchResultListItem"

export const SearchResults = () => {
    const { searchText } = useContext(SearchContext)

    const { error, isLoading, data } = useNpmSearch(searchText);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return <div>
        {data.map(npmPackage => <SearchResultListItem key={npmPackage.package.name} item={npmPackage}/>)}
    </div>
}