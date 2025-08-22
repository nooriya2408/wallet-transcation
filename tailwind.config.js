/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        qgreen: "#42794A", // custom green
      },
    },
  },
  plugins: [],
};
