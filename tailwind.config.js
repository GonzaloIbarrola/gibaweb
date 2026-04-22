/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}", "./src/sections/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070B14",
        "background-soft": "#0D1324",
        surface: "#10182B",
        "surface-soft": "#15203A",
        foreground: "#F3F7FF",
        muted: "#96A4C2",
        accent: "#9CFF1A",
        "accent-strong": "#B7FF4D",
        line: "rgba(151, 170, 204, 0.16)"
      },
      fontFamily: {
        sans: ["Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(156, 255, 26, 0.12), 0 18px 40px rgba(4, 10, 21, 0.55)",
        accent: "0 0 40px rgba(156, 255, 26, 0.18)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(156, 255, 26, 0.16), transparent 38%), radial-gradient(circle at 18% 20%, rgba(24, 73, 40, 0.36), transparent 30%), linear-gradient(180deg, #0D1324 0%, #070B14 100%)"
      }
    }
  },
  plugins: []
};
