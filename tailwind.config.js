/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#FFBB00",
      lightYellow: "#FFCF4B",
      darkYellow: "#27AE60",
      lightGray: "#F9F9F9",
      darkGray: "#CEC6C6",
      grayMain: "#263238",
      graySecondary: "#65624C",
    },
    extend: {
      fontSize: {
        h1: ["3.625rem", "1.1"],
        h2: ["2.25rem", "1.1"],
        h3: ["1.5rem", "1.1"],
        h4: ["1.25rem", "1.1"],
        h5: ["1.125rem", "1.1"],
        h6: ["1rem", "1.1"],
      },
    },
  },
  plugins: [],
};
