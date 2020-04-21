/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    alias: {
      // Mock prop-types to an empty module (we deserve better solution here)
      'prop-types': path.resolve('mocks/prop-types.js'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      'process.env.NODE_END': 'production',
    }),
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  ],
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // Récupère le nom du paquet
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]

            // Certains serveurs n'aiment pas les @ dans l'url
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
})
