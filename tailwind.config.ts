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
  "base-50": "#373737",
  "base-70": "#414042",
  "base-75": "#221D1F",
  "base-content-bg": "#E3E3E3",
  "base-content-slider": "#4AB8B4",
  "base-content": "#868E98",
  "input-bg": "#F6F6F6",
  "box-slider-bg-text": "#314440",
  "description-text": "#A7A7A7",
  "box-bg-hover": "#302B2D",
  "box-slider-text-l": "#899292",
  "input-text": "#747474",
  "box-slider-bg": "#00B592",
  "link-footer-title": "#B3BAC4",
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
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1720px',
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
