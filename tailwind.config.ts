import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        "hero-background": "url('/hero-background.png')",
      },
      colors: {
        'secondary-white': '#E5E5E5',
        'orange': '#F28A12',
      }
    },
  },
  plugins: [],
};
export default config;
