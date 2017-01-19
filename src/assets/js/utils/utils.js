import Vue from 'vue';

/**
 * 全局注册通用方法
 */
export default {
    install() {

        /**
         * 弱提醒
         * @param msg
         */
        let timer = null;
        Vue.prototype.$alert = (msg, type='msg') => {
            $('#alertWeek').remove();
            let color = '';
            switch(type) {
                case 'm':
                case 'msg':
                    color = 'rgba(0,0,0,0.5)';
                    break;
                case 's':
                case 'success':
                    color = 'rgba(76,175,80,0.8)';
                    break;
                case 'e':
                case 'error':
                    color = 'rgba(244,67,54,0.6)';
                    break;
            }
            let $alert = $('<div class="week-alert" id="alertWeek"></div>');
            $alert.css({
                'position': 'absolute',
                'left': '0',
                'right': '0',
                'bottom': '-59px',
                'height': '59px',
                'lineHeight': '59px',
                'backgroundColor': color,
                'color': 'white',
                'textAlign': 'center',
                'boxSizing': 'border-box'
            });
            $('body').append($alert);
            $alert.animate({
                bottom: '0'
            }, 300);
            $alert.html(msg);
            clearTimeout(timer);
            timer = setTimeout(() => {
                $alert.animate({
                    opacity: '0'
                }, 300, () => {
                    $alert.remove();
                });
            }, 1500);
        };

        const env = require('../../../../env')
        // let host = env.app_url;
        let host = '';
        /**
         * 自动生成完整的前台url
         *
         * @param url {string}
         * @param type {string} url的类型，c为接口类型，p为视图类型
         * @returns {string}
         */
        Vue.prototype.$homeUrl = (url, type = 'c') => {

            let regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (type == 'c' || type == 'C') {
                return host + '/home/c/' + url;
            }

            if (type == 'p' || type == 'P') {
                return host + '/home/p/' + url;
            }
        };

        /**
         * 自动生成完整的后台url
         *
         * @param url {string}
         * @param type {string} url的类型，c为接口类型，p为视图类型
         * @returns {string}
         */
        Vue.prototype.$adminUrl = (url, type = 'c') => {

            let regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (type == 'c' || type == 'C') {
                return host + '/admin/c/' + url;
            }

            if (type == 'p' || type == 'P') {
                return host + '/admin/p/' + url;
            }
        };

        /**
         * 判断是否重名
         * @param vm
         * @param url
         * @param params
         * @param field
         * @param callback
         */
        Vue.prototype.$unique = (vm, url, params, field) => {

            return new Promise(function(resolve, reject){
                vm.$check(vm, url, params).then((response) => {

                    if (response.body == 'false') {

                        let errorBag = vm.$validator.getErrors();
                        field = field.split('.')[1];
                        errorBag.add(field, `名称重复`);
                        reject();
                    } else {
                        resolve();
                    }
                }, (error)=> {
                    reject(error);
                });
            });
            

        };

        /**
         * 比较器
         * @param proto
         * @returns {function()}
         */
        function compare(proto) {
            return (ob1, ob2) => {
                return ob1[proto] - ob2[proto];
            }
        }

        /**
         * 根据传过来的属性参数对对象数组继续逆序排序
         * @param arrObj 对象数组
         * @param proto 对象的属性
         * @returns {Array.<T>}
         */
        Vue.prototype.$reverseObj = (arrObj, proto) => {
            return arrObj.sort(compare(proto)).reverse();
        };

        /**
         * 把对象变成url参数
         * @param object
         * @returns {string}
         */
        Vue.prototype.$objectToParam = (object) => {
            let params = '';
            Object.keys(object).forEach(k => params += k + '=' + object[k] + '&');
            return params;
        };

        /**
         *
         * 组合图片路径
         *
         * @param url
         * @returns {*}
         */
        Vue.prototype.$img = (url, flag=true) => {
            if(url == undefined){
                return ;
            }
            if(url.indexOf('base64') > 0){
                return url;
            }
            let regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if(flag) {
                return (env.is_server?env.app_ano_url:'') + '/public/' + url;
            }else {
                return (env.is_server?env.app_ano_url:'') + '/' + url;
            }
        };

        /**
         * 进度事件+进度条判断
         * @param  {Object} progressEvent
         */
        Vue.prototype.$myProgress = (progressEvent) => {
            Vue.prototype.$mySpinner(false);
        };

        Vue.prototype.$mySpinner = (flag) => {
            if(!flag){
                $('.mynprogress-spinner').css('display', 'none');
            }else {
                $('.mynprogress-spinner').css('display', 'block');
            }
        };
    }
};