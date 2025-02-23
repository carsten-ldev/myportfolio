export type Project = {
    id: number;
    name: string;
    language: string;
    description: string;
    url: string;
    topics: string[];
}

export type RepoResponse = {
    error?: string;
    data?: Project[];
}