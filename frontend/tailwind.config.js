/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#522583",
        whiteColor: "#FFFFFF",
        highlight: "#E53E3E",
      },
      fontFamily: {
        Aljazeera: ["Aljazeera", "sans-serif"],
      },
      listStyleType: {
        "arabic-indic": "arabic-indic",
      },
      variants: {
        extend: {
          maxHeight: ["group-hover"], // Enable maxHeight on hover
        },
      },
    },
  },
  plugins: [],
};
