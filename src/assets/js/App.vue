/**
 * 
 * 最顶层组件
 * @description 最顶层的组件，包含路由跳转组件元素和loading组件
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
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
