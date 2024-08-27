export default {
  base: "./",
  build: {
    lib: {
      entry: "./src/main.js",
      name: "trame_app",
      formats: ["umd"],
      fileName: "trame_app",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "../trame_app/module/serve",
    assetsDir: ".",
  },
};
