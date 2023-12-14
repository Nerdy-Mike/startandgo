import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      accent: {
        default: "#0B63E5",
        dark: "#0748A9",
        light: "#4990F9",
      },
      text: {
        default: "#0B63E5",
        dark: "#42526B",
      },
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        50: "#F5F6F7",
        100: "#E6E8EC",
        200: "#CDD2D8",
        300: "#B4BBC5",
        400: "#9BA4B1",
        500: "#838E9E",
        600: "#6A778B",
        700: "#42526B",
        800: "#243752",
        900: "#061C3D",
      },
    },
  },
  plugins: [],
};
export default config;
