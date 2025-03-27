import { marked } from "marked";
import Link from "next/link";


async function getData (slug: string): Promise<string> {
    
    const GITHUB_API_URL = `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}/${slug}/contents/README.md`

    const headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    };

    const response = await fetch(GITHUB_API_URL, { headers });

    if (!response.ok) {
      throw new Error("Failed to fetch repository");
    }
  
    const readmeText = await response.json();
    const markdown = Buffer.from(readmeText.content, "base64").toString("utf-8"); // ✅ Decode Base64

    return marked(markdown);
        
    
}

export default async function RepoPage( {params}: {params: Promise<{ slug: string }>}) {

    const { slug } = await params;
    const markup = await getData(slug)
    
    
    return (
        <main className="p-12">
            <div className="brand-headline font-bold uppercase text-xs tracking-[0.5rem]">My Personal 
                <span className="font-black text-[2.5rem] leading-[0.8] w-[10ch] uppercase text-teal-500 tracking-tight block -ml-[0.15rem]">
                    Portfolio
                </span>
            </div>
            <Link className="inline-block px-3 py-1 rounded-full border border-teal-600 border-solid mt-4" href={`/projects`}> &larr;&nbsp;&nbsp;Back to projects</Link>
            <div className="github-readme mt-12">
                <div dangerouslySetInnerHTML={{ __html: markup }} />
            </div>
        </main>
    )

}