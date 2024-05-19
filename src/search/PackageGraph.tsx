import styles from "./PackageGraph.module.scss"

type PackageGraphProps = {
    /** The score for the measure being displayed.  This is expected to be a number between 0 and 100 */
    value: number;
    /** The measure that this score represents */
    measure: "quality" | "popularity" | "maintenance"
}

const GRAPH_CLASSNAME = {
    "quality": styles.quality,
    "popularity": styles.popularity,
    "maintenance": styles.maintenance
}

/**
 * Component for displaying a single score graph in the package search results
 */
export const PackageGraph = ({measure, value}: PackageGraphProps) => {
    const label = measure.substring(0,1);

    const pct = Math.min(Math.max(0, value), 100);
    const width = `${pct}%`

    return (
        <div className={styles.container}>
            <div className={styles.label}>{label}</div>
            <div className={styles.graphBar}>
                <div className={GRAPH_CLASSNAME[measure]} style={{width: width}}>&nbsp;</div>
            </div>
        </div>
    );

}