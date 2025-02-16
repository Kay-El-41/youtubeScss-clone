import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Vercel will override this
  },
  build: {
    outDir: "dist", // Make sure this matches Vercel's expectations
  },
});
