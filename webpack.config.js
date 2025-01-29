module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // Preserve the original path and name
              outputPath: "assets/", // Output directory for images
            },
          },
        ],
      },
    ],
  },
};
