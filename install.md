# 安装

[https://github.com/rjdyx/TraceabilitySystem-Webapp.git](https://github.com/rjdyx/TraceabilitySystem-Webapp.git)

master分支存放上线的正式版本；

dev分支为开发的主分支，请在dev分支的基础上创建自己的开发分支（如：rigar分支）；

除了master和dev分支，其余自定义的分支请勿长时间存在远程库上。

# 

# 构建步骤

#### 要求Node.js 6+

```
# 安装依赖
npm install

# 运行开发模式，在localhost:8080上进行热加载
npm run dev

# 构建发布版本
npm run build

# 运行发布版本
npm start
```

> 开发模式下运行项目，在登录页面输入用户名密码时如果控制台报vee-validate相关的错误，请手动安装vee-validate插件

```
npm install vee-validate@2.0.0-beta.18 --save-dev
```



