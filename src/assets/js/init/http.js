/**
 * http请求过滤
 */

require('./require');

// vue-resource
Vue.http.interceptors.push((request, next) => {
    
    // 删除请求无法回调，故排除删除请求
    if(request.method != 'DELETE'){
        nprogress.set(0.5);
        // 给请求加上progress回调函数，用于结束进度条加载
        request = Object.assign(request, {progress:Vue.prototype.$myProgress});
    }
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});

Vue.http.options.emulateHTTP = true;


// axios
axios.interceptors.request.use(function (config) {
	config.headers = Object.assign(config.headers,{'X-CSRF-TOKEN': Laravel.csrfToken});
	return config;
}, function (error) {
	return Promise.reject(error);
});