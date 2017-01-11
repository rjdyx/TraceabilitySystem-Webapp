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

// const plantation = resolve => {
//     require.ensure(['./components/basic/plantation.vue'], () =>{
//         resolve(require('./components/basic/plantation.vue'));
//     }, 'plantation');
// };
const plantation = require('../components/basic/plantation.vue')

// const planta = resolve => {
//     require.ensure(['./components/basic/planta.vue'], () =>{
//         resolve(require('./components/basic/planta.vue'));
//     }, 'planta');
// };
const planta = require('../components/basic/planta.vue')

// const plant = resolve => {
//     require.ensure(['./components/basic/plant.vue'], () =>{
//         resolve(require('./components/basic/plant.vue'));
//     }, 'plant');
// };
const plant = require('../components/basic/plant.vue')

// const manure = resolve => {
//     require.ensure(['./components/basic/manure.vue'], () =>{
//         resolve(require('./components/basic/manure.vue'));
//     }, 'manure');
// };
const manure = require('../components/basic/manure.vue')

// const medicament = resolve => {
//     require.ensure(['./components/basic/medicament.vue'], () =>{
//         resolve(require('./components/basic/medicament.vue'));
//     }, 'medicament');
// };
const medicament = require('../components/basic/medicament.vue')

// const expert = resolve => {
//     require.ensure(['./components/basic/expert.vue'], () =>{
//         resolve(require('./components/basic/expert.vue'));
//     }, 'expert');
// };
const expert = require('../components/basic/expert.vue')


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
                children: [
                    {
                        path: 'plantation',
                        name:'plantation',
                        component: plantation,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'planta',
                        name: 'planta',
                        component: planta,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'plant',
                        name: 'plant',
                        component: plant,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'manure',
                        name: 'manure',
                        component: manure,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'medicament',
                        name: 'medicament',
                        component: medicament,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'expert',
                        name: 'expert',
                        component: expert,
                        meta: { requiresAuth: true }
                    }
                ]
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