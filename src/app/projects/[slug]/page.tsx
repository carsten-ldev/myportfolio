import { marked } from "marked";


async function getData (slug: string) {
    
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
            <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: markup }} />
            </div>
        </main>
    )

}