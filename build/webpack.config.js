const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const devMode = true
module.exports = {
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isProduction
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: path.posix.join('./', 'img/[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('./', 'fonts/[name].[ext]')
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
              options: {
                // minimize: true
              }
            },
            {
              loader: 'px2rem-loader',
              options: {
                remUni: 75,
                remPrecision: 8
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          publicPath: '../',
          use: [
            'css-loader',
            {
              loader: 'px2rem-loader',
              options: {
                remUni: 75,
                remPrecision: 8
              }
            },
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          publicPath: '../',
          use: [
            'css-loader',
            {
              loader: 'px2rem-loader',
              options: {
                remUni: 75,
                remPrecision: 8
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/[chunkhash].css').replace('', '')
      },
      allChunks: true
    })
    // ,
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../client/assets'),
    //     to: path.resolve(__dirname, '../dist'),
    //     ignore: ['.*']
    //   }
    // ])
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
