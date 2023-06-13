/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fugasOne: ["fugasOne", "serif"],
        typograhica:["typograhica","sanserif"],
        minionPro:["minionPro","serif"]
      }
    }
  },
  corePlugins: {
    preflight: false,
  },
};
