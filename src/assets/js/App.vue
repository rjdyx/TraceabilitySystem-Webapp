/**
 * 
 * 最顶层组件
 * @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template>

    <div id="app">
        <router-view></router-view>
        <!-- <span class="mynprogress-spinner"><span class="mynprogress-spinner-icon"></span></span> -->
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
	    display: block;
	    position: fixed;
	    z-index: 2000;
	    bottom: 105px;
	    right: 15px;
	}
</style>
