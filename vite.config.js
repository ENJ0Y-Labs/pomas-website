import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        research: resolve(process.cwd(), "research.html")
      }
    }
  }
});
