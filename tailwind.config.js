/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '0px 0px 10px 0px rgba(114,65,255,1)',
      },
      backgroundImage: {
        'custom-blue-gradient': "linear-gradient(90deg, rgba(98,127,255,1) 0%, rgba(134,91,255,1) 45%)",
        'custom-white-gradient' : "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
      },
      fontFamily:{
        'Poppins' : "'Poppins', serif",
        'Roboto' : '"Roboto", serif',
      }
    },
  },
  plugins: [],
}

