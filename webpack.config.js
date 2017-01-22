
const path = require('path')
const autoprefixer = require('autoprefixer')

// Reference: https://github.com/nicksp/redux-webpack-es6-boilerplate/tree/master/config

module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve(__dirname, './public'), // Needed for production build
    filename: "./build/app.js"
  },
  resolve: {
    alias: {
      config: path.join(__dirname, 'config', process.env.NODE_ENV || 'development')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader', // using .babelrc instead of ?presets[]=react,presets[]=es2015,presets[]=stage-1
        exclude: /node_modules/
      },
      {
        test: /\.(json)$/,
        loaders: ['json-loader']
      },
      { // For npm css modules: flexboxgrid, normalize etc
        // NOTE: to load to file use: loaders: ['style/url', 'file?name=/[name]_[hash:12].css'],
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: /node_modules/
      },
      { // For our own sass files with postcss
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          'sass-loader'
        ],
        include: /lib/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './public',
    port: process.env.PORT || 9001
  }
};