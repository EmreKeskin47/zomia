import "font-awesome/css/font-awesome.css";

module.exports = {
  entry: "./pages/_app.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js",
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  watch: true,
};
