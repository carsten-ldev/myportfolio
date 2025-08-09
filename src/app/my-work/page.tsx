import { Project } from "../types/github";
import Link from "next/link";


const GITHUB_API_URL = `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}/starred?sort=updated`

const headers = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
};

async function getRepos(): Promise<Project[]> {
    const response = await fetch(GITHUB_API_URL, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
}


export default async function ProjectsPage() {

    const repos = await getRepos()
    
    if (!repos.length) {
        return (
            <main className="p-12">
                <h1 className="font-bold uppercase text-xs tracking-[0.5rem]">My Personal 
                    <span className="font-black text-[3rem] leading-[0.9] w-[10ch] uppercase text-[#6CE0D6] tracking-tight block -ml-[0.15rem]">
                        Portfolio
                    </span>
                </h1>
                <section className="mt-12">
                    <h2 className="font-extrabold text-4xl mb-3">Projects</h2>
                    <p className="text-red-500 font-bold">Fetch failed. Check logs!</p>
                </section>
            </main>
        );
    }
    

    return (
        <main className="p-12">
        
        <section className="mt-12">
            <h2 className="font-mono font-medium text-4xl mb-3"><span className="text-[#6CE0D6] tracking-widest mr-1">#</span>Projects</h2>
            <p className="mb-8">This is a showcase of my starred projects. <br />My github contains a lot of other repos used for trying different things. <br />Click &lsquo;read more&lsquo; to learn more about each project. </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {repos.map(repo => (
                    <article key={repo.id} className="p-6 border-teal-500 border flex flex-col">
                        <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-gray-300">{repo.language || 'JavaScript'}</p>
                        <h3 className="text-xl font-mono font-bold mt-2 mb-4">
                            <span className="text-[#6CE0D6] tracking-widest mr-1 font-medium">#</span>
                            {repo.name} 
                        {repo.name == "myportfolio" && <span className="text-xs font-bold italic">&nbsp;- this site</span>}
                        </h3>
                        <p>{repo.description}</p>
                        <div className="mb-2">
                        <h4 className="font-mono font-bold mt-4 mb-2 text-white">Technologies:</h4>
                        {repo.topics.map(topic => (
                            <span key={topic} className="bg-[#6CE0D6] text-xs inline-block mr-1 py-[0.125rem] px-2 rounded-full text-gray-700 font-mono font-medium">{topic}</span>
                        ))}
                        </div>
                        <footer className="mt-auto">
                            <Link className="font-sans inline-block px-4 py-1 rounded-full border border-[#6CE0D6] border-solid mt-4" href={`/my-work/${repo.name}`}>Read more</Link>
                            <a className="font-sans inline-block px-4 py-1 rounded-full border border-[#6CE0D6] border-solid mt-4 ml-2" target="_blank" href={repo.html_url}>View on GitHub</a>
                        </footer>
                    </article>
                ))
                }
            </div>
        </section>
        </main>
    )
}