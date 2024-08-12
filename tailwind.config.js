import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    colors: {
      "my-orange": "#f57903",
    },
    fontSize: {
      intro: ["30px", { lineHeight: "45px" }],
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
