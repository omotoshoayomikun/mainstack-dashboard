/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-grey': '#EFF1F6',
        'my-text-color': '#4D5760',
        'my-orange': '#FF5403',
        'my-black': '#31373D',
      }
    },
  },
  plugins: [],
}

