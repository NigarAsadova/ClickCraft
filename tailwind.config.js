/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '0px 0px 10px 0px rgba(114,65,255,1)',
      },
    },
  },
  plugins: [],
}

