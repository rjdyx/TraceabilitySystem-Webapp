/**
 * 
 * 跳转操作组件
 * @description 农业日志页面中跳转到日志图片生成页面的操作组件
 * @author 郑启强
 * @date 2017/01/20
 * 
 */
<template>
	<router-link :to="{name:'dailylog',params:{date:item.date}}" tag="span" exact><img :src="$img('rightRaw.png')" alt=""></router-link>
</template>

<script>
	export default {
		name: 'hispic',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style scoped>
	img {
		display: inline-block;
    	vertical-align: middle;
		width: 10px;
	}
</style>