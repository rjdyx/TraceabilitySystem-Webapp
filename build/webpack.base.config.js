const path = require('path');
const webpack = require('webpack');
const vuxLoader = require('vux-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vueConfig = require('./vue-loader.config');
const projectRoot = path.resolve(__dirname, '../');
const providePlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
});

let webpackConfig = {
    devtool: '#source-map',
        entry: {
        app: './src/assets/js/client-entry.js',
        vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'vee-validate']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist',
        filename: '[name].[chunkhash].js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                // loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader'})
                // loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            { 
                test: /iview.src.*?js$/, 
                loader: 'babel-loader' 
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')
                // loader: ExtractTextPlugin.extract({fallbackLoader:'style-loader', loader: 'css-loader!sass-loader'})
                // loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css', { allChunks: true }),
        // new ExtractTextPlugin({filename:'[name].[chunkhash].css', allChunks: true}),
        providePlugin
    ]

}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    {
      name: 'vux-ui'
    },
    {
      name: 'duplicate-style'
    }
  ]
})
