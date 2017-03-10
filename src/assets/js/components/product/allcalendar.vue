<template>
  	<div>
  		<full-calendar :events='fcEvents' lang='zh'></full-calendar>
  	</div>
</template>

<script>
var demoEvents=[
		{
			title:'bad',
			start:'2016-08-25',
			end:'2017-07-17'
		}
	]
export default {
	
  name: 'all',
		data() {
			return {
				fcEvents:demoEvents
			}
		},
		components:{
			'full-calendar':require('vue-fullcalendar')
		}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
