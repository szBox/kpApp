<template>
	<div class="see-error">
		<div class="see-error-top">
			<header class="header">
				<div @click="back()"><img src="/static/images/content-bsjt-icon-right(1).png" alt="" /></div>
				<h1>查看错题</h1>
			</header>
			<div class="err-score">
				<h5>
					{{init.score}}<i>分</i>
				</h5>
				<div>
					<p>{{init.errorAnswerCount}}道错题</p>
					<p>类型{{init.typeSize}}种</p>
				</div>
			</div>
			
		</div>
		<ul class="see-error-list">
			<li @click="goErrorInfo(item.cid)" v-for='(item,index) in itemList' :key='index'>
				
				<h4>{{item.qtName}}</h4>
				<p>错误率 <b>{{item.typeErrorRate}}%</b>(每题{{item.rscore}}分,共错{{item.errorTypeCount}}题)</p>
				
				<img class="icon-right" src="/static/images/content-jt-icon-right.png" alt="" />
			</li>
		</ul>
	</div>
</template>

<script>
	
	import record from '@/network/record/record.js'
	export default{
//		data() {
//			return {
//				itemList:[],
//				init:'',
//			}
//		},
		data:function(){
			return{
				itemList:[],
				init:'',
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			back() {
				this.$router.push('/record');
			},
			getList(){
				 let params ={
					challengeId: this.$route.params.id
				}
				record.errorItem(params).then(res=>{

					if(res.data.code==0){
						this.init = res.data.data;
						this.itemList = res.data.data.typeErrors;
					}
					
				})
			},
			goErrorInfo(id){
				this.$router.push({
					path:'/seeInfo',
					query: {
						id: id,
						type:'N'
					}  
				})
			}
		}

	}
</script>

<style lang="less" scoped>
	.see-error{
		.header{
			background: transparent;
			-webkit-box-shadow: 0 0 0.266667rem transparent;
    		box-shadow: 0 0 0.266667rem transparent;
    		h1{
    			color: #fff;
    		}
		}
		.see-error-top{
			height: 240px;
			background: url(/static/images/content-bg.png);
			background-size: cover;
			.err-score{
				padding-top: 50px;
				>h5{
					text-align: center;
					margin: 32px 0;
					color: #fff;
					font-weight: bold;
					font-size: 60px;
					>i{
						font-size: 15px;
					}
				}
				>div{
					display: flex;
					flex-wrap: wrap;
					>p{
						width: 50%;
						text-align: center;
						color: #fff;
						font-size: 18px;
					}
				}
			}
			
			
		}
		.see-error-list{
			li{
				position: relative;
				border-bottom: 1px solid #ECECEC;
				padding: 15px;
				h4{
					font-size:15px;
					color: #5A5A5A;
					font-weight: bold;
					margin-bottom: 5px;
				}
				p{
					font-size: 13px;
					color: #939393;
					>b{
						color: #ff583c;
						font-weight: bold;
						font-size: 16px;
						margin-right: 15px;
					}
				}
				img{
					right: 10px;
				}
			}
		}
	}
	
</style>