<template>
	<div class="books" >
		
		<header class="header">
			<p>
				答题记录
			</p>
			<h1></h1>
			
		</header>
		<div class="my-content">
			<div class="nav-top">
				<p class="my-select grade-select">
					<cube-select
					  v-model="gradeVal"
					  :options="optionGrade"
					  @change='changeGrade'>
					</cube-select>
				</p>
 				<p class="my-select  book-select">
					<cube-select
					  v-model="bookVal"
					  :options="optionBook"
					  @change='changeBook'>
					</cube-select>
				</p>
			</div>
			<div  class='my-scroll'>
				<cube-scroll
				ref="scroll"
				@pulling-down="onPullingDown"
	   			@pulling-up="onPullingUp"
				:options="ScrollOptions">
				    <ul class="ul-list">
						<li v-for="(item,index) in list" :key='index'>
							<img :src="(item.coverUrl.indexOf('?uploadId')?item.coverUrl.split('?uploadId')[0]:item.coverUrl)" alt="" />
							
							<div class="li-absolut">
								<h3>
									<i  class="ellipsis">{{item.bookName}}</i>
									<span>({{item.score}}分)</span>
								</h3>
								<p class="ellipsis" >
									<img src="/static/images/content-msg-dt-icon.png"/>
									<span>第{{item.number}}次答题</span>
								</p>
								<p class="ellipsis">
									<img src="/static/images/content-msg-sj-icon.png"/>
									<span>{{item.insertTime | ymdHm}}</span>
								</p>
								<div class="btn-div">
									<button @click="goInfo(item.id)" class="see-info" type="button">查看详情</button>
									<button @click="goError(item.id)" class="see-error" type="button">只看错题</button>
								</div>
							</div>
						</li>
						<!--<li v-for="(item,index) in 10" :key="item">
	                        <div class="list-item">
	                            <img src="@/assets/images/cqssc.png" alt="">
	                            <br>
	                            <span>重庆时时彩{{index+1}}</span>
	                        </div>
	                    </li>-->
					</ul>
				</cube-scroll>
			</div>
			
			
			<div class="no-data" v-if='nodata'>
				<img src="/static/images/msg-dtym.png"/>
			</div>
			
		</div>

		

		


	</div>
</template>

<script>
	
	import books from '@/network/books/books.js';
	import common from '@/network/common/common.js';
	import filters from '@/lib/global.js';
	export default {
		data() {
			return {
				optionBook:[
					{value:'',
					text:'全部'}
				],
				optionGrade:[],
				gradeVal:this.global.session.get('user').gradeId,
				bookVal:'',
				scrollbar: true,
	            scrollbarFade: true,
	            startY: 0,
				
				page:1,
				size:50,
				list:[],
				nodata:false,
			}	
		},
		filters:{
			...filters.dateFilter,
		},
		computed: {
		   	ScrollOptions() {
		      	return {
		      		pullDownRefresh: this.pullDownRefreshObj,
				    pullUpLoad: this.pullUpLoadObj,
				    scrollbar: true
//		        	scrollbar: this.scrollbarObj,
//		       		startY: this.startY
		      	}
		    },
		    scrollbarObj: function() {
		      	return this.scrollbar ? { fade: this.scrollbarFade } : false
		    }
		 
		},
		created() {
//			this.typeSel();
			this.gradeOption();
			this.getList();
			var gradeInit = this.global.session.get('user').gradeId;
			this.bookSel(gradeInit);
  		},
  		
		methods:{
			gradeOption(){
				common.gradeOption().then(res => {

					for(let item of res.data.data)(
						this.optionGrade.push({
							value:item.id,
							text:item.name
						})
					)
          		})
			},
			bookSel(gradeId){
				let params ={
					sid:this.global.session.get('user').sid,
					size:1000,
					current:1,
					gradeId:gradeId,
				}
				books.readBookOption(params).then(res=>{

					if(res.data.code==0){
						for(let item of res.data.data)(
							this.optionBook.push({
								value:item.id,
								text:item.name
							})
						)
//						this.options[0].value=res.data.data
					}
					
				})
			},
			getList(){
				let params ={
					bookId: this.bookVal,
					size:this.size,
					current:this.page,
					gradeId:this.gradeVal,
				}
				books.tiaozhanBookList(params).then(res=>{

					if(res.data.code==0){
						this.list=res.data.data.records;
						if(this.list.length==0){
							this.nodata=true;
						}else{
							this.nodata=false;
						}
					}
					
				})
			},
			onPullingDown() {

			  },
			  onPullingUp() {

			  },
			changeGrade(val){

				this.optionBook=[
					{value:'',
					text:'全部'}
				];
				this.bookVal='';

				this.bookSel(val);
				this.getList();
			},
			changeBook(val){

				this.getList();
			},
			goInfo(id){
				this.$router.push({
					path:'/seeInfo',
					query: {
						id: id,

					}  
				})
			},
			goError(id){
				this.$router.push({
					path:'/seeError/'+id
				})
			}
		},
//		tuijianTypeOption

	}
</script>


<style scoped lang="less">
	.my-scroll{
		margin-top: 50px;
		height: calc(100% - 100px);
		.cube-scroll-content{
			height: 100%;
		}
	}
	.books{
		height: 100%;
		background: #fff;
		.my-content{
			height: 100%;
			padding-bottom: 0;
			
			.nav-top{
				position: fixed;
				z-index: 90;
				top: 50px;
				width: 100%;
				background: #F5F5F5;
				padding: 10px 15px;
				overflow: hidden;
				line-height: 32px;
				>span{
					float: left;
					font-size: 16px;
					margin-right: 10px;
				}
				>.my-select{
					border: none;
					float: left;
					width: 78%;
					border-radius: 6px;
				}
				>.my-select.grade-select{
					width: 36%;
					margin-right: 4%;
				}
				>.my-select.book-select{
					width: 60%;
				}
				>.my-select .cube-select{
					padding-top: 6px;
					padding-bottom: 6px;
				}
				>.my-select .cube-select::after{
					border: none;
				}
			}
			.ul-list{
				/*padding-bottom: 50px;*/
				li{
					position: relative;
					padding: 15px;
					border-bottom: 1px solid #F3F3F3;
					>img{
						float: left;
						width:90px;
						height: 110px;
						border-radius: 4px 10px 10px 4px;
						-webkit-box-shadow: 3px 3px 12px #d2d2d2;
						box-shadow: 3px 3px 12px #d2d2d2;
					}
					>div.li-absolut{
						left: 120px;
						>h3{
							
							font-size: 18px;
							overflow: hidden;
							margin-bottom: 10px;
							line-height: 20px;
							>i{
								margin-right: 10px;
								-webkit-line-clamp: 1;
								max-width: 70%;
								float: left;
								font-weight: bold;
							}
							>span{

								float: left;
								color: #0694FB;
								font-weight: bold;
							}
						}

						>p{
							margin-bottom: 8px;
							float: left;
							font-size: 15px;
							margin-right: 8px;
							-webkit-line-clamp: 1;
							line-height: 20px;
							>img{
								width: 17px;
								vertical-align: middle;
							}
							>span{
								font-size: 14px;
								color: #949494;
							}
						}
						>p:last-child{
							margin-right: 0;
						}
						>.btn-div{
							
							clear: both;
							overflow: hidden;
							>button{
								border: none;
								float: left;
								font-size: 14px;
								margin-right: 15px;
								height: 30px;
								line-height: 30px;
								color: #fff;
								border-radius: 4px;
								text-align: center;
								padding: 0 12px;
							}
							.see-error{
								background: #FFB001;
							}
							.see-info{
								background: #0293FE;
							}
						}
					}
					
				}
				li:after{
					content: "";
					display: block;
					clear: both;
				}
			}
		}

	
	}	
</style>