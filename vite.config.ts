import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [react(), tailwindcss(), Sitemap({
      hostname: 'https://techstrikebrasil.github.io/brazilian-pomsky-website/',
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/brazilian-pomsky-website/",
  
});