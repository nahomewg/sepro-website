import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        "hero-background": "url('/hero-background.png')",
        "blog-background": "url('/ropes.png')",
        "contact-background": "url('/seb.png')",
      },
      colors: {
        'secondary-white': '#E5E5E5',
        'orange': '#F28A12',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
