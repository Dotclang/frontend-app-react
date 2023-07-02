import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/frontend-app-react/" : "./",
  build: {
    outDir: "dist",
    assetsDir: "./",
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
