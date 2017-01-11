import Vue from 'vue'
import App from './App.vue';
import store from './vuex/index.js';
import router from './route/routers.js';
import { sync } from 'vuex-router-sync'

import VeeValidate from 'vee-validate';	// 表单验证插件
import messagesAr from '../../lang/zh-CN/vee-validate.js';
if(process.env.COUNT_ENV == 1){ // 只需初始化一次，多次初始化会报错
	process.env.COUNT_ENV = 2;
	Vue.use(VeeValidate, {
	    locale: 'ar',
	    dictionary: {
	        ar: {   // locale key
	            messages: messagesAr,   // Arabic messages
	        }
	    }
	});
}

require('./init/init')


// 用vuex的store同步化router
// 这会注册 `store.state.route`
sync(store, router)



// 处理刷新的时候vuex被清空但是用户已经登录的情况
// if (sessionStorage.user) {
//     store.dispatch('setUserInfo', sessionStorage.user);
// }

// // 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {

//         if (store.state.userInfo.userId) {
//             next();
//         } else {
//             next({
//                 path: '/login'
//             });
//         }
        
//     } else {
//         if (to.matched.some(record => record.name === 'login' || record.name === '404')) {
//             next();
//         }else {
//             next({
//                 path: '/404'
//             });
//         }
        
//     }
// });


// 创建一个app实例
// 这里我们把routes和store注入所有子组件，
// 使得像`this.$router` 和 `this.$store` 在任何地方都能生效
const app = new Vue(Vue.util.extend({
  router,
  store
}, App))


export { app, router, store }
