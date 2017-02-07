import Vue from 'vue';

/**
 * 全局注册通用方法
 */
export default {
    install() {

        /**
         * 获取分页后的列表项
         * @param vm
         * @param url
         * @param resolve
         * @param reject
         */
        Vue.prototype.$index = (vm, url, params) => {
            return new Promise(function(resolve, reject){
                vm.$http.get(vm.$adminUrl(url + '/query'), {params:params}).then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            });
        };

        /**
         * 新增一条记录，附带验证检测判断
         * @param vm
         * @param url
         * @param messages
         * @param hasFile
         */
        Vue.prototype.$storeL = (vm, url, messages, hasFile=false) => {
            return new Promise(function(resolve, reject){
                // 验证表单
                vm.$validator.validateAll();
                // 如果表单报错则不提交
                if(vm.errors.any()) {
                    reject(false);
                }else {
                    let headers = (hasFile === true?{headers:{'Content-Type':'multipart/form-data'}}:{});
                    vm.$http.post(vm.$adminUrl(url), messages, headers).then((response) => {
                        resolve(response);
                    }, (error) => {
                        reject(error);
                    });
                }
            });
        };

        /**
         * 单个删除
         * @param vm
         * @param url
         * @param id
         * @param resolve
         * @param reject
         */
        Vue.prototype.$destroyL = (vm, url, id) => {
            return new Promise(function(resolve, reject){
                vm.$http.delete(vm.$adminUrl(url + '/' + id)).then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            });
            
        };

        /**
         * 批量删除
         * @param vm
         * @param url
         * @param ids
         * @param resolve
         * @param reject
         */
        Vue.prototype.$batchDestroy = (vm, url, ids) => {
            return new Promise(function(resolve, reject){
                vm.$http.delete(vm.$adminUrl(url + '/deletes'), {body:{'ids':ids}}).then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            });
            
        };

        /**
         * 检查重名
         * @param vm
         * @param url
         * @param params
         * @param resolve
         * @param reject
         */
        Vue.prototype.$check = (vm, url, params) => {
            return new Promise(function(resolve, reject){
                vm.$http.get(vm.$adminUrl(url + '/check'), {params:params}).then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            });
        };

        /**
         * 更新编辑
         * @param vm
         * @param url
         * @param messages
         * @param resolve
         * @param reject
         * @returns {boolean}
         */
        Vue.prototype.$update = (vm, url, messages, hasFile=false) => {
            return new Promise(function(resolve, reject){
                // 验证表单
                vm.$validator.validateAll();
                // 如果表单报错则不提交
                if(vm.errors.any()) {
                    reject(false);
                }else {
                    let headers = (hasFile === true?{headers:{'Content-Type':'multipart/form-data'}}:{});
                    let id = (hasFile === true?messages.get('id'):messages.id);
                    vm.$http.put(vm.$adminUrl(url) + '/' + id, messages, headers).then((response) => {
                        resolve(response);
                    }, (error) => {
                        reject(error);
                    });
                }
            });

        };

        /**
         * 查询
         * @param vm
         * @param url
         * @param params
         * @param resolve
         * @param reject
         */
        Vue.prototype.$queryWithParams = (vm, url, params) => {
            return new Promise(function(resolve, reject){
                vm.$http.get(vm.$adminUrl(url + '/query'), {params:params}).then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            });
            
        };

    }
};