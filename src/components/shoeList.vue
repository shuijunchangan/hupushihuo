<template>
	<div>
		<header>最新推荐</header>
		<main v-for="item in listt.list">
			<div class="left">
				<img :src="item.pic">
			</div>
			<div class="right">
				<p class="name">{{item.name}}</p>
				<p class="desc">{{item.desc}}</p>
				<p class="three">
					<span><span>{{item.dianming}}</span><span class="red">&nbsp;{{item.price}}</span></span>
					<span class="mar">{{item.zan}}</span>
				</p>
			</div>
		</main>
		<footer></footer>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState(["listt","list"])
		}
	}
</script>

<style lang="scss" scoped>
	header{
		font-size:1.1875rem;
		border-top:10px solid lightgray;
		height:3.125rem;
		line-height:3.125rem;
	}
	main{
		padding:5px;
		box-sizing: border-box;
		display: flex;
		.left{
			width:40%;
			img{
				width:100%;
			}
		}
		.right{
			margin-left: 20px;
			font-size: 15px;
			width:60%;
			.name{
				height:30px;
				line-height:30px;
				font-weight: bold;
			} 
			.desc{
				margin-top:30px;
			} 
			.three{
				display: flex;
				justify-content: space-between;
				margin-top:15px;
				.red{
					color:red;
				}
			}
			
		}
	}
	footer{
		height:4.375rem;
	}
</style>
