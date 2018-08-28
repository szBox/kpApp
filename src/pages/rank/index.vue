<template>
  <div class="rank">
   <header class="header">
			<p>排行榜</p>
		</header>
    <div class="my-content">
    	<div class='my-navbar'>
    		<cube-tab-bar @change='changeNav' v-model="tabdafault">
			    <cube-tab v-for="(item, index) in tabs"  :label="item.label" :key="item.label">
			    </cube-tab>
			</cube-tab-bar>
		</div>
		<div class="no-data" style="top: 55%;" v-show='nodata'>
				<img src="/static/images/msg-pm.png"/>
		</div>
		
		<ul  v-if='initshow' class="ul-list rank-my">
				<li>
						<i>{{myRank.number}}</i>
						<img class="user-img" :src="myRank.headPic" alt="" />
						<div v-if='myRank.className!=""' class="lf user-name li-absolut">
							<h4 class="ellipsis">{{myRank.name}}</h4>
							<p class="ellipsis">{{myRank.className}}</p>
							
						</div>
						<div v-else class="lf user-name li-absolut">
							<h3 class="ellipsis">{{myRank.name}}</h3>
						</div>
						<div class="lf user-score">
							<h5>闯关总值</h5>
							<p>{{myRank.score}}</p>
						</div>
						<div class="rt user-rank">
							<img src="/static/images/content-yds-icon.png"/>
							<p>{{myRank.bookCount}}</p>
						</div>
				</li>
		</ul>
		<div class="bgg" v-if='initshow'></div>
		<div class="mv-nabar-item">
			<cube-tab-panels  v-model="tabdafault">
			    <cube-tab-panel   v-for="(item, index) in tabs" :label="item.label" :key="item.label">
			      <div class="my-scroll">
			      	 <cube-scroll
								ref="scroll"
								:options="ScrollOptions">
									<ul class="ul-list">
								        <li class="tab-panel-li" v-for="(hero, index) in item.heroes">
								         		<i v-if='hero.rank>3'>{{hero.rank}}</i>
								         		<img class='rank-img' v-if='hero.rank==1' src="/static/images/content-jp-icon.png"/>
								         		<img class='rank-img' v-if='hero.rank==2' src="/static/images/content-yp-icon.png"/>
								         		<img class='rank-img' v-if='hero.rank==3' src="/static/images/content-tp-icon.png"/>
														<img class="user-img" :src="hero.headPic" alt="" />
														<div v-if='hero.className!=""' class="lf user-name li-absolut">
															<h4 class="ellipsis">{{hero.name}}</h4>
															<p class="ellipsis">{{hero.className}}</p>
															
														</div>
														<div v-else class="lf user-name li-absolut">
															<h3 class="ellipsis">{{hero.name}}</h3>
														</div>
														<div class="lf user-score">
															<h5>闯关总值</h5>
															<p>{{hero.score}}</p>
														</div>
														<div class="rt user-rank">
															<img src="/static/images/content-yds-icon.png"/>
															<p>{{hero.bookCount}}</p>
														</div>
								        </li>
								    </ul>
								</cube-scroll>
			      </div>
			     
			      
			      
			      
			      
			    </cube-tab-panel>
			</cube-tab-panels>
		</div>
			

    	
    		
				
		
				   

				
    </div>	
    
  </div>
</template>

<script>
	import rank from '@/network/rank/rank.js';
	export default {
	    data() {
	        return {
	        	page:1,
	        	size:10,
	        	nodata:false,
	        	initshow:false,
	          tabdafault: '班级',
	          myRank:[],
				    tabs: [
					    {
					        label: '班级',
					        heroes: []
					    }, 
					    {
					        label: '年级',
					        heroes:[],
					    }, 
				    ]
	        }
	    },
	    mounted(){
	    	this.getList(1);
	    },
	   	computed: {
		   	ScrollOptions() {
		      	return {
		      		pullDownRefresh: this.pullDownRefreshObj,
				    pullUpLoad: this.pullUpLoadObj,
				    scrollbar: true
		      	}
		    },
		    scrollbarObj: function() {
		      	return this.scrollbar ? { fade: this.scrollbarFade } : false
		    }
		 
		},
	    methods: {
	    		changeNav(val){
	    			if(val=='班级'){
							this.getList(1)
						}
						if(val=='年级'){
							this.getList(2)
						}
	    		},
	      	getList(type){
		      		let params ={
		      			classId: this.global.session.get('user').classId,
		      			current:this.page,
		      			size:this.size,
		      			gradeId:this.global.session.get('user').gradeId,
		      			label:type,
							}
							rank.rankList(params).then(res=>{
										if(res.data.code==0){
											if(res.data.data.pages.records.length>0){
												this.nodata=false;
												this.initshow=true;
											}else{
												this.nodata=true;
													this.initshow=false;
											}
											if(type==1){
												res.data.data.className='';
												this.myRank = res.data.data;
												for(var i=0; i<res.data.data.pages.records.length; i++){
	                      	this.$set(res.data.data.pages.records[i], 'className', '')
	                      }
												this.tabs[0].heroes=res.data.data.pages.records;
											}
											if(type==2){
												this.myRank = res.data.data;
												this.tabs[1].heroes=res.data.data.pages.records;
												
											}
										}
								
							})
	      	}
	    },
	    
	}
</script>

<style lang="less">
		.rank{
			.mv-nabar-item{
					height: calc(100% - 160px);
					.cube-tab-panels,.cube-tab-panels-group{
						height: 100%;
					}
			}
		}
</style>
<style scoped lang="less">
	
	.my-scroll{
		height: calc(100% - 1px);
		.cube-scroll-content{
			height: 100%;
		}
	}
	/*.mv-nabar-item{
		height: calc(100% - 160px);
	}*/

	.rank{
		background: #fff;
		height: 100%;
	}
	.header{
		background: url(/static/images/content-phb-bg.png);
		height:150px;
		p{color: #fff;}
		background-size: cover;
		-webkit-box-shadow: 0 0 0.266667rem transparent;
    box-shadow: 0 0 0.266667rem transparent;
	}
	.my-content{
		padding-top: 150px;
		/*height: calc(100% - 50px);*/
		height: 100%;
		padding-bottom: 0;
		.my-navbar{
			background: #007EFF;
			
			.cube-tab{
				color: #9FCDFC;
			}
			.cube-tab.cube-tab_active {
			    color: #FAFBFC;
			  
			}
		}
		
		.rank-my,.ul-list{
			overflow: hidden;
			padding: 15px;
			img.rank-img{
				float: left;
				width: 40px;
			}
			i{
				float: left;
				width: 40px;
				text-align: center;
				color: #515151;
				font-weight: 600;
				font-size:15px;
				line-height: 40px;
			}
			.user-img{
				float: left;
				width: 40px;
				height: 40px;
				vertical-align: middle;
				border-radius: 50%;
				border: 2px solid #e1f0ff;
				margin-left: 10px;
				margin-right: 15px;
			}
			.user-name{
				height: 40px;
				line-height: 20px;
				position: relative;
				>h4,>h3{
					width: 90px;
					color: #515151;
					font-size: 16px;
					left: 250px;
					-webkit-line-clamp: 1;
				}
				>h3{
					line-height: 40px;
				}
				>p{
					width: 90px;
					-webkit-line-clamp: 1;
					font-size: 14px;
					color: #939393;
				}
				
			}
			.user-score{
				margin-left: 30px;
				height: 40px;
				line-height: 20px;
				>h5{
					color: #515151;
					font-size: 14px;
				}
				>p{
					color: #ffb001;
					font-size: 16px;
					
				}
			}
			.user-rank{
				line-height: 20px;
				text-align: center;
				>img{
					vertical-align: middle;
					width: 20px;
					height: 20px;
					margin-top: -3px;
				}
				>p{
					color: #0393FF;
					font-size: 15px;
					text-align: center;
					font-weight: 600;
				}
				
			}
		}
		.ul-list{
			font-size: 16px;
			li{
				height: 40px;
			}
		}
	}
</style>
