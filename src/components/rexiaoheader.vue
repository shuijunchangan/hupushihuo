<template>
	<div class="fix">
		<header>
			<span @click="$router.push('/zhuangbei')"><</span>
			<span>热销排行</span>
			<span>...</span>
		</header>
		<nav>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide w" v-for="(item,index) in titles">
						<span :class="{'active':index===curIndex}">{{item.text}}</span>
					</div>
					
				</div>
				
			</div>
		</nav>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css"
	export default {
		data(){
			return {
				curIndex:0,
				titles:[
					{
						text:"篮球鞋",
						type:"rexiaolist"
					},
					{
						text:"休闲鞋",
						type:"rexiaolist2"
					},
					{
						text:"跑鞋",
						type:"rexiaolist"
					},
					{
						text:"滑板鞋",
						type:"rexiaolist2"
					},
					{
						text:"拖鞋",
						type:"rexiaolist"
					},
					{
						text:"凉鞋",
						type:"rexiaolist2"
					},
					{
						text:"训练鞋",
						type:"rexiaolist"
					},
					{
						text:"休闲鞋",
						type:"rexiaolist2"
					},
				]
			}
		},
		mounted(){
	 	 			var vm= this;
	 	 			 new Swiper ('.swiper-container', {
					  		freeMode:true,
					  		slidesPerView : 'auto',
					  		on:{
					  			click(){
										vm.curIndex = this.clickedIndex;
					  				this.setTransition(300)
					  				
					  				//找到当前的元素
					  				var el = this.slides[vm.curIndex];
					  				//找到当前元素的位置
					  				var elPos = el.offsetLeft +el.offsetWidth/2;
					  				//找到当前的容器元素
					  				var wrappWidth = el.parentNode.clientWidth;
					  				//找到最大的滑动距离
					  				var maxDis = this.maxTranslate();
					  				//找到最大的位置
					  				var maxPos =-maxDis +wrappWidth/2;

					  				if(elPos<wrappWidth/2){
					  					this.setTranslate(0);
					  				}
					  				else if(elPos>maxPos){
					  					this.setTranslate(maxDis);
					  				}
					  				else{
					  					this.setTranslate(wrappWidth/2-elPos);
					  				}
										if(vm.curIndex===0){
					  					vm.$router.push("/rexiao/rexiaolist")
					  				}else{
											console.log(vm.titles[vm.curIndex].type)
											vm.$router.push('/rexiao/'+vm.titles[vm.curIndex].type)
										}
					  			}
					  		}
					  		
					    	
						})
	 	 }
	}
</script>

<style lang="scss" scoped>
	.fix{
		z-index:99;
		position:fixed;
		top:0;
		width:100%;
		background: white;
		header{
			width:100%;
			height:50px;
			line-height:50px;
			padding:0 0.9375rem;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			font-weight: bold;
			span:nth-child(1){
				font-size: 30px;
			}
			span:nth-child(2){
				font-size: 18px;
			}
			span:nth-child(3){
				font-size:30px;
				margin-top:-0.3125rem;
			}
		}
		nav{
			width:100%;
			height:50px;
			line-height: 50px;
			border-top:1px solid gray;
			border-bottom:1px solid gray;
			overflow: hidden;
			.swiper-wrapper{
				
			}
			.w{
				width:15%!important;
				margin:0;
				text-align: center;
				span{
					display: inline-block;
					height:45px;
				}
			}
		}
	}
	.active{
		color:red;
		border-bottom:5px solid red;
	}
</style>
