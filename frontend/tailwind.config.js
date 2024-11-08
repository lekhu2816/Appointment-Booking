/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6fff"
      },
      boxShadow: {
        '3xl': '0 0px 20px rgba(0, 0, 0, 0.3)',
      }
    },
    screens:{
      'mobile':{'max':"400px"},
      'tablet': {'min': '401px', 'max': '700px'}, 
    }
  },
  plugins: [],
}