/**
 * 路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import { createView } from './CreateView'

Vue.use(Router)

//=============================顶层组件====================================
//---------------------------最顶层组件----------------------------------
// const index = resolve => {
//     require.ensure(['./views/index.vue'], () =>{
//         resolve(require('./views/index.vue'));
//     }, 'index');
// };
const index = require('../views/index.vue')

//---------------------------登录租金----------------------------------
// const login = resolve => {
//     require.ensure(['./views/login.vue'], () =>{
//         resolve(require('./views/login.vue'));
//     }, 'login');
// };
const login = require('../views/login.vue')

//---------------------------农业日志----------------------------------
// const log = resolve => {
//     require.ensure(['./views/log.vue'], () =>{
//         resolve(require('./views/log.vue'));
//     }, 'basic');
// };
const log = require('../views/log.vue')

//---------------------------404----------------------------------
// const fourOFour = resolve => {
//     require.ensure(['./views/404.vue'], () =>{
//         resolve(require('./views/404.vue'));
//     }, 'fourOFour');
// };
const fourOFour = require('../views/404.vue')

//---------------------------图片日志------------------------------
// const dailylog = resolve => {
//     require.ensure(['./views/dailylog.vue'], () =>{
//         resolve(require('./views/dailylog.vue'));
//     }, 'dailylog');
// }
const dailylog = require('../views/dailylog.vue')

//=============================种植管理====================================

//---------------------------基础信息管理----------------------------------
// const basic = resolve => {
//     require.ensure(['./views/basic.vue'], () =>{
//         resolve(require('./views/basic.vue'));
//     }, 'basic');
// };
const basic = require('../views/basic.vue')


const routes = [
    
    { 
        path: '/', 
        redirect: '/webapp/login' 
    },
    {
        path: '/webapp',
        component: index,
        children: [
            {
                path: '',
                component: log,
                meta: { requiresAuth: true }
            },
            {
                path: 'basic',
                name:'basic',
                component: basic,
                meta: { requiresAuth: true }
            },
            {
                path: 'log/:id',
                name: 'log',
                component: log,
                meta: { requiresAuth: true }
            },
            {
                path: 'dailylog',
                name: 'dailylog',
                component: dailylog,
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/webapp/login',
        name: 'login',
        component: createView(login)
    },
    {
        path: '/404',
        name: '404',
        component: fourOFour
    }
    
];

export default new Router({
    mode: 'history',
    routes
});