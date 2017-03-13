import Vue from 'vue'
import App from './App.vue';
import nprogress from 'nprogress';
import store from './vuex/index.js';
import router from './route/routers.js';
import { sync } from 'vuex-router-sync'
// 引入饿了么UI插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import fullCalendar from 'vue-fullcalendar'

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

// Vue.component('full-calendar', fullCalendar)

Vue.use(ElementUI)

require('./init/init')


// 用vuex的store同步化router
// 这会注册 `store.state.route`
sync(store, router)


router.beforeEach((to, from, next) => {
	if (typeof window == undefined || typeof window == 'object') {
		nprogress.set(0.5);
	}
    next();
});

router.afterEach(route => {
  	if (typeof window == undefined || typeof window == 'object') {
		nprogress.set(1);
	}
})

// 创建一个app实例
// 这里我们把routes和store注入所有子组件，
// 使得像`this.$router` 和 `this.$store` 在任何地方都能生效
const app = new Vue(Vue.util.extend({
  router,
  store
}, App))


export { app, router, store }
