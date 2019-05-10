<template>
  <div id="app">
		<router-view/>
    
    <ul class="footer">
    	<li>
				<router-link to="/shouye" active-class="active" class-active><span class="iconfont">&#xe606;</span><span>首页</span></router-link>
			</li>
    	<li><router-link to="/youhui" active-class="active"><span class="iconfont">&#xe773;</span><span>优惠</span></router-link></li>
    	<li><router-link to="/faxian" active-class="active"><span class="iconfont">&#xe629;</span><span>发现</span></router-link></li>
    	<li><router-link to="/zhuangbei" active-class="active"><span class="iconfont">&#xe613;</span><span>装备</span></router-link></li>
    	<li><router-link to="/gengduo" active-class="active"><span class="iconfont">&#xe64d;</span><span>更多</span></router-link></li>
    </ul>
    
  </div>
</template>

<style lang="scss" scoped>
	@import "./assets/css/reset.css";
	
	@font-face {
		font-family: 'iconfont';  /* project id 1182626 */
		src: url('//at.alicdn.com/t/font_1182626_7j8hwqe4vy5.eot');
		src: url('//at.alicdn.com/t/font_1182626_7j8hwqe4vy5.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_1182626_7j8hwqe4vy5.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1182626_7j8hwqe4vy5.woff') format('woff'),
		url('//at.alicdn.com/t/font_1182626_7j8hwqe4vy5.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1182626_7j8hwqe4vy5.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 23px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		
	}


	.footer{
		padding:10px 0;
		width:100%;
		height:40px;
		border-top:1px solid gray;
		position:fixed;
		bottom:0;
		display: flex;
		text-align:center;
		background: white;
		li{
			flex:1;
			a{
				display: flex;
				flex-direction: column;
				height:40px;
				justify-content: space-around;
				font-size:14px;
			}
		}
	}
	.active{
		color:red;
	}
</style>
