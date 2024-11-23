/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // blue: "#5679b8"
        customSlate: "#32474a", // add your custom color here
        customSlateLight: "#5b6c6e",
        customSlateDark: "#28393b",
        customPink: "#d83162",
        customPdark: "#ad274e",
        customPLight: "#dc4672",
        customGray: "#e6e9ed",
      },
    },
  },
  plugins: [],
};
