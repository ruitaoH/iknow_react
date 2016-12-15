var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    index: './src/views/index.js',
    multi: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx','scss'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'image': path.resolve(__dirname, '../src/images'),
      'component': path.resolve(__dirname, '../src/components'),
      'style': path.resolve(__dirname, '../src/styles'),
      'font': path.resolve(__dirname, '../src/fonts'),
      'util': path.resolve(__dirname, '../src/utils')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.join(projectRoot, './src/'),
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
