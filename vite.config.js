export default {
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./src/about.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
};
