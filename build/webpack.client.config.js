const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const vueConfig = require('./vue-loader.config');
const HTMLPlugin = require('html-webpack-plugin');
const projectRoot = path.resolve(__dirname, '../');

//生成 前端文件的webpack 配置
const config = merge(base, {
  plugins: (base.plugins || []).concat([
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

      //将类库文件进行分开打包,便于缓存
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'client-vendor-bundle.js'
    }),

    // generate output HTML
    new HTMLPlugin({
      filename: projectRoot + '/dist/index.html',
      template: 'src/views/index.template.html'
    })

  ])
})

if (process.env.NODE_ENV === 'production') {
  
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  
  vueConfig.loaders = {
    // 用 babel-loader 加载所有没有 "lang" 属性的 <script>
    js: 'babel-loader',
    // 将vue里面的css和sass抽离出来组成一个独立的css文件
    css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
    sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
    // css: ExtractTextPlugin.extract({fallbackLoader: 'vue-style-loader', loader: 'css-loader'}),
    // sass: ExtractTextPlugin.extract({fallbackLoader:'vue-style-loader', loader: 'css-loader!sass-loader'})
  }

  config.plugins.push(
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config
