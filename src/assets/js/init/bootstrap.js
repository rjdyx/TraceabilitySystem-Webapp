require('./http');

/**
 * some global init
 */

// 配置webpack动态加载模块的路径
__webpack_public_path__ = '/dist/';



// 消除手机端300毫秒延时
import FastClick from 'fastclick';
FastClick.attach(document.body);



// 进度条
window.nprogress = require('nprogress');
nprogress.configure({
	minimum: 0.1,	// 设置最小百分百
	showSpinner: false,	// 取消圆环加载
    speed: 800, // 进度条加载速度ms
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
	parent: '#mynprogress'
});