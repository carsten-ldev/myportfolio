import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import profileimg from "./assets/profile-img.jpeg"

export default function Home() {
  return (
      <main className="flex flex-col gap-8 mx-6 sm:w-4/5 sm:mx-auto my-12">
        <div>
        <h1 className="text-2xl lg:text-3xl font-mono text-balance">Talk is cheap - show me the code</h1>
          <p className="text-sm font-mono italic mt-1">- Linus Torvalds.  
       </p>
       </div>

                    <div className="rounded-full overflow-hidden w-64 ml-[10%] sm:ml-[25%] xl:absolute xl:top-1/4 xl:right-36">
            <Image src={profileimg} alt="Carsten Lund" />
            </div>

      <p className="font-sans text-xl leading-relaxed md:w-4/5 xl:w-3/5">
      I&apos;m Carsten, a frontend developer who currently has the amazing privilege of inspiring future Danish frontend developers. I enjoy creating visually appealing user experiences with the modern JavaScript tech stack.</p>
            
                 
          <p className="text-xl leading-8">And here it is. The code. On this site I showcase some of my projects.</p>

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
