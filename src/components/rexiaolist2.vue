
<template>
	<div>
		<h2></h2>
		<div class="list" v-for="item in list">
			<img :src="item.pic" alt="">
			<ul>
				<li>{{item.name}}</li>
				<li>{{item.dianming}}</li>
				<li>{{item.price}}</li>
				<span>{{item.zan}}</span>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				"list":[
					{
						"name":"conver,jkjkjkj,VaporMax,2.0",
						"dianming":"白色",
						"price":"￥428.00",
						"zan":"1",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDEvMTQyMS9lZjQwNmZhZTJjMzMxNTYyZTEzNjE0ZDEzMzM5MTIzYi5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"Air,jorden,1",
						"dianming":"黑红",
						"price":"￥729.00",
						"zan":"2",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL20uMzYwYnV5aW1nLmNvbS9tb2JpbGVjbXMvczcyMHg3MjBfamZzL3QxLzEwNjkzLzE4LzEwODQwLzIwMDI0Ny81YzY3YjcyZEU4MDkzMjg5NC9jMDk1ZGQ2NzVlOGQzMmRhLmpwZyFxNzAuanBn?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"adidas,ultra,boost,4.0",
						"dianming":"大红",
						"price":"￥9593.00",
						"zan":"3",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzg4NTc0ODQ1Ni9UQjJLVkJDZHJ2cEsxUmpTWkZxWFhjWFVWWGFfISE4ODU3NDg0NTYuanBn?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"Air,jorden,11",
						"dianming":"黄色",
						"price":"￥1448.00",
						"zan":"4",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9zaGFpd3UvMjAxOC0xMi0xMi85MWVhYTAyN2RhODAzZDYyM2MzMGFlZjMwOWZjYzc5My5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"Nike,Air,VaporMax,2.0",
						"dianming":"白色",
						"price":"￥678.00",
						"zan":"5",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDMvMjcyMS9iNGQ0NTU5ODE3Y2U2OTJjMTg0ZjRkYmFiYmI4NzA4ZC5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"Nike,Air,VaporMax,2.0",
						"dianming":"深蓝",
						"price":"￥24.00",
						"zan":"6",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzU4NzMwNTcxMy9PMUNOMDFyQTdzdmcxczRiRDE3Nkx0dF8hITU4NzMwNTcxMy5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"Nike,Air,VaporMax,2.0",
						"dianming":"黑色",
						"price":"￥28.00",
						"zan":"7",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDcvMTcwOS8xMzM2MjJmMTcyMDQwYTc1YzU4YzJlYTQwYTQxZTg4Zi5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"8",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy9zdHlsZS9hdWRpdC8yMDE4MTIxMi84NzNiYjA5MTZlN2QxZWQzMmRmMjY2MjlmZDA2ZGI2MDE1NDQ1NDgxNjYucG5n?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"匹克高帮皮面篮球鞋",
						"dianming":"墨绿",
						"price":"￥1678.00",
						"zan":"9",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9rdXBsb2FkMjAxOC8yMDE4MTIyOC8xNTQ2MDAwOTUzMDAwMC5qcGVn?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"秋冬网面地磅篮球鞋",
						"dianming":"黑银",
						"price":"￥678.00",
						"zan":"10",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzQ1ODI4ODY2Mi9PMUNOMDFaZWkxUkcyRHJGQ2J2bTU3ZF8hITQ1ODI4ODY2Mi5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"11",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE3MTAvMDQxMC8yOTdkZGUwYjEzMGNkODMwMjlkMGMwYTc1ZDEzYjQ1MC5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"12",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzQ5OTIxODgyL08xQ04wMXliTXNsdTFQbHpzRUNjeXVmXyEhNDk5MjE4ODIuanBn?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"13",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy9zdHlsZS9hdWRpdC8yMDE4MTIwOC84Y2YzOTU0OWY3YTUyZjVhOGY5ODdkYjgyODk4YzJiYzE1NDQyNDI4MTMuanBn?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"14",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9zaGFpd3UvMjAxOTAzMTEvNjA0MjRiM2ZjZTFiYTgyOWNkNmQzNjQ2ZWFkZWZjYmUuanBn?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"15",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9zaGFpd3UvMjAxOC0xMi0yMy9hOTFkM2JmNDM2ZWU0MGE0M2Q5NDM4MDAzOWVlNDBjOC5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"16",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9zaGFpd3UvMjAxOC0xMi0yNi80YTU1NGI5YTg5MWM4ZWJkMTFkOWIwNjRlZWY0MWQ0Yy5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
					{
						"name":"耐磨篮球鞋",
						"dianming":"深蓝",
						"price":"￥678.00",
						"zan":"17",
						"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9zaGFpd3UvMjAxOC0wOC0yNi9lNWQ4NjJhODU1Mjk3M2ZhYTNhZDQ4YWMyYWIxYjAwYS5qcGc?imageView2/0/w/300/h/300/interlace/1"
					},
				{
					"name":"耐磨篮球鞋",
					"dianming":"深蓝",
					"price":"￥678.00",
					"zan":"18",
					"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDQvMDkxMC85NGNjNWFiZTlhNmY0ZTdmNDY2NTRhOGM3OWNiZDNhYS5qcGc?imageView2/0/w/300/h/300/interlace/1"
				},
				{
					"name":"Nike,Vapor,Street,Flyknit",
					
					"dianming":"灰色",
					"price":"￥124.00",
					"zan":"19",
					"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9zaGFpd3UvMjAxOC0wOS0xMi9iOWJlZWI5YzY1YjMwNWUxMjY4NDA0Y2MwZWU2OTBjNC5qcGc?imageView2/0/w/300/h/300/interlace/1"
				},
				{
					"name":"Nike,Epic,react,fly",
					"dianming":"大红",
					"price":"￥399.00",
					"zan":"20",
					"pic":"http://shihuoproxy.hupucdn.com/aHR0cDovL20uMzYwYnV5aW1nLmNvbS9tb2JpbGVjbXMvczcyMHg3MjBfamZzL3QxNjQ3MS8xMTAvMTgzNzIzNzg5LzkyMDkyL2U0NzJkMGNkLzVhMmEwNDZlTmUxODE1ZjUwLmpwZyFxNzAuanBn?imageView2/0/w/300/h/300/interlace/1"
				},
				
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	h2{
		height:6.25rem;
	}
	.list{
		display: flex;
		border-bottom:1px solid gray;
		img{
			width:30%;
			height:7.5rem;
		}
		ul{
			width:70%;
			position: relative;
			li{
				font-size:16px;
				height:40px;
				line-height: 40px;
				margin-left:20px;
			}
			li:nth-child(3){
				color:red;
			}
			span{
				position: absolute;
				top:10px;
				right:20px;
				width:20px;
				height:30px;
				line-height: 30px;
				background: red;
				color:white;
				text-align: center;
			}
		}
	}
</style>
