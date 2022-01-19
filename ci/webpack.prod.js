const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const NODE_ENV_VALT = 'production'
process.env.BABEL_ENV = NODE_ENV_VALT
process.env.NODE_ENV = NODE_ENV_VALT
const baseConfig = require('./webpack.base')

const { dist, join } = require('./paths')

const webpackConfig = merge(baseConfig, {
  mode: NODE_ENV_VALT,
  devtool: false,

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CompressionPlugin({
      test: new RegExp('\\.(js|css|jpg|png)$'), // 其他媒体mov文件一般是经过压缩后的
      algorithm: 'gzip',
      threshold: 10240, // 只处理10k以上的文件
      minRatio: 0.8, //只有压缩后与原值比率小于0.8 才处理
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 50000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          // name: 'vendors', // not set name or filename in webpack5,this will
          // filename: 'vendor_[id].js',
          chunks: 'all',
          priority: -10,
          enforce: true,
        },
        default: {
          minChunks: 2,
          // filename: 'common_[id].js',
          priority: -20,
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})

module.exports = webpackConfig
