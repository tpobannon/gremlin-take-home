export type NpmPackageSearchResult = {
    package: {
        name: string;
        description: string;
        links: {
            npm: string;
        }
        keywords: string[];
        publisher: {
            username: string;
        }
        version: string;
        date: string;
    }
    score: {
        detail: {
            quality: number;
            popularity: number;
            maintenance: number;
        }
    }
}