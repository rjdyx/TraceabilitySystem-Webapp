# 生之园大数据平台

---

## 前端

### 安装

master分支存放上线的正式版本；

dev分支为开发的主分支，请在dev分支的基础上创建自己的开发分支（如：rigar分支）；

除了master和dev分支，其余自定义的分支请勿长时间存在远程库上。

**构建步骤**

> 要求Node.js 6+

```
# 安装依赖
npm install

# 运行开发模式，在localhost:8080上进行热加载
npm run dev

# 构建发布版本
npm run build
```

---

### 目录结构

> 前端的开发是在resources目录下进行

| 目录名 | 说明 |
| :--- | :--- |
| public | 存放图片等静态资源文件 |
| resources/assets/js | vue、js的开发目录 |
| resources/assets/sass | css、sass的开发目录 |
| resources/lang | 存放语言包 |
| resources/view | 存放blade文件 |
| env.js | 前端环境配置文件 |

#### resources/assets/js目录：

| 目录名 | 说明 |
| :--- | :--- |
| components | 存放公共组件和对应顶层组件下的小组件 |
| config | 存放初始化js文件和配置js文件 |
| directive | 自定义指令 |
| filters | 自定义过滤器 |
| route | 路由 |
| utils | 存放自定义的全局函数、表单验证规则 |
| views | 存放顶层组件和次顶层组件 |
| vuex | 存放vuex相关js文件 |
| App.vue | 根组件 |
| index.js | 入口js文件 |

App.vue作为根组件，整个SPA的页面跳转都在此组件进行，App.vue的代码如下：

```
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'App'
    }
</script>
```

故App.vue的直接子组件都称为顶层组件，比如src/assets/js/views目录下的index.vue、404.vue和login.vue，即这些组件是写入routers.js里面的并作为顶层路由。

而次顶层组件是以顶层组件作为父组件的，比如index.vue下面可能有basic.vue、dailylog.vue等组件，那么这些组件也写入routers.js里面的并作为index的子路由。

#### resources/assets/sass目录：

| 目录名 | 说明 |
| :--- | :--- |
| function | 存放自定义function |
| mixins | 存放自定义mixin |
| public | 存放reset文件和项目公共的基础样式文件 |

---



