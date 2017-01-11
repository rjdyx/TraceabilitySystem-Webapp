const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VueConfig = {
	preserveWhitespace: false,
	postcss: [
		require('autoprefixer')({
		  browsers: ['last 3 versions']
		})
	]
}

if (process.env.NODE_ENV === 'production') {
	VueConfig.loaders = {
		// 用 babel-loader 加载所有没有 "lang" 属性的 <script>
		js: 'babel-loader',
		// 将vue里面的css和sass抽离出来组成一个独立的css文件
		css: ExtractTextPlugin.extract({fallbackLoader: 'vue-style-loader', loader: 'css-loader'}),
		sass: ExtractTextPlugin.extract({fallbackLoader:'vue-style-loader', loader: 'css-loader!sass-loader'})
	}
}

module.exports = VueConfig
