import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 w-4/5 mx-auto mt-12">
        <div>
        <h1 className="text-3xl leading-[4rem] font-mono">Talk is cheap - show me the code</h1>
          <p className="text-sm font-mono italic">- Linus Torvalds.  
       </p>
       </div>

       <p className="font-sans text-xl leading-relaxed md:w-4/5 xl:w-3/5">
Well, here it is! I enjoy creating visually appealing user experiences <br/>
          with the modern JavaScript tech stack.   </p>

          <p className="text-xl leading-8">This is where i showcase projects I am working on. <br/>
          Feel free to have a look around. </p>
      
            

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        <Link
            className="rounded-full tracking-wide border border-solid border-[#6CE0D6] flex items-center justify-center gap-4 hover:bg-[#6CE0D6]  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="my-work"
          >
           Have a look around  <FaArrowRightLong />
            </Link>
        </div>
      </main>
      
  );
}
