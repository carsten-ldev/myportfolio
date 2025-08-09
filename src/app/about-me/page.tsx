
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProfilePage() {

    return (
      <main className="flex flex-col gap-4 w-4/5 mx-auto mt-12">
        <h2 className="font-mono font-medium text-4xl md:mb-3"><span className="text-[#6CE0D6] tracking-widest mr-1">#</span>About me</h2>

        <p className="font-sans text-xl leading-relaxed md:w-4/5 xl:w-3/5">
            I am an experienced web developer with extensive knowledge of the modern JavaScript tech stack. 
        </p>
        <p className="font-sans text-xl leading-relaxed md:w-4/5 xl:w-3/5">I enjoy creating visually appealing user interfaces that are performant, accessible, and easy to use. </p>
        <p className="font-sans text-xl leading-relaxed md:w-4/5 xl:w-3/5">I’m particularly curious about how AI is transforming the way we work in frontend development &ndash; shaping not only our workflows and the solutions we build, but also how users will interact with the web in the future.</p>

        <h3 className="font-mono text-2xl font-semibold mt-4 mb-2">Feel free to reach out</h3>
       <p className="text-lg font-normal tracking-wide flex mb-4">
        <FaEnvelope size="1.5rem" className="mr-2" /> <Link href="mailto:hello@carstenl.dev">hello@carsten-l.dev</Link>
       <FaLinkedin size="1.5rem" className="mr-2 ml-8" /><Link href="https://linkedin.com/in/carsten-l" target="blank">linkedin.com/in/carsten-l</Link> 
       <FaGithub size="1.5rem" className="mr-2 ml-8" /> <Link href="https://github.com/clurts" target="blank">github.com/clurts</Link> 
       </p>
        
       
            
        </main>
    )
}
