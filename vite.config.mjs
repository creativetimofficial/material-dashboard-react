import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), jsconfigPaths()],
  };
});
