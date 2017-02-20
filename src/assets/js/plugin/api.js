import Vue from 'vue'
import { api } from './protoName.js'

class PluginApi {
	constructor () {
		this.invoke = {status: false, fns: null}
	}

	/**
	 * 调用函数
	 */
	invokeFn (...fns) {
		this.invoke = {status:!this.invoke.status, fns: fns}
	}

	/**
	 * 执行函数
	 * @param  {Object}  vm  vue实例
	 */
	excFn (vm, ...fns) {
		this.invoke.fns.forEach((fn) => {
			vm[fns.find((item) => item === fn)]()
		})
	}
}

let pluginApi = new PluginApi()

export default {
    install() {

    	if(Vue.prototype.$pluginApi == undefined) {
    		Object.defineProperty(Vue.prototype, '$pluginApi', {
			    get () { return pluginApi }
			})
    	}
	    
	    Vue.mixin({
			data() {
		        return {
		            $pluginApi: pluginApi
		        }
    		},
    		computed: {
    			[api.invoke] () {
                    return this.$pluginApi.invoke;
	            }
    		}
		})
	}
};