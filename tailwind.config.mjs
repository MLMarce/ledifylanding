/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      dropShadow: {
        "custom-cyan": "0 0px 3px rgba(21, 255, 254, 1)", // Ejemplo con cian
        "custom-dark": ["0 0px 3px rgba(1, 1, 1, 1)","0 0px 4px rgba(1, 1, 1, 1)"], // Ejemplo con rosado
      },
	  backgroundColor: {
		"fondo": "url('/fondotv.webp)",
	  }
    },
  },
  plugins: [],
};
