/**
 * 路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import { createView } from './CreateView'

Vue.use(Router)

//=============================顶层组件====================================
//---------------------------最顶层组件----------------------------------
const index = require('../views/index.vue')

//---------------------------登录租金----------------------------------
const login = require('../views/login.vue')

//---------------------------农业日志----------------------------------
const log = require('../views/log.vue')

//---------------------------404----------------------------------
const notFound = require('../views/404.vue')

//---------------------------图片日志------------------------------
const dailylog = require('../views/dailylog.vue')

//---------------------------历史图片------------------------------
const record = require('../views/record.vue')

//=============================种植管理====================================

//---------------------------种植基础信息管理----------------------------------
const basic = require('../views/basic.vue')

//=============================养殖管理====================================

//---------------------------养殖基础信息管理----------------------------------
const beast = require('../views/beast.vue')

const routes = [
    
    { 
        path: '/', 
        redirect: '/webapp/login/200' 
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
                path: 'beast',
                name:'beast',
                component: beast,
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
            },
            {
                path: 'record',
                name: 'record',
                component: record,
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/webapp/login/:code',
        name: 'login',
        component: createView(login)
    },
    {
        path: '/404',
        name: '404',
        component: notFound
    }
    
];

export default new Router({
    mode: 'history',
    routes
});