import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif'] ,
      'mono': ['Fira Code', 'monospace']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent-color",
      },
    },

  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
