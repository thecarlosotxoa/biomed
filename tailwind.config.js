/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#a7aba7",
        brightColor: "#dd8036",
        bioGreen: "#0e7b64",
        bioBlue: "#365283",
      },
    },
  },
  plugins: [],
};
