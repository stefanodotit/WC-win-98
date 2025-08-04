import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@css": path.resolve(__dirname, "./src/css"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
