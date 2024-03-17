/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0080fe",
        pinkColor: "#cd7584",
        lightPinkColor: "#eeaeca",
        lightBlueColor: "#94bbe9",
        headingColor: "#181a1e",
        textColor: "#4e545f",
        instagramColor: "conic-gradient(rgba(254,218,117,1) 0deg, rgba(250,126,30,1) 90deg, rgba(214,41,118,1) 180deg, rgba(150,41,118,1) 270deg, rgba(79,91,213,1) 360deg)"
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}

