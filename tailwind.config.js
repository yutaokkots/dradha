const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "src/**/*.{jsx,js}"],
  theme: {
      extend:{
        colors: {
          'ocean' : '#8cb1c6',
          'land': '#d6b469',
          'sunset': '#f6851f',
          'cardamom':'#9e5224',
          'vanilla':'#fcf5eb'
        } 
      },
      screens:{
        'sm' :'640px',
        'md' :'768px',
        'lg' :'1024px',
        'xl' :'1280px'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
  plugins: [],
}
}
