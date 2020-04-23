/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const isProd = env !== 'development'
const context = path.resolve(__dirname)

module.exports = {
  context,

  entry: path.resolve(context, 'src/index.js'),

  output: {
    path: path.resolve(context, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // internal CSS
      {
        test: /\.css$/,
        include: /src/,
        sideEffects: true,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: path.resolve(context, 'postcss.config.js') },
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          esModule: false,
        },
      },

      {
        test: /\.(png|otf)$/,
        use: ['file-loader'],
      },

      {
        test: /\.ya?ml$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[contenthash].json',
            },
          },
          'yaml-loader',
        ],
      },

      {
        test: /\.md$/i,
        loader: 'raw-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV_LOGSTORE: false,
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProd ? '[name].[hash].css' : '[name].[id].css',
    }),

    new HtmlWebpackPlugin({
      title: "Wizard's dice",
      template: 'src/index.html',
    }),
  ],
}
