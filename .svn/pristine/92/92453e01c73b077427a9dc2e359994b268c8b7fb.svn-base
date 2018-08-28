<template>
	<div class="user-error">
		<header class="header">
			<div @click="back()"><img src="/static/images/nav-forget-icon-goback.png" alt="" /></div>
			<h1>个人错题分析</h1>
		</header>
		<div class="my-content">
			<div class="swiper-books">
				<el-carousel arrow='never' :autoplay='false' type="card" height="200px">
				    <el-carousel-item v-for="(item,index) in errBooks.bookurl" :key="index">
				      	<img :src="item" alt="" />

				    </el-carousel-item>
				</el-carousel>
				<h3 class="books-num">闯关{{errBooks.bookCount}}本书籍</h3>
				<p class="books-total">
					<span>答题{{errBooks.answerCount}}次</span>
					<span>共{{errBooks.amountCount}}题</span>
				</p>
			</div>
			<div class="bgg"></div>
			<!--{{errEchart}}-->
			<div class="echart-timu">
				<h1>
					<img src="../../assets/images/content-qbct-icon.png"/>
					<span>全部错题共{{errAll}}题</span>
				</h1>
				<div class="echart-pie">
					<div id="map1" style="width: 75%;height:280px;margin: 0 auto;">
						
					</div>
				</div>
			</div>
			
			
		</div>
		

	</div>
</template>

<script>
	
	import my from '@/network/my/my.js'
	import eChart from '../../lib/myCharts.js' 
	export default {
		data() {
			return {
				errAll:'',
				errBooks:[],
				errEchart:[],
					
				
			}
		},
		components:{
			
		},
		mounted() {
			this.getInit();
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			getInit (){
			
				let params ={
					challengeId:''
				}
				my.errChart(params).then(res=>{
//					console.log('错误分析',res);
					if(res.data.code==0){
						this.errEchart=res.data.data.typeErrors;
						this.errAll = res.data.data.errorAnswerCount;
						this.getEchart();
					}
					
				})
				my.errBooks().then(res=>{
//					console.log('书本',res);
					if(res.data.code==0){
						this.errBooks=res.data.data;
					}
					
				})
			},
			getEchart(){
				let dataName=[];
				let dataArr=[];
//				console.log('sss',this.errEchart);
				for(var i=0; i<this.errEchart.length;i++){
					dataName.push(this.errEchart[i].qtName);
					dataArr.push({
						value:this.errEchart[i].typeErrorRate,
						name:this.errEchart[i].qtName,
						num:this.errEchart[i].errorTypeCount
					})
				}
				let myChart = echarts.init(document.getElementById('map1'));
				myChart.setOption(eChart.pie(dataName,dataArr))
			},
			
			
		}

	}
</script>

<style scoped lang="less">
	.user-error {
		/*border-radius: 4px 16px 16px 4px;
	
		-webkit-box-shadow: 3px 3px 12px #d2d2d2;
		box-shadow: 3px 3px 12px #d2d2d2;*/
		
		
		
		background: #fff;
		.swiper-books{
			margin:20px auto;
			padding:0 60px;
			.books-num{
				margin: 20px 0;
				text-align: center;
				font-size: 16px;
			}
			.books-total{
				overflow: hidden;
				margin: 0 5%;
				>span{
					float: left;
					width: 50%;
					text-align: center;
					font-size: 14px;
				}
				>span:last-child{
					border-left: 1px solid #EAEAEA;
				}
			}
			img{
					width: 98%;
					height: 98%;
					border-radius: 4px 16px 16px 4px;
					-webkit-box-shadow: 3px 3px 20px #D3D5D4;
					box-shadow: 3px 3px 20px #D3D5D4;
			}
		}
		.echart-timu{
			>h1{
				text-align: center;
				margin-top: 15px;
				img{
					width: 24px;
					margin-top: 3px;
					vertical-align: middle;
				}
				span{
					font-size: 16px;
					color: #979797;
					line-height: 22px;
				}
			}
		}
		
	}
	
	
	
	
	
	
</style>
<style>

  
  /*.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }*/
</style>