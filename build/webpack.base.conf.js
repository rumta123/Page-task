const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  assets: './',
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    index: `${PATHS.src}/index.js`,
  },
  output: {
    filename: './js/[name].js',
    path: PATHS.dist,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': PATHS.src,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'auto',
              },
            ],
          ],
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      cache: process.env.NODE_ENV === 'development',
      template: `${PATHS.public}/index.html`,
      favicon: `${PATHS.public}/favicon.ico`,
      filename: 'index.html',
    }),
  ],
};
