import react from "@vitejs/plugin-react";
import * as glob from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ["lib"] })],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"]
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime", "react-dom"],
            input: Object.fromEntries(
                glob.sync("lib/**/*.{ts,tsx}").map((file) => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative("lib", file.slice(0, file.length - extname(file).length)),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
                chunkFileNames: "chunks/[name].[hash].js"
            }
        }
    }
});
