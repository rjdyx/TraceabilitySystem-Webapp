// Vuex
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {userId: ''},
        title: '农业日志'
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
        }
    },
    
    actions: {
        setUserInfo(context, user) {
            context.commit('setUserInfo', user);
        }
    }
    
});

export default store;