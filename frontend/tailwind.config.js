import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  colors: {
    gold: "#D4A017",
    "gold-light": "#F2C94C",
    "gold-dark": "#9C6B00",
    "silver-light": "#E5E5E5",
    "gray-medium": "#A6A6A6",
    "gray-dark": "#4F4F4F",
    black: "#000000",
    "gray-bg": "#2C2C2C",
    white: "#FFFFFF",
  },
});

