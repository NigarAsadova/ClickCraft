/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '0px 0px 10px 0px rgba(114,65,255,1)',
        'purple-box-shadow' : '0px 4px 100px 0px #664DFF33',
      },
      backgroundImage: {
        'custom-blue-gradient': "linear-gradient(90deg, rgba(98,127,255,1) 0%, rgba(134,91,255,1) 45%)",
        'custom-white-gradient' : "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
        'saly-gradient' : "radial-gradient(217.23% 100.08% at 50% 18.33%, rgba(0, 0, 0, 0) 21.67%, rgba(102, 51, 238, 0.5) 69.34%, rgba(255, 255, 255, 0.5) 100%)",
      },
      fontFamily:{
        'Poppins' : "'Poppins', serif",
        'Roboto' : '"Roboto", serif',
      }
    },
  },
  plugins: [],
}

