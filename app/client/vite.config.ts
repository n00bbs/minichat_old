import type { UserConfig } from "vite";

export default {
  root: "app/client",
  build: {
    outDir: "../../dist/client",
    emptyOutDir: true,
  },
} satisfies UserConfig;
