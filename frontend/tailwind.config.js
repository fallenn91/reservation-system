import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  colors: {
    beige: "#F1E9E9",
    lila: "#982598",
    rosa: "#E491C9",
    negro: "#15173D",
  },
});

