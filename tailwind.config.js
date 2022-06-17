/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/js/**/*.vue", "./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  purge: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
