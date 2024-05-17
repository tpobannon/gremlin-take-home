import { useRef, useContext, FormEvent } from "react";
import { SearchContext } from "./SearchContext";

export const SearchBar = () => {
    const {setSearchText} = useContext(SearchContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const search = (e: FormEvent) => {
        e.preventDefault();
        setSearchText(inputRef.current?.value);
    }

    return (
        <form onSubmit={search}>
            <input name="searchText" ref={inputRef}/>
            <button type="submit">Search</button>
        </form>
    )
}