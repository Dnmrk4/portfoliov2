/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        blue: "#1fb6ff",
        purplish: "#5063FF",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        yellowish: "#EBFF00",
        jellow: "#FFFF45",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        hred: "#E34C26",
        cblue: "#2965F1",
        pyblue: "#306998",
        cblur: "#8F8D8D",
        grayish: "#373737",
        kore: "#FF3D00",
        kore2: "#0075FF",
        kore3: "#FFC700",
        kore4: "#00C2FF",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        11: "2.75rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      gap: {
        11: "2.75rem",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      Pridi: ['Pridi', 'serif'],
      dnmrk1hi:['Hi Melody', "cursive"],
      dnmrk2goth:['Rubik 80s Fade', 'cursive'],
      frontdev:['Comfortaa', 'cursive'],
      head1kod:['Kodchasan', "sans-serif"],
      text1:['Baloo 2', 'cursive'],
      danm:['Secular One', 'sans-serif'],
      text2:['Montserrat Alternates', 'sans-serif'],
      text3:['Nanum Myeongjo', 'serif'],

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6419E6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin"), require("tailwindcss-3d")({ legacy: true })],
};
