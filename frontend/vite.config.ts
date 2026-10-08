import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Tailwind v4 is configured through the Vite plugin and a CSS @import —
// there is no tailwind.config.js. Design tokens are declared in src/index.css.
// `@` resolves to src/ — the shadcn/ui convention the generated UX code uses.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: { "/api": "http://localhost:8080" },
  },
});
