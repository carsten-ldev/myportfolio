import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";



const nunitosans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio - Carsten Lund",
  description: "A website to display my personal portfolio based on my starred GitHub repositories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        
        <body
        
          className={`${nunitosans.variable} antialiased font-sans`}
        >
          <header className="px-12">
            <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <div className="text-2xl font-extrabold py-6 text-center md:text-left md:py-12">Carsten Lund </div>
                    <nav className="flex gap-10 self-center">
            <Link className="font-mono font-medium" href="/">Home</Link>
            <Link className="font-mono font-medium" href="/my-work">My work</Link>
            <Link className="font-mono font-medium" href="/about-me">About me</Link>

          </nav>
          </div>
        </header>
          {children}
        </body>
      </html>
  );
}
