import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [react()],
  };
});

// export default defineConfig({
//     plugins: [
//         react(),
//     ],
// });
