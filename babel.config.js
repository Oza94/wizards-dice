/* eslint-env node */
const config = {
  plugins: ['@babel/plugin-transform-runtime'],
  presets: [
    ['@babel/preset-env', { modules: false, targets: '>2%' }],
    '@babel/preset-react',
  ],
}

if (process.env.NODE_ENV === 'test') {
  config.plugins.push('@babel/plugin-transform-modules-commonjs')
}

module.exports = config
