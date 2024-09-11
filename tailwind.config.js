/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  safelist: [
    {
      pattern: /bg-(red|green|indigo|orange|cyan)-(200)/
    }
  ],
  theme: {
    extend: {}
  },
  plugins: [require("flowbite/plugin")]
};
