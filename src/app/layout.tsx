import type { Metadata } from "next";
import { Besley, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley", // matches your @theme variable
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif", // matches your @theme variable
});

export const metadata: Metadata = {
  title: "Portfolio - Carsten Lund",
  description:
    "A website to display my personal portfolio based on my starred GitHub repositories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${besley.variable} ${sourceSerif.variable} antialiased font-serif`}
      >
        <header className="antialiased px-12">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <div className="text-2xl font-besley font-bold py-6 text-center md:text-left md:py-12">
              Carsten Lund
            </div>
            <nav className="flex gap-10 self-center">
              <Link className="font-serif font-medium" href="/">
                Home
              </Link>
              <Link className="font-serif font-medium" href="/my-projects">
                My Projects
              </Link>
              <Link className="font-serif font-medium" href="/about-me">
                About me
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
