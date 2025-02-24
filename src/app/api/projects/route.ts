import { NextResponse } from "next/server";
import { Project } from "@/app/types/github";

export async function GET(): Promise<NextResponse<Project[] | { error: string }>> {

    const GITHUB_API_URL = `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}/starred?sort=updated`

    const headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    };

    try {
        const response = await fetch(GITHUB_API_URL, { headers });
        if (!response.ok) throw new Error("Failed to fetch data");

        const repos = await response.json() as Project[];

        const formattedRepos: Project[] = repos.map(repo => ({
            id: repo.id,
            name: repo.name,
            language: repo.language,
            description: repo.description,
            url: repo.url,
            topics: repo.topics || [],
        }));

        return NextResponse.json(formattedRepos);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message });
    }
}
