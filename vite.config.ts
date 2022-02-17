import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
const isProd = process.env.NODE_ENV === "production";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    isProd &&
      legacy({
        targets: ["defaults", "not IE 11"],
        polyfills: [
          "es/array",
          "es/array-buffer",
          "es/object",
          "es/string",
          "es/number",
          "es/function",
          "es/map",
          "es/math",
          "es/set",
          "es/promise",
          "es/regexp",
          "es/weak-set",
          "es/weak-map",
          "es/date",
        ],
      }),
  ],
  server: {
    proxy: {
      "/test-proxy": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
      },
    },
  },
});
