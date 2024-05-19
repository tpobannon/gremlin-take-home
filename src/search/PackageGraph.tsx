import styles from "./PackageGraph.module.scss"

type PackageGraphProps = {
    value: number;
    measure: "quality" | "popularity" | "maintenance"
}

const GRAPH_CLASSNAME = {
    "quality": styles.quality,
    "popularity": styles.popularity,
    "maintenance": styles.maintenance
}

export const PackageGraph = ({measure, value}: PackageGraphProps) => {
    const label = measure.substring(0,1);

    const pct = Math.min(Math.max(0, value), 100);
    const width = `${pct}%`

    const barClasses = `${GRAPH_CLASSNAME[measure]} {styles.graphBar}`;

    return (
        <div className={styles.container}>
            <div className={styles.label}>{label}</div>
            <div className={styles.graphBar}>
                <div className={GRAPH_CLASSNAME[measure]} style={{width: width}}>&nbsp;</div>
            </div>
        </div>
    );

}