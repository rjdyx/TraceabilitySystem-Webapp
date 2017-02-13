// Vuex
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {userId: ''},
        // 顶部模块的标题
        title: '农业日志',
        // 顶部模块左边的按钮组件
        headLeftComponent: null,
        // 顶部模块右边的按钮组件
        headRightComponent: null,
        // 是否显示消息弹窗
        showLayer: false,
        // 弹窗的内容组件
        layerComponent: null
    },
    mutations: {

    	/**
    	 * 设置标题
    	 */
        setTitle(state, title) {
        	state.title = title;
        },

        /**
         * 设置用户登录信息
         */
        setUserInfo(state, userInfo) {
            state.userInfo.userId = userInfo;
        },
        
         /**
         * 设置顶部模块左边的按钮组件
         * @param {Object} state
         * @param {Object} component Vue实例
         */
        setHeadLeftComponent(state, component) {
            state.headLeftComponent = component;
        },

        /**
         * 设置顶部模块右边的按钮组件
         * @param {Object} state
         * @param {Object} component Vue实例
         */
        setHeadRightComponent(state, component) {
            state.headRightComponent = component;
        },

        setShowLayer(state, type) {
            if (typeof type == 'boolean') {
                state.showLayer = type; 
            }else {
                console.error('传入的值必须是Boolean类型');
            }
        },

        setLayerComponent(state, component) {
            state.layerComponent = component;
        }
    },
    
    actions: {
        setUserInfo(context, user) {
            context.commit('setUserInfo', user);
        }
    }
    
});

export default store;