import Vue from 'vue';
import TableList from './TableList'
import tableListComponent from './component/table-list.vue'

export default {
    install() {


    	if(Vue.prototype.$tableList == undefined) {
    		Object.defineProperty(Vue.prototype, '$tableList', {
			    get () { return TableList.tableList }
			})
    	}
	    
	    Vue.mixin({
			data() {
		        return {
		            $tableList: TableList
		        }
    		},
    		computed: {
    			// 存放列表项的数组
    			list () {
                    return this.$tableList.list;
	            },

	            // 存放被选中的列表项的数组
	            selectedLists () {
                    return this.$tableList.selectedLists;
	            },

	            // 是否显示列表项
	            showList () {
                    return this.$tableList.showList; 
	            },

	            // 触发初始化
	            invokeInit () {
	            	return this.$tableList.invokeInit;
	            },

	            // 列表过渡效果
	            slideList () {
	            	return this.$tableList.slideList;
	            },

	            // 列表项出现/消失效果
	            slideListItem () {
	            	return this.$tableList.slideListItem;
	            }
    		}
		})

		Vue.component('table-list', tableListComponent)
	}
};