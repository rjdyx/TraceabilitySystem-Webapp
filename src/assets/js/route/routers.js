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


//---------------------------种植批次管理----------------------------------
const plantCultivate = require('../views/plant-cultivate.vue')
const cultivateRefer = require('../views/cultivate-refer.vue')
const plantCultivateDetail = require('../components/plant-cultivate/plant-cultivate-detail.vue')

//---------------------------施肥管理----------------------------------
const fertilize = require('../views/fertilize.vue')

//=============================果蔬采收批次管理====================================
//---------------------------果蔬采收批次管理----------------------------------
const vegetableHarvest = require('../views/vegetable-harvest.vue')
const cultivateDetail = require('../components/vegetable-harvest/cultivate-detail.vue')
//---------------------------果蔬检测管理----------------------------------
const vegetableDetection = require('../views/vegetable-detection.vue')



//=============================果蔬加工管理====================================
//-----------------------------------------------------------------------------
const processBasic = require('../views/process-basic.vue')

//=============================养殖管理====================================
//---------------------------养殖基础信息管理----------------------------------
const beast = require('../views/beast.vue')


//=============================生产计划表====================================
const calendar=require('../views/calendar.vue')
//---------------------------新建生产计划信息表----------------------------------
const message=require('../components/product/message.vue')
//---------------------------选择种植批次----------------------------------
const harvest=require('../components/product/harvest.vue')



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
                path: 'plant-cultivate',
                name:'plant-cultivate',
                component: plantCultivate,
                meta: { requiresAuth: true }
            },
             {
                path: 'vegetable-harvest',
                name:'vegetable-harvest',
                component: vegetableHarvest,
                meta: { requiresAuth: true }
            },

             {
                path: 'cultivate-detail/:id',
                name:'cultivate-detail',
                component: cultivateDetail,
                meta: { requiresAuth: true }
            },
            {
                path: 'vegetable-detection',
                name:'vegetable-detection',
                component: vegetableDetection,
                meta: { requiresAuth: true }
            }, 
            {
                path: 'plant-cultivate-detail/:id',
                name:'plant-cultivate-detail',
                component: plantCultivateDetail,
                meta: { requiresAuth: true }
            },
            {
                path: 'cultivate-refer/:type',
                name:'cultivate-refer',
                component: cultivateRefer,
                meta: { requiresAuth: true }
            },
            {
                path: 'fertilize',
                name:'fertilize',
                component: fertilize,
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
            },
            {
                path: 'process-basic',
                name: 'process-basic',
                component: processBasic,
                meta: { requiresAuth: true }
            },
            {
                path: 'calendar',
                name: 'calendar',
                component: calendar,
                meta: { requiresAuth: true }
            },
            {
                path:'message',
                name:'message',
                component:message,
                meta:{requiresAuth:true}
            },
            {
                path:'harvest',
                name:'harvest',
                component:harvest,
                meta:{requiresAuth:true}
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