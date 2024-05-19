import { useEffect, useState } from "react"
import { NpmPackageSearchResult } from "./types";

const BASE_URL = "https://api.npms.io/v2/search/suggestions";
const ERROR_URL = "https://api.nums.io/v99999";

/**
 * Hook for invoking the NPM search API
 */
export const useNpmSearch = (searchText: string | undefined, forceError: boolean = false): {isLoading: boolean, data: NpmPackageSearchResult[], error: string | undefined} => {
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

        const fullUrl = forceError ? ERROR_URL : `${BASE_URL}?q=${searchText}`

        fetch(fullUrl)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setError(undefined);
            })
            .catch(err => setError(err.toString()))
            .finally(() => setIsLoading(false))

    }, [searchText, forceError])

    return {isLoading, data, error}
}