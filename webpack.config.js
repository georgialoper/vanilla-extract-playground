const path = require('path');
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const moduleRules = require('./.webpack/module-rules.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {

  const isProdBuild = env.NODE_ENV === "production";

  return {
    mode: isProdBuild ? "development" : "production",
    devtool: isProdBuild ? "source-map" : "eval-cheap-module-source-map",
    entry: "./src/index.ts",
    module: { ...moduleRules },
    // optimization: {
    //   minimize: isProdBuild ? true : false,
    // },
    resolve: {
      extensions: ['.ts', ".tsx", '.js', '.json']
    },
    // https://webpack.js.org/guides/author-libraries/#expose-the-library
    // https://webpack.js.org/configuration/output/#outputenvironment
    // Preserve dynamic imports?
    output: {
      path: path.resolve(__dirname, 'dist'),
      library: { type: 'module' },
      environment: {
        module: true,
        dynamicImport: true,
      },
      filename: 'main.js',
      enabledLibraryTypes: ['module'],
    },
    experiments: {
      outputModule: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    externals: [
      'react',
      'react-dom'
    ]
  }
}