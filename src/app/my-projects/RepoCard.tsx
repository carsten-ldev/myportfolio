import { Repo } from "../types/github";
import Link from "next/link";

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="p-6 border-accent border-2 border flex flex-col">
      <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-gray-500">
        {repo.language || "JavaScript"}
      </p>
      <h3 className="text-xl font-besley font-extrabold text-accent mt-2 mb-4">
        {repo.name}
        {repo.name == "myportfolio" && (
          <span className="text-xs font-bold italic">&nbsp;- this site</span>
        )}
      </h3>
      <p>{repo.description}</p>
      <div className="mb-2">
        <h4 className="font-besley font-bold text-accent mt-4 mb-2">
          Technologies:
        </h4>
        {repo.topics.map((topic) => (
          <span
            key={topic}
            className="bg-accent-light text-xs inline-block mr-1 py-0.5 px-2 rounded-full font-mono font-medium"
          >
            {topic}
          </span>
        ))}
      </div>
      <footer className="mt-auto pt-4 flex flex-col gap-4 sm:flex-row sm:gap-2 ">
        <Link
          className="font-serif inline-block px-4 py-1 rounded-full  border-accent border-2 hover:bg-accent hover:text-white self-start"
          href={`/my-work/${repo.name}`}
        >
          Read more
        </Link>
        <a
          className="font-serif inline-block px-4 py-1 rounded-full  border-accent border-2 hover:bg-accent hover:text-white self-start"
          target="_blank"
          href={repo.html_url}
        >
          View on GitHub
        </a>
      </footer>
    </article>
  );
}
