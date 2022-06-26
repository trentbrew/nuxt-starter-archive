/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      spacing: {
        '1': '1.5rem',
        '2': '2.25rem',
        '3': '4rem',
      },
    },
  },
  plugins: [require("daisyui")],
}
