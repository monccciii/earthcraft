/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mcbg1': "url('/bg1.jpg')",
        'mcbg2': "url('/bg2.jpg')"
      }
    },
  },
  plugins: [],
}
