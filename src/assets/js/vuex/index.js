// Vuex
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {userId: ''},
        // 顶部模块的标题
        title: '农业日志',
        // 存放列表项的数组
        list: [],
        // 存放批量删除的列表项的数组
        deleteLists: [],
        // 是否显示tablelist
        showList: false,
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
         * 设置list的值
         */
        setList(state, list) {
            state.list = list;
        },

        /**
         * 删除list里面的单个值
         */
        spliceList(state, index) {
            state.list.splice(index, 1);
        },

        /**
         * 将一个值插入list的首部
         */
        unshiftList(state, item) {
            state.list.unshift(item);
        },

        /**
         * 设置deleteLists的值
         */
        setDeleteLists(state, deleteLists) {
            state.deleteLists = deleteLists;
        },

        /**
         * 将单个值加入deleteLists里
         */
        pushDeleteLists(state, deleteList) {
            let protos = ['id', 'index', 'flag'];
            let result = protos.every(function(item, index) {
                if(item in deleteList) {
                    return true;
                }else {
                    return false;
                }
            })
            if (!result) console.error('传入的值必须是个包含id、index和flag这三个属性的对象');
            state.deleteLists.push(deleteList);
        },

        /**
         * 删除单个deleteLists
         */
        spliceDeleteLists(state, index) {
            state.deleteLists.splice(index, 1);
        },

        /**
         * 根据传入的proto对deleteLists进行排序
         */
        reverseDeleteLists(state, proto) {
            state.deleteLists = Vue.prototype.$reverseObj(state.deleteLists, proto);
        },

        /**
         * 设置showList的值，只能传入true或是false
         */
        setShowList(state, type) {
            if (typeof type == 'boolean') {
                state.showList = type; 
            }else {
                console.error('传入的值必须是Boolean类型');
            }
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