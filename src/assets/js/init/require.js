/**
 * js库初始化
 */

require('babel-polyfill'); // 解决手机端uc浏览器、qq浏览器和微信浏览器无法使用部分ES6语法
window._ = require('lodash'); //

require('animate.css'); // 动画css插件

window.Velocity = require('velocity-animate');	//动画js插件
window.axios = require('axios');	// 异步请求插件

window.Vue = require('vue');
window.VueResource = require('vue-resource');	// 异步请求插件
window.VueRouter = require('vue-router');	// 路由插件
window.Vuex = require('vuex');	// vue状态管理插件

Vue.use(VueResource);
Vue.use(VueRouter);

