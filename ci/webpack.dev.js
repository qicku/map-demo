const { merge } = require('webpack-merge')

const NODE_ENV_VALT = 'development'
process.env.BABEL_ENV = NODE_ENV_VALT
process.env.NODE_ENV = NODE_ENV_VALT

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: NODE_ENV_VALT,
  devtool: 'inline-source-map', // 'cheap-module-source-map',
})
