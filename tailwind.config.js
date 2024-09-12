/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#a7aba7",
        brightColor: "#dd8036",
        backgroundColor: "#0e7b64",
      },
    },
  },
  plugins: [],
};
