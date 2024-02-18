const { nextui } = require("@nextui-org/react");
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "tow-primary": "#362726",
        "tow-secondary": "#edceab",
        "neutral-primary": "#362726",
        "neutral-secondary": "#fff5ea",
        "action-secondary": "#edceab",
        "action-primary-light": "#C67C4E",
      },
      textColor: {
        "tow-primary": "#362726",
        "tow-secondary": "#edceab",
        secondary: "#433838",
        "primary-light": "#edceab",
        "tow-muted": "#6c5a45",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
