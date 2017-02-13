import Vue from 'vue'

// 注册全局组件
Vue.component('confirm', require('../components/public/confirm.vue'));
Vue.component('PopTransition', require('../components/public/pop-transition.vue'));
Vue.component('pop-select',require('../components/public/pop-select.vue'));
Vue.component('loading',require('../components/public/loading.vue'));
Vue.component('date-picker',require('../components/public/date-picker.vue'));



// 注册自定义验证规则
import { Validator } from 'vee-validate';
import validates from '../utils/validate.js';
Object.keys(validates).forEach(k => Validator.extend(k, validates[k]()));



// 注册自定义指令
import directive from '../directive/directive.js';
Object.keys(directive).forEach(k => Vue.directive(k, directive[k]()));



// 注册全局方法
require('../plugin');
import utils from '../utils/utils';
import easyAjax from '../utils/easyAjax';
Vue.use(utils);
Vue.use(easyAjax);




// 实例化Vue的filter
import filters from '../filters/filters.js';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
