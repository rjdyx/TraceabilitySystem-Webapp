<template>
	<div>
		<table-list
		ref="tableList"
		:component="component"
		:_key="_key"
		:searchPlaceholder="searchPlaceholder"
		:searchUrl="searchUrl"
		:theads="theads"
		:protos="protos"
		:widths="widths"
		>
		<button slot="search" class="stl-btn" @click="back">返回</button>
		</table-list>
	</div>
</template>

<script>
	import tableList from '../components/public/table-list.vue';
	import Hispic from './hispic.vue'
	export default {
		name: 'record',
		data() {
			return {
				key: 'record',
				component: {open: null, hispic:Hispic},
				searchPlaceholder: '历史日期',
				searchUrl: 'record',
				theads: ['日期','天气','操作人'],
				protos: ['date','weathe','recorder'],
				widths: [28, 28, 17]
			}
		},
		components: {
			tableList,
			Hispic
		},
		mounted () {
			this.$refs.tableList.getAllLists(this.searchUrl);
		},
		methods: {
			/**
			 * 返回
			 */
			back() {
			 this.$router.push('/webapp')
			},
		}
	}
</script>

<style>
	
</style>