<template>
	<div class="books" >
		
		<header class="header">
			<p>
				好书推荐
			</p>
			<h1></h1>
			
		</header>
		<div class="my-content">
			<div class="nav-top">
 				<span>推荐类别</span>
 				<p class="my-select">
					<cube-select
					  v-model="optionsVal"
					  :options="options"
					  @change='change'>
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
								<h3 class="ellipsis">{{item.name}}</h3>
								<p class="ellipsis" >
									<img src="/static/images/content-msg-zzj-icon.png"/>
									<span>{{item.author}}</span>
								</p>
								<p class="ellipsis">
									<img src="/static/images/content-cbs-icon-msg.png"/>
									<span>{{item.press}}</span>
								</p>
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
				<img src="/static/images/booksnNo.png"/>
			</div>
			
		</div>

		

		


	</div>
</template>

<script>
	
	import books from '@/network/books/books.js';

	export default {
		data() {
			return {
				options:[
					{value:'',
					text:'全部'}
				],
				optionsVal:'',
				scrollbar: true,
	            scrollbarFade: true,
	            startY: 0,
				
				page:1,
				size:10,
				list:[],
				nodata:false,
			}	
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
			this.typeSel();
			this.getList();
  		},
  		
		methods:{
			typeSel(){
				let params ={
					sid:this.global.session.get('user').sid,
					size:10,
					current:1,
				}
				books.tuijianTypeOption(params).then(res=>{
					if(res.data.code==0){
						for(let item of res.data.data.records)(
							this.options.push({
								value:item.id,
								text:item.name
							})
						)
					}
					
				})
			},
			getList(typeId){
				let params ={
					sid:this.global.session.get('user').sid,
					size:this.size,
					current:this.page,
					gradeId:this.global.session.get('user').gradeId,
					typeId: typeId
				}
				books.tuijianBookList(params).then(res=>{
					if(res.data.code==0){
						this.list=res.data.data.records
						if(this.list.length==0){
							this.nodata=true;
						}else{
							this.nodata=false;
						}
					}
					
				})
			},
			onPullingDown() {
			    // 模拟更新数据
//			    setTimeout(() => {
//			      if (Math.random() > 0.5) {
//			        // 如果有新数据
//			        this.items.unshift(_foods[1])
//			      } else {
//			        // 如果没有新数据
//			        this.$refs.scroll.forceUpdate()
//			      }
//			    }, 1000)

			  },
			  onPullingUp() {
			    // 模拟更新数据
//			    setTimeout(() => {
//			      if (Math.random() > 0.5) {
//			        // 如果有新数据
//			        let newPage = _foods.slice(0, 5)
//			        this.items = this.items.concat(newPage)
//			      } else {
//			        // 如果没有新数据
//			        this.$refs.scroll.forceUpdate()
//			      }
//			    }, 1000)

			  },
			change(val){
				this.getList(val);
			},
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
						left: 130px;
						>h3{
							-webkit-line-clamp: 1;
							font-size: 18px;
							font-weight: bold;
							margin-bottom: 15px;
							line-height: 20px;
						}
						>p{
							float: left;
							font-size: 15px;
							margin-right: 20px;
							-webkit-line-clamp: 1;
							line-height: 20px;
							>img{
								width: 17px;
								vertical-align: middle;
							}
							>span{
								font-size: 15px;
								color: #949494;
							}
						}
						>p:last-child{
							margin-right: 0;
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