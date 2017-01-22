
const defaultConfig = require('./webpack.config.js')
const webpack = require('webpack')

const path = require('path')
const node_modules = path.resolve(__dirname, 'node_modules');

module.exports = Object.assign({}, defaultConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
});