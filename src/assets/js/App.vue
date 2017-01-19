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
        <span class="nprogress-spinner" role="nprogress-spinner"><span class="nprogress-spinner-icon"></span></span>
    </div>

</template>

<script>
    export default {
        name:'App'
    }
</script>

<style scoped>
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
	@keyframes nprogress-spinner {
		from {
			transform: rotate(0deg);
			-ms-transform: rotate(0deg);		/* IE 9 */
			-webkit-transform: rotate(0deg);	/* Safari and Chrome */
			-o-transform: rotate(0deg);		/* Opera */
			-moz-transform: rotate(0deg);		/* Firefox */
		}
		to {
			transform: rotate(360deg);
			-ms-transform: rotate(360deg);		/* IE 9 */
			-webkit-transform: rotate(360deg);	/* Safari and Chrome */
			-o-transform: rotate(360deg);		/* Opera */
			-moz-transform: rotate(360deg);		/* Firefox */
		}
	}

	@-webkit-keyframes nprogress-spinner {
		from {
			transform: rotate(0deg);
			-ms-transform: rotate(0deg);		/* IE 9 */
			-webkit-transform: rotate(0deg);	/* Safari and Chrome */
			-o-transform: rotate(0deg);		/* Opera */
			-moz-transform: rotate(0deg);		/* Firefox */
		}
		to {
			transform: rotate(360deg);
			-ms-transform: rotate(360deg);		/* IE 9 */
			-webkit-transform: rotate(360deg);	/* Safari and Chrome */
			-o-transform: rotate(360deg);		/* Opera */
			-moz-transform: rotate(360deg);		/* Firefox */
		}
	}
</style>
