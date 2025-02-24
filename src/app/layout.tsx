import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";

const merriweathersans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio - Carsten J. Lund",
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
          className={`${merriweathersans.variable} antialiased`}
        >
          {children}
        </body>
      </html>
  );
}
