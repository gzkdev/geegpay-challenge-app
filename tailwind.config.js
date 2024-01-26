/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alert-error": "#ED544E",
        "alert-success": "#66C87B",
        "alert-warning": "#F4C700",
        "gray-900": "#171717",
        "gray-50": "#FAFAFA",
        "gray-100": "#F5F5F5",
        "gray-200": "#E5E5E5",
        "gray-300": "#D4D4D4",
        "gray-400": "#A3A3A3",
        "gray-500": "#737373",
        "gray-600": "#525252",
        "gray-700": "#404040",
        "gray-800": "#262626",
        "main-green": "#34CAA5",
        "main-text": "#0D062D",
      },
    },
  },
  plugins: [],
};
