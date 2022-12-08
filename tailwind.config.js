/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        blur: {
          '0%': { filter: 'blur(3px)' },
          '100%': { filter: 'blur(0px)' },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
            filter: 'blur(3px)',
            transform: 'translate(0, -7px)'
          },
          '50%': {
            filter: 'blur(0px)',
            transform: 'translate(0, 0px)'
          },
          '100%': {
            opacity: 1,

          },
        },
        projectIn: {
          '0%': {
            padding: '580px',
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3)'
          },
          '50%': { padding: '200px', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3)' },
          '100%': {
            padding: '0px',
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
          }
        },
        projectContent: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,

          },
        },
      },
      animation: {
        blur: 'blur 2s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in',
        projectIn: 'projectIn 1s ease-in-out',
        projectContent: 'projectContent 2s ease-in-out',
      },

    },
    typography: {
      "xs": {
        css: {
          fontSize: "0.75rem"
        }
      },
      "2xl": {
        css: {
          fontSize: "2.5rem"
        }
      },
      "5xl": {
        css: {
          fontSize: "5rem"
        }
      },
      "ultraXL": {
        css: {
          fontSize: "12.5rem"
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
