/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 3s linear infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // lista de fuentes disponibles
      },
      colors: {
        komunly: {
          gray: {
            semilight: "#d1d5db",
            light: "#71717a",  // Un gris más claro
            medium: "#4B5563", // Un gris medio
            dark: "#374151",   // Un gris oscuro
            darkest: "#111827" // Un gris mas oscuro

          },
          blue: {
            light: "#54b0f9", // Un azul claro
            dark: "#296596",  // Un azul oscuro
            navy: "#121542",  // Azul marino muy oscuro
            ocean: "#20356a", // Azul océano oscuro
            steel: "#647090",    // Azul grisáceo o acero
            sky: "#4b82bb",      // Azul cielo o cerúleo
            deep: "#1A3642",   // Azul muy oscuro con matices grisáceos
          },

          purple: {
            light: "#e9d5ff",    // Morado claro
            medium: "#9333ea",   // Morado medio
            deep: "#7e22ce",     // Morado profundo (medio oscuro)
            dark: "#210246",     // Morado oscuro
            darkest: "#010334"   // Morado más oscuro
          },

          fuchsia: {
            medium: "#e879f9", // Un funcsia medio
          },

          green: {
            muted: "#414b48",    // Verde grisáceo oscuro o verde apagado
            sage: "#9cb067",  // Verde oliva claro
            deep: "#387E51",   // Verde profundo y vibrante
          },

          red: {
            bright: "#FF4C4C",  // Rojo brillante
            dark: "#B71C1C",    // Rojo oscuro
            crimson: "#DC143C", // Rojo carmesí
            deep: "#BF060B",    // Rojo profundo y vibrante
          },
        }
      }
    },
    

  },
  plugins: [require("tailwindcss-animate")],
}

