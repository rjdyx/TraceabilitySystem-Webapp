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
        <span class="nprogress-spinner" role="nprogress-spinner"><span class="nprogress-spinner-icon">111</span></span>
    </div>

</template>

<script>
    export default {
        name:'App'
    }
</script>

<style>
	.nprogress-spinner {
	    display: none;
	    position: fixed;
	    z-index: 2000;
	    bottom: 105px;
	    right: 15px;
	}
	.nprogress-spinner-icon {
		display: block;
	    width: 18px;
	    height: 18px;
	    box-sizing: border-box;
	    border: solid 2px transparent;
	    border-top-color: #5eb95e;
	    border-left-color: #5eb95e;
	    border-radius: 50%;
	    -webkit-animation: nprogress-spinner 400ms linear infinite;
	    animation: nprogress-spinner 400ms linear infinite;
	}

	@-webkit-keyframes nprogress-spinner {
	  0%   { -webkit-transform: rotate(0deg); }
	  100% { -webkit-transform: rotate(360deg); }
	}
	@keyframes nprogress-spinner {
	  0%   { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}
</style>
