<template>
	<div>
		<rexiaoheader></rexiaoheader>
		<router-view></router-view>
	</div>
	
</template>

<script>
	import rexiaoheader from '../../components/rexiaoheader.vue'
	import rexiaolist from '../../components/rexiaolist.vue'
	export default {
		components:{
			rexiaoheader,
			
		}
	}
</script>

<style>
	
</style>
