import type { Config } from "tailwindcss";
import { themeConfig } from "./src/theme/themeConfig";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: themeConfig,
  },
  plugins: [],
};
export default config;
