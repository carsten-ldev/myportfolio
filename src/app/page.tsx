import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-merriweather-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="brand-headline font-bold uppercase text-2xl tracking-[1rem]">My Personal 
          <span className="font-black text-[9rem]  leading-[0.9] w-[10ch] uppercase text-teal-500 tracking-tight block -ml-3">Portfolio</span>
        </h1>
       <p className="text-xl font-semibold">Carsten Lund</p>
       <p className="text-sm font-light tracking-wide flex"><FaEnvelope size="1.25rem" className="mr-2" /> carsten@nielsenoglund.dk <FaLinkedin size="1.25rem" className="mr-2 ml-4" /> linkedin.com/in/carsten-L</p>
        
       
            

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        <Link
            className="rounded-full tracking-wide border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="projects"
          >
            View my projects
            </Link>
        </div>
      </main>
      
    </div>
  );
}
