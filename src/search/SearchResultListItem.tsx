import { useMemo } from "react"
import { NpmPackageSearchResult } from "./types"
import { PackageGraph } from "./PackageGraph"
import { getHowFarInPast } from "../util/date-util"
import styles from "./SearchResultListItem.module.scss"

type SearchResultListItemProps = {
    /** The search result item to be displayed by this component */
    item: NpmPackageSearchResult
}

/**
 * Component for displaying a single package in the search results
 */
export const SearchResultListItem = ({item}: SearchResultListItemProps) => {
    
    const publishedTime = useMemo(() => {
        return getHowFarInPast(item.package.date);
    }, [item.package.date])

    return (
        <div className={styles.listItem}>
            <div><a href={item.package.links.npm} className={styles.packageLink}>{item.package.name}</a></div>
            <div>{item.package.description}</div>
            <div className={styles.details}>
                <div className={styles.detailInfo}>
                    {item.package.keywords && 
                        <ul className={styles.tagList}>
                            {item.package.keywords.map(keyword => <li className={styles.tag} key={keyword}>{keyword}</li>)}
                        </ul>
                    }
                    <div className={styles.publishingInfo}>
                        <span className={styles.publisher}>{item.package.publisher.username}</span>
                        <span>published {item.package.version}</span>
                        &bull;
                        <span>{publishedTime}</span>
                    </div>
                </div>
                <div className={styles.detailGraphs}>
                    <PackageGraph measure="popularity" value={item.score.detail.popularity * 100}/>
                    <PackageGraph measure="quality" value={item.score.detail.quality * 100}/>
                    <PackageGraph measure="maintenance" value={item.score.detail.maintenance * 100}/>
                </div>
            </div>
        </div>
    );
}