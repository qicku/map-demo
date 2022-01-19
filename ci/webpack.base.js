const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// webpack polyfill node
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const webpack = require('webpack')
const chalk = require('chalk')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const { R, src, dist, htmlTemplete, logo } = require('./paths')

const devMode = process.env.NODE_ENV === 'development'

const PrevousPlugins = [
  // 进度条
  new ProgressBarPlugin({
    format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
  }),
  // Removes/cleans build folders and unused assets when rebuilding
  new CleanWebpackPlugin({
    dry: !devMode,
    verbose: !devMode,
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
    Buffer: ['buffer', 'Buffer'],
  }),
  new NodePolyfillPlugin(),
]

const SuffixPlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    title: 'Map Demo',
    favicon: logo,
    template: htmlTemplete('html'),
    filename: `index.html`,
  }),
]

const plugins = [].concat(PrevousPlugins).concat(SuffixPlugins)

let publicPath = '/'

const baseConfig = {
  entry: {
    index: R(src, 'index.js'),
  },
  output: {
    path: dist,
    filename: '[name]/index.bundle.js',
    publicPath: publicPath,
  },

  resolve: {
    alias: {
      '~': src,
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
    },
    extensions: ['.js', '.jsx', '.png', '.jpg', '.jepg', '.gif'],
  },

  plugins: plugins,
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader'] },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/,
        use: [
          devMode
            ? {
                loader: 'style-loader',
              }
            : {
                loader: MiniCssExtractPlugin.loader,
              },

          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true, debug: true },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
          //   {
          //     loader: 'postcss-loader', // postcss loader needed for tailwindcss
          //     options: {
          //       postcssOptions: {
          //         ident: 'postcss',
          //         plugins: [tailwindcss, autoprefixer],
          //       },
          //     },
          //   },
        ],
      },
    ],
  },
}

module.exports = baseConfig
