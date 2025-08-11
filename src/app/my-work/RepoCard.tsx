import { Repo } from "../types/github";
import Link from "next/link";

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="p-6 border-teal-500 border flex flex-col">
      <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-gray-300">
        {repo.language || "JavaScript"}
      </p>
      <h3 className="text-xl font-mono font-bold mt-2 mb-4">
        <span className="text-[#6CE0D6] tracking-widest mr-1 font-medium">
          #
        </span>
        {repo.name}
        {repo.name == "myportfolio" && (
          <span className="text-xs font-bold italic">&nbsp;- this site</span>
        )}
      </h3>
      <p>{repo.description}</p>
      <div className="mb-2">
        <h4 className="font-mono font-bold mt-4 mb-2 text-white">
          Technologies:
        </h4>
        {repo.topics.map((topic) => (
          <span
            key={topic}
            className="bg-[#6CE0D6] text-xs inline-block mr-1 py-0.5 px-2 rounded-full text-gray-700 font-mono font-medium"
          >
            {topic}
          </span>
        ))}
      </div>
      <footer className="mt-auto pt-4 flex flex-col gap-4 sm:flex-row sm:gap-2 ">
        <Link
          className="font-sans inline-block px-4 py-1 rounded-full border border-[#6CE0D6] border-solid self-start"
          href={`/my-work/${repo.name}`}
        >
          Read more
        </Link>
        <a
          className="font-sans inline-block px-4 py-1 rounded-full border border-[#6CE0D6] border-solid self-start"
          target="_blank"
          href={repo.html_url}
        >
          View on GitHub
        </a>
      </footer>
    </article>
  );
}
