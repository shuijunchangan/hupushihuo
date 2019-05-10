<template>
	<div>
		<header>
			<input type="text" value="搜索全网低价好券">
			<span class="iconfont">&#xe6a3;</span>
		</header>
		<nav>
			<div>
				<p><span class="iconfont">&#xe617;</span></p>
				<p>热销排行</p>
			</div>
			<div class="bor">
				<p><span class="iconfont">&#xe616;</span></p>
				<p>好价精选</p>
			</div>
			<div>
				<p><span class="iconfont">&#xe6bb;</span></p>
				<p>当季新款</p>
			</div>
		</nav>
		<article v-for="item in Modular.Modular">
			<div :style="{background:'url('+item.bgimg+')'}">
				<p class="one">{{item.name}}{{item.ename}}</p>
				<p class="two">{{item.bannerSpan}}</p>
				<span v-for="v in item.hexagon"><img :src="v"></span>
			</div>
			<ul>
				<li><span v-for="k in item.kind">{{k}}</span></li>
				<li><span v-for="kk in item.brand">{{kk}}</span></li>
			</ul>
		</article>
		<shoeList></shoeList>
	</div>
</template>

<script>
	import shoeList from '../components/shoeList.vue'
	import {mapState,mapMutations,mapActions} from 'vuex';
	export default {
		components:{
			shoeList
		},
		methods:{
			
		},
		computed:{
			...mapState(["Modular","Modular"]),
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 23px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		
	}
	header{
		padding:10px 0;
		display: flex;
		justify-content: space-around;
		input{
			text-indent: 15px;
			width:320px;
			height:30px;
			background: gainsboro;
			border:none;
			border-radius:10px;
		}
	}
	nav{
		margin:20px 0 20px 0;
		display: flex;
		justify-content: space-around;
		font-size: 14px;
		.bor{
			border-left:1px solid gray;
			border-right:1px solid gray;
		}
		div{
			flex: 1;
			text-align: center;
			p{
				height:30px;
				line-height: 30px;
			}
			
		}
	}
	article{
		text-align: center;
		div{
			box-sizing: border-box;
			padding:20px 0;
			color: white;
			width:100%;
			height:180px;
			.one{
				font-size: 25px;
				
			}
			.two{
				margin-bottom: 10px;
				font-size: 15px;
			}
			span{
				margin:10px 10px 0 0;
				img{
					width:60px;
					height:60px;
					border-radius: 25px;
				}
			}		
		}
		ul li{
			display: flex;
			justify-content: space-around;
			height:35px;
			line-height:35px;
			font-size: 15px;
		}
	}
</style>
