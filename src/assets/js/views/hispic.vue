<template>
	<router-link :to="{name:'dailylog',params:{date:item.date}}" tag="span" replace><img :src="$img('rightRaw.png')" alt=""></router-link>
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