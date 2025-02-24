async function getData (slug: string) {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${slug}`);

    if (!response.ok) {
      throw new Error("Failed to fetch repository");
    }
  
    return response.text();
    
}

export default async function repoPage( {params}: {params: Promise<{ slug: string }>}) {

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