import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px", // Set max width to 1440px
      },
      fontFamily: {
        agTitle: ['"AG Title"', "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFFFFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF",
        BG: "#FFFFFF",
        Text: "#FAFAFA",
        Text1: "#7D8184",
        Text2: "#000000",
        Bottom: "#000000",
        secondary2: "#DB4444",
        Button1: "#00FF66",
        Button2: "#DB4444",
        HoverButton: "#E07575",
        HoverButton2: "#A0BCE0",
        301: "#000000",
        staricon: "#FFAD33",
        circleicon: "#EEFF61",
        radiogreen: "#184A48",
        service:"#2F2E30",
        signupbg:"#CBE4E8",
        aboutimage:"#EB7EA8",
      },
    },
  },
  plugins: [],
} satisfies Config;
