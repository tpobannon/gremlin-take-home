import { NpmPackageSearchResult } from "./types"

type SearchResultListItemProps = {
    item: NpmPackageSearchResult
}

export const SearchResultListItem = ({item}: SearchResultListItemProps) => {
    console.log(item);
    return (
        <div>
            <div><a href={item.package.links.npm}>{item.package.name}</a></div>
            {item.package.description}
        </div>
    );
}