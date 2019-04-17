const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx$/,
        exclude: [
          /node_modules/
        ],
        use: [ 
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              tsConfigFile: './tsconfig.dev.json'
            }
          }
        ]
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
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ],
  devServer: {
    openPage: "index.html",
    port: 3000,
  }
};
