require('./http');

/**
 * some global init
 */

// 配置webpack动态加载模块的路径
__webpack_public_path__ = '/dist/';



// 消除手机端300毫秒延时
import FastClick from 'fastclick';
FastClick.attach(document.body);

