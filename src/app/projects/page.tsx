import { Project } from "../types/github";
import Link from "next/link";

export async function getRepos() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
}



export default async function projectsPage() {

    const repos: Project[] = await getRepos()


    if (!repos.length) {
        return (
            <main className="p-12">
                <h1 className="font-bold uppercase text-xs tracking-[0.5rem]">My Personal 
                    <span className="font-black text-[3rem] leading-[0.9] w-[10ch] uppercase text-teal-500 tracking-tight block -ml-[0.15rem]">
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
        <div className="brand-headline font-bold uppercase text-xs tracking-[0.5rem]">My Personal 
            <span className="font-black text-[2.5rem] leading-[0.8] w-[10ch] uppercase text-teal-500 tracking-tight block -ml-[0.15rem]">
                Portfolio
            </span>
        </div>
        <section className="mt-12">
            <h2 className="font-extrabold text-4xl mb-3">Projects</h2>
            <p className="mb-8">This is a showcase of my starred projects. <br />My github contains a lot of other repos used for trying different things. <br />Click &lsqou;read more&lsquo; to learn more about each project. </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {repos.map(repo => (
                    <article key={repo.id} className="p-6 border-teal-500 border">
                        <p className="text-[0.625rem] font-bold uppercase tracking-widest text-gray-400">{repo.language || 'JavaScript'}</p>
                        <h3 className="text-2xl font-bold mb-1">{repo.name}</h3>
                        <p>{repo.description}</p>
                        <h4 className="font-bold mt-2 mb-1 text-gray-600">Technologies:</h4>
                        {repo.topics.map(topic => (
                            <span key={topic} className="bg-teal-200 text-xs inline-block mr-1 py-[0.125rem] px-2 rounded-full">{topic}</span>
                        ))}
                        <footer>
                            <Link className="inline-block px-3 py-1 rounded-full border border-teal-600 border-solid mt-4" href={`/projects/${repo.name}`}>Read more...</Link>
                        </footer>
                    </article>
                ))
                }
            </div>
        </section>
        </main>
    )
}