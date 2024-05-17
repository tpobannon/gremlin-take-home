import { useEffect, useState } from "react"
import { NpmPackageSearchResult } from "./types";

const BASE_URL = "https://api.npms.io/v2/search/suggestions"

export const useNpmSearch = (searchText: string | undefined): {isLoading: boolean, data: NpmPackageSearchResult[], error: string | undefined} => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] =  useState<string | undefined>(undefined);
    const [data, setData] = useState<NpmPackageSearchResult[]>([]);

    useEffect(() => {
        if (!searchText) {
            setIsLoading(false);
            setData([]),
            setError(undefined);
            return;
        }

        setIsLoading(true);

        fetch(`${BASE_URL}?q=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setError(undefined);
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))

    }, [searchText])

    return {isLoading, data, error}
}