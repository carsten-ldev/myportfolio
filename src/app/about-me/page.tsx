import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="flex flex-col gap-4 mx-6 sm:w-4/5 sm:mx-auto my-12">
      <h2 className="font-besley font-extrabold text-4xl text-accent md:mb-3">
        About Me
      </h2>

      <p className="font-serif text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        I am an experienced web developer with extensive knowledge of the modern
        JavaScript tech stack.
      </p>
      <p className="font-serif text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        I enjoy creating visually appealing user interfaces that are performant,
        accessible, and easy to use.{" "}
      </p>
      <p className="font-serif text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        I’m particularly curious about how AI is transforming the way we work in
        frontend development &ndash; shaping not only our workflows and the
        solutions we build, but also how users will interact with the web in the
        future.
      </p>

      <h3 className="font-besley text-2xl font-extrabold text-accent mt-4 mb-2 text-balance">
        Feel free to reach out
      </h3>
      <p className="text-lg font-normal tracking-wide flex flex-col lg:flex-row gap-2 lg:gap-8 mb-4">
        <span className="flex">
          <FaEnvelope size="1.5em" className="mr-2" /> hello@carsten-l.dev
        </span>
        <span className="flex">
          <FaLinkedin size="1.5em" className="mr-2 " />
          <Link href="https://linkedin.com/in/carsten-l" target="blank">
            linkedin.com/in/carsten-l
          </Link>
        </span>
        <span className="flex">
          <FaGithub size="1.5em" className="mr-2" />{" "}
          <Link href="https://github.com/clurts" target="blank">
            github.com/clurts
          </Link>{" "}
        </span>
      </p>
    </main>
  );
}
