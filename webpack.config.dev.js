/* eslint-env node */
const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      index: '/index.html',
    },
    port: 7200,
  },
})
