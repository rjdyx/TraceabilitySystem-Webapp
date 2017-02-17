# 目录结构

| 目录名 | 说明 |
| :--- | :--- |
| build | 存放项目构建环境的文件 |
| dist | 构建后生成的发布版本文件 |
| public | 存放图片等静态资源文件 |
| src/assets/js | vue、js的开发目录 |
| src/assets/sass | css、sass的开发目录 |
| src/lang | 存放语言包 |
| src/view | 存放html文件 |
| env.js | 环境配置文件 |
| server.js | 项目启动时运行的构建文件 |

#### src/assets/js目录：

| 目录名 | 说明 |
| :--- | :--- |
| components | 存放公共组件和对应顶层组件下的小组件 |
| directive | 自定义指令 |
| filters | 自定义过滤器 |
| init | 存放初始化js文件 |
| plugin | 存放自定义插件 |
| route | 路由 |
| utils | 存放自定义的全局函数、表单验证规则 |
| views | 存放顶层组件和次顶层组件 |
| vuex | 存放vuex相关js文件 |
| App.vue | 根组件 |
| client-entry.js | 客户端入口js文件 |
| server-entry.js | 服务端入口js文件 |
| index.js | 客户端和服务端入口文件共用的入口js文件 |

App.vue作为根组件，整个SPA的页面跳转都在此组件进行，App.vue的代码如下：

```
<template>
    <div id="app">
        <router-view></router-view>
        <loading></loading>
    </div>
</template>

<script>
    export default {
        name:'App'
    }
</script>

<style>
    .loader {
        display: none;
        position: fixed;
        z-index: 2000;
        bottom: 105px;
        right: 15px;
    }
</style>
```

故App.vue的直接子组件都称为顶层组件，比如src/assets/js/views目录下的index.vue、404.vue和login.vue，即这些组件是写入routers.js里面的并作为顶层路由。

而次顶层组件是以顶层组件作为父组件的，比如index.vue下面的basic.vue、dailylog.vue等且这些组件也写入routers.js里面的并作为index的子路由。



#### src/assets/sass目录：

| 目录名 | 说明 |
| :--- | :--- |
| function | 存放自定义function |
| mixins | 存放自定义mixin |
| public | 存放reset文件和项目公共的基础样式文件 |



