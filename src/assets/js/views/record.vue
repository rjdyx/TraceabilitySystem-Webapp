/**
 * 
 * 农业日志记录组件
 * @description 
 * @author 郑启强
 * @date 2017/01/20
 * 
 */
<template>
	<div>
		<table-manage
			ref="TableManage"
			:component="component"
			:_key="_key"
			:searchPlaceholder="searchPlaceholder"
			:searchUrl="searchUrl"
			:theads="theads"
			:protos="protos"
			:widths="widths"
		>
		<button slot="search" class="stl-btn" @click="back">返回</button>
		</table-manage>
	</div>
</template>

<script>
	import TableManage from '../components/public/table-manage.vue';
	import Hispic from '../components/log/hispic.vue'
	export default {
		name: 'record',
		data() {
			return {
				key: 'record',
				component: {open: {component: Hispic, next: false}},
				searchPlaceholder: '历史日期',
				searchUrl: 'record',
				theads: ['日期','天气','操作人'],
				protos: ['date','weathe','recorder'],
				widths: [28, 28, 17]
			}
		},
		components: {
			TableManage,
			Hispic
		},
		mounted () {
			this.$refs.TableManage.getAllLists(this.searchUrl);
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