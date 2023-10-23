const path = require("path");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },
  devServer: {
    open: true,
    watchFiles: ["./src"],
    proxy: {
      context: () => true,
      target: "https://portfolio.local", // enter your local dev url here
      secure: false,
      changeOrigin: true,
      onError(err) {
        console.log("Suppressing WDS proxy upgrade error:", err);
      },
    },
    https: true,
    port: 3000,
    hot: true,
  },
};
