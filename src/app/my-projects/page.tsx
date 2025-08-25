import { Repo } from "../types/github";
import RepoCard from "./RepoCard";

const GITHUB_API_URL = `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}/starred?sort=updated`;

const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
};

async function getRepos(): Promise<Repo[]> {
  const response = await fetch(GITHUB_API_URL, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  if (!repos.length) {
    return (
      <main className="mx-6 sm:w-4/5 sm:mx-auto my-12">
        <h1 className="font-bold uppercase text-xs tracking-[0.5rem]">
          My Personal
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
    <main className="mx-6 sm:mx-12 my-12">
      <section className="mt-12">
        <h2 className="font-besley font-extrabold text-accent text-4xl mb-3">
          My Projects
        </h2>
        <p className="mb-8">
          This is a showcase of my starred projects. <br />
          My github contains a lot of other repos used for trying different
          things. <br />
          Click &lsquo;read more&lsquo; to learn more about each project.{" "}
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>
    </main>
  );
}
