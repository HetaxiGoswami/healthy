/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-image": "url('/assets/images/intro.jpeg')",
        "stra-img":"url('/assets/images/straw.jpeg')",
      },
      backgroundColor: {
        "custom-light-purple": "#af94de",
        "dark-purple":"#6a4aa1",
        "dark-pink":"#d01e55",
        "dark-blue":"#292d33",
        "footer-gray":"#333333",
        "light-gray":"#f2f2f2"
      },

      minHeight:{
        "400px":"400px"
      },

      height: {
        "730px": "730px",
        "645px":"645px"
      },
      backgroundPosition: {
        "center-center": "50% 50%",
      },
      width: {
        "1326px": "1326px",
        "1300px":"1300px",
        "30%":"30%",
        "50%":"50%",
        "378px":"378px",
        "39%":"39%",
        "21%":"21%"
      
      },
      padding:{
        "85px":"85px",
        "49px":"49px",
        "98px":"98px"
      },
      fontSize: {
        6.25: "6.25rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "pt-sans": ["PT Sans", "sans-serif"],
      },

      colors: {
        "custom-purple": "#6a4aa1",
        "dark-purple":"#6a4aa1",
      },
      margin: {
        custom: "60px 0 60px auto",
      },
      flex: {
        '0-0-21': '0 0 21.66666667%',
        '0-0-35': '0 0 35%',
      },
      maxWidth: {
        '21': '21.66666667%',
        '35': '35%',
        '78%':'78%'

      },
      minWidth: {
        '21': '21.66666667%',
        '35': '35%',

      },
    },
  },
  plugins: [],
};
