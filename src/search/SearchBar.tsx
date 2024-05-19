import { useState, useContext, FormEvent, ChangeEvent } from "react";
import { SearchContext } from "./SearchContext";
import styles from "./SearchBar.module.scss";
import npmLogo from "../assets/npm-logo.svg"
import magGlass from "../assets/mag-glass.svg"

export const SearchBar = () => {
    const [searchText, setSearchText] = useState<string>("")
    const {setQueryString} = useContext(SearchContext);

    const search = (e: FormEvent) => {
        e.preventDefault();
        setQueryString(searchText)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value)
    }

    return (
        <form onSubmit={search} className={styles.searchBar}>
            <img src={npmLogo} className={styles.npmLogo}/>
            <span className={styles.searchField}>
                <img src={magGlass} className={styles.magGlass}/>
                <input type="search" name="searchText" onChange={handleChange} className={styles.searchInput} placeholder="Search packages"/>
            </span>
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>
    )
}