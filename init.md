# 初始化

> 初始化文件拆分成四个js文件，分别是：require.js、http.js、bootstrap.js和init.js


#### require.js

引入第三方的js库和css库


#### http.js

对所有的http请求进行相关操作，在这里对所有http请求添加了csrfToken以防止跨域攻击

> 项目开启初期vue-resource仍是官方指定ajax库，开发中期vue-resource被官方取消钦定，同时官方推荐使用axios。由于axios也是ssr必备的异步请求插件，故现在项目同时存在vue-resource和axios，后期会慢慢把所有的vue-resource转移成axios。


#### bootstrap.js

后期将取消


#### init.js

注册vue的全局组件、自定义指令、自定义过滤器，注册全局方法、自定义表单验证规则。



