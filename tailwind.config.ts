import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        "soft-gray": "#F7F9FC",
        "mid-gray": "#CBD4E1",
        teal: "#1C9393",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 35, 52, 0.10)",
        subtle: "0 10px 25px rgba(15, 35, 52, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
