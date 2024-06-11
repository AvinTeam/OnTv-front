import type { Config } from "tailwindcss";

type ColorObject = {
  [key: string]: string;
};

export const tailwindColors: ColorObject = {
  current: "currentColor",
  transparent: "transparent",
  white: "#FFFFFF",
  primary: "#3899A0",
  "primary-content": "#FFFFFF",
  secondary: "#C7E24E",
  "secondary-content": "#FFFFFF",
  "base-25": "#414042",
  "base-50": "#373737",
  "base-75": "#221D1F",
  "base-content-title": "#39989F",
  "base-content-detail": "#868E98",
  "gradient-first": "#3899A0",
  "gradient-second": "#C7E24E",
};

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: tailwindColors,
    // extend: {
    // },
  },
  plugins: [],
};
export default config;
