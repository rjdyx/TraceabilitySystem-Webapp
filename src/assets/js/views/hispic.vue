<template>
	<span>
		<router-link :to="{name:'dailylog',params:{date:item.date}}" tag="td" replace><img :src="$img('ok.png')" alt=""></router-link>
	</span>
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