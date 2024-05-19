import { PropsWithChildren } from "react"
import styles from "./ErrorMessage.module.scss"

/**
 * Component for displaying an error message
 */
export const ErrorMessage = ({children}: PropsWithChildren) => {
    return <div className={styles.error}>{children}</div>
}