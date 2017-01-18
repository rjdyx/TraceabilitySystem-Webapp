import 'es6-promise/auto'
require('./init/bootstrap');
require('../sass/basic.scss');
require('../sass/log.scss');
import { app, store, router } from './index'

import VeeValidate from 'vee-validate';	// 表单验证插件
import messagesAr from '../../lang/zh-CN/vee-validate.js';
Vue.use(VeeValidate, {
    locale: 'ar',
    dictionary: {
        ar: {   // locale key
            messages: messagesAr,   // Arabic messages
        }
    }
});

// router.beforeEach((to, from, next) => {
// 	console.log('in');
// 	nprogress.set(0.5);
//     next();
// });

// router.afterEach(route => {
//   	nprogress.set(1);
// })

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM
app.$mount('#app')

