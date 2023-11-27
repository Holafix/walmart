/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm' : {'min' : '250px', 'max':'599px'},
      // @media (min-width:599px)
      'md' : {'min' : '600px', 'max' : '1023px'},
      // @media (min-width:640px and max-width: 767px)
      'lg' : {'min' : '1024px'},
      // @media (min-width:1024px)
    }
  },
  plugins: [],
}