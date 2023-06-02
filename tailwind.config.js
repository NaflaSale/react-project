/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        green: "#DBF301",
        whiteColor: "#FFFFFF",
       },
       fontFamily: {
        title: "PlusJakartaSans-Italic-VariableFont_wght",
        subTitle: "PlusJakartaSans",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        homeBackground: "url('/public/assets/images/all-shapes.png')",
        a1: "url('/public/assets/images/Airbnb - png.png')",
        a2: "url('/public/assets/images/Barclays svg.png')",
        a3: "url('/public/assets/images/Group.png')",
        a4: "url('/public/assets/images/Gumroad - png.png')",
        
      },

    },
  },
  plugins: [],
}
