const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',    // デバッグできるように
  module: {
      rules: [
          {
              enforce: 'pre',
              loader: 'tslint-loader',
              test: /\.tsx?$/,
              exclude: [
                  /node_modules/
              ],
              options: {
                  emitErrors: true
              }
          },
          {
              loader: 'ts-loader',
              test: /\.tsx?$/,
              exclude: [
                  /node_modules/
              ],
              options: {
                  configFile: 'tsconfig.dev.json'
              }
          }
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.js'
  },
  plugins: [
      new htmlWebpackPlugin({
          template: "index.html"
      })
  ]
};