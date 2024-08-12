import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    colors: {
      primary: "#24ce70",
      "primary-dark": "#009c43",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
