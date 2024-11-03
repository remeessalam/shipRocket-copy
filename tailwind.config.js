/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        landingPageHeight: "calc(100vh - 86px)",
      },
      colors: {
        "gradient-start": "#ffc465",
        "gradient-end": "#5338ff",
      },
      keyframes: {
        bgPan: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        fill: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "bg-pan": "bgPan 25s linear infinite",
        fill: "fill 5s linear forwards",
      },
      backgroundSize: {
        120: "120%",
        150: "150%",
      },

      backgroundImage: {
        "landing-page": "url('/src/assets/images/download.png')",
        "fourth-pageOne": "url('/src/assets/images/bgImage.webp')",
        "footer-texture": "url('/img/footer-texture.png')",
        "gradient-circle":
          "linear-gradient(153deg, rgba(255,210,88,1) 0%, rgba(134,68,216,1) 62%, rgba(112,47,235,1) 98%)",
        "color-check": "linear-gradient(99deg, #ffc465 0%, #5338ff 100%)",
        "custom-gradient":
          "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9094231442577031) 62%, rgba(251,251,251,1) 98%)",
        "border-gradient":
          "linear-gradient(100deg, rgba(150,255,171,1) 8%, rgba(134,68,216,1) 69%, rgba(76,30,165,0.9906556372549019) 100%)",
        // "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7861738445378151) 62%)",
        "cart-gradient": "linear-gradient(143deg, #f8feff, #e2f8ff)",
        "four-loading":
          "linear-gradient(100deg, rgba(255,196,101,1) 23%, rgba(83,56,255,1) 69%, rgba(76,30,165,0.9906556372549019) 88%)",
        "yellow-gradient": "linear-gradient(153deg, #fffffd, #fff9dd)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background:
            "linear-gradient(114deg, #ffd258, #8644d8 69%, #702feb) 0 0",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-greenGradient": {
          background:
            "linear-gradient(100deg, rgba(150,255,171,1) 23%, rgba(134,68,216,1) 69%, rgba(76,30,165,0.9906556372549019) 88%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",

          "scrollbar-width": "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
