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
  "base-70": "#414042",
  "base-75": "#221D1F",
  "base-content-title": "#39989F",
  "base-content-bg": "#E3E3E3",
  "base-content": "#868E98",
  "input-bg": "#F6F6F6",
  "input-text": "#747474",
  "box-slider-bg": "#00B592",
  "gradient-first": "#63D2D3",
  "gradient-second": "#C7E24E",
};

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: tailwindColors,
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
