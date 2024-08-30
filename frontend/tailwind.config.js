/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#522583",
        whiteColor: "#FFFFFF",
      },
      fontFamily: {
        Aljazeera: ["Aljazeera", "sans-serif"], // Add your custom font here
      },
    },
  },
  plugins: [],
};
