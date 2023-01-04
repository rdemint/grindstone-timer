/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/grindstone_hero3.jpg')"
      }
    },
  },
  plugins: [],
}
