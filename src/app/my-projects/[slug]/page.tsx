import { marked } from "marked";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

async function getData(slug: string): Promise<string> {
  const GITHUB_API_URL = `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}/${slug}/contents/README.md`;

  const headers = {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
  };

  const response = await fetch(GITHUB_API_URL, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch repository");
  }

  const readmeText = await response.json();
  const markdown = Buffer.from(readmeText.content, "base64").toString("utf-8"); // ✅ Decode Base64

  return marked(markdown);
}

export default async function RepoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markup = await getData(slug);

  return (
    <main className="p-12">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full tracking-wide border-2 border-accent flex items-center justify-center gap-4 hover:bg-accent hover:text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/my-work"
        >
          <FaArrowLeftLong /> Back to projects
        </Link>
      </div>

      <div className="github-readme mt-12">
        <div dangerouslySetInnerHTML={{ __html: markup }} />
      </div>
    </main>
  );
}
