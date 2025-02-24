import { NextRequest, NextResponse } from "next/server";
import { marked } from "marked";

export async function GET(
    request: NextRequest, 
    { params }: { params: { slug: string } }
) {    
    const { slug } = await params
    
    const GITHUB_API_URL = `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}/${slug}/contents/README.md`

    const headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    };

    try {
        const response = await fetch(GITHUB_API_URL, { headers });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        
        const data = await response.json(); // ✅ Get JSON response
        const markdown = Buffer.from(data.content, "base64").toString("utf-8"); // ✅ Decode Base64
        const readmeHtml = await marked(markdown) // convert markdown to html
        
        return new NextResponse(readmeHtml, { status: 200, headers: { "Content-Type": "text/html" } });

      
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}















        