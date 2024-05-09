import react from "@vitejs/plugin-react";
import * as glob from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ["lib/main.ts"] })],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"]
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime", "react-dom"],
            input: "lib/main.ts",
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
                chunkFileNames: "chunks/[name].[hash].js"
            }
        }
    }
});
