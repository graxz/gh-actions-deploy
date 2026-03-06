import { defineConfig } from "vite";

export default defineConfig({
  base: "/gh-actions-deploy/",
  build: {
    outDir: "dist",
  },
});
