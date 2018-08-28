<template>
	<div class="user-shoucang-info timu-bg">
		<header class="header">
			<div @click="back()"><img src="/static/images/nav-icon-goback.png" alt="" /></div>
			<h1>答题详情</h1>
		</header>
		<div class="my-content">
			<cube-scroll ref="scroll">
				<ul class="paper-box">
					<li v-for="(item,index) in list">
						<h5 class="paper-title">
							{{(index+1 < 10 ? '0' + (index+1) : index+1)}}.
							<span style="color: #58B5F9;">
								({{item.answerContent.split(',').length>1?'多选题':'单选题'}})
							</span>
							
							{{item.qname}}	
							<span style="color: #FF7D67;">
								({{item.singleSore}}分)
							</span>
						</h5>
						<div class="paper-cover" v-if="item.qimageUrl">
							<img :src="(item.qimageUrl.indexOf('?uploadId')?item.qimageUrl.split('?uploadId')[0]:item.qimageUrl)" alt="" />
						</div>
						<ul class="ul-abcd">
							<li v-for='(option,index) in item.chioces' :class="{
									'optionActiveY':item.isright=='Y'&&item.answerContent.indexOf(option.id) != -1,
									'optionActiveN':item.isright=='N'&&item.answerContent.indexOf(option.id) != -1}">
								<span class='option-A'>
									{{index+1 | optionFilter}} :
								</span>
								{{option.value}}
							</li>
							
							
						</ul>
						
						<div class="answer-hh">
							你的答案是 : 
							<span :class="{'answerY':item.isright=='Y'}">{{item.answerContent | answerFn(item.chioces)}}</span>
							<span :class="{'answerY':item.isright=='Y'}">{{(item.isright=='Y'?'回答正确':'回答错误')}}</span>
							<p @click="soucang(item.aid,item.collectionId)">
								<i>
									收藏
								</i>
								<img :src="(item.collectionId==null?'/static/images/content-btn-default-sc.png':'/static/images/content-btn-selected-sc.png')" alt="" />
							</p>
							
							
						</div>
					</li>
				</ul>
		  	</cube-scroll>
		  	
		</div>
		<div class="self-mask" :class="{active: isShow}" @click="isShow = false"></div>
		<div id='Sheet' class="err-foot" :class="{active: isShow}">
		  	<p>
		  		<span>成绩:</span><span style="color: #58B5F9;">75分</span>
		  	</p>
		  	<p>
		  		<span>共100道题,答错<i style="color: #FF7D67;">25</i>道</span>
		  		<img  @click="showActive" src="/static/images/tab-icon-ct.png"/>
		  	</p>
		  	<div class="sheet-scroll">
		  		<cube-scroll ref="scroll2">
				  	<ul class="sheet-ul" v-if='isSheet'>
				  		<li v-for="(sheet,index) in sheetList" 
				  			:class="{sheetY:sheet.isright=='Y'}" 
				  			@click="scollTo(index)"
				  			:key='index'>
				  			{{index+1}}
				  		</li>
				  	</ul>
		  		</cube-scroll>
		  	</div>
		  	
		</div>
	</div>
</template>

<script>
	
	import record from '@/network/record/record.js'
	export default({
		data() {
			return {
				page:1,
				pages:'',
				size:1000,
				bookId:'',
				list:[],
				sheetList:[],
				isShow: false,
			
			}
		},
		
		mounted() {
			
			this.getList();
		},
		filters:{
			optionFilter(val){
				if(val==1){
					return 'A'
				}
				if(val==2){
					return 'B'
				}
				if(val==3){
					return 'C'
				}
				if(val==4){
					return 'D'
				}
				if(val==5){
					return 'E'
				}
			},
			answerFn(val,ids){
				var abcd=''
				var abcdArr =['A','B','C','D','E'];
				var answerData = val.split(',');
				for(var i=0; i<ids.length; i++){
					for(var j=0; j<answerData.length; j++){
						if(ids[i].id==answerData[j]){
							abcd += abcdArr[ids.indexOf(ids[i])]
						}
					}
				}
				return abcd
			},	
		
			
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			soucang(id,type){
				let params = {
					answerId:id
				}
				if(type==''||type==null){
					record.collectionAdd(params).then(res=>{
						console.log('收藏题目详情',res);
						if(res.data.code==0){
							this.getList();
						}
					
					})
				}else{
					record.collectionDel(type).then(res=>{
						console.log('收藏题目详情',res);
						if(res.data.code==0){
							this.getList();
						}
					})
				}
				
			},
			getList (){
				 let params ={
					challengeId: this.$route.params.id,
//					challengeId:22,
					current: this.page,
					size: this.size,
					isright: ''

				}
				record.infoList(params).then(res=>{
					console.log('收藏题目详情',res);
					if(res.data.code==0){
						this.pages=res.data.data.pages;
						this.list=res.data.data.records;
						this.sheetList= res.data.data.records;
					}
					
				})
			},
			scollTo(index){
				console.log(index)
				let dom = document.querySelector('.paper-box').children[index];
				this.$refs.scroll.scrollTo(0, -dom.offsetTop+10, 400, 'ease')
				
			},
			
			showActive() {
				this.isShow = !this.isShow;
		    }
		}

	})
</script>

<style scoped lang="less">
	.user-shoucang-info {
		height: 100%;
		.header{
			background: transparent;
			h1{
				color: #996809;
			}
		}
		.my-content{
			height:calc(100% - 100px);
			padding-top: 0;
			margin-top: 50px;
			padding-bottom: 0;
			overflow: auto;
		}
		background: url(/static/images/bgg1.jpg);
		background-size: cover;
		
		.self-mask{
			&.active{
				z-index: 500;
				opacity: .4;
			}
			transition: opacity 1s;
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -100;
			background: black;
			opacity: 0;
		}
		ul.paper-box{
			padding:10px 15px;
			>li{
				padding: 15px 25px;
				margin-bottom: 15px;
				border: 2px solid #E7C78F;
				border-radius: 10px;
			}
		
			.paper-title{
				/*padding: 0 15px;*/
				margin: 5px 0 15px;
				color: #BA7c01;
				font-size: 16px;
			}
			ul.ul-abcd{
				/*padding: 0 15px;*/
				
				overflow: hidden;
				li{
					/*background: #fff;*/
					margin: 8px 0;
					margin-bottom: 20px;
					padding:5px 15px;
					/*border-radius: 6px;*/
					/*border: 1px solid #FEA504;*/
					background: url(/static/images/content-choice-box-wxz.png) no-repeat;
					background-size: 100% 100%;
					color: #FEA504;
					font-size: 16px;
				}
				
				/*li:nth-child(3n){
					clear: left;
				}*/
			}
			div.answer-hh{
				color: #7C644A;
				font-size: 16px;
				line-height: 20px;
				>p{
					float: right;
					>img{
						float: right;
						width: 20px;
						vertical-align: middle;
						margin-top: -2px;
						margin-right: 5px;
					}
					>i{
					float: right;
					}
				}
				
				>span{
					color: #FF7D67;
				}
				>span.answerY{
					color: #58B5F9;
				}
				
			}
			.ul-abcd li.optionActiveN{
				color: #fff;
				background: url(/static/images/content-choice-box-cwda.png) no-repeat;
				background-size: 100% 100%;
			}
			.ul-abcd li.optionActiveY{
				color: #fff;
				background: url(/static/images/content-choice-box-zqda.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.option-A{
			display: inline-block;
			width: 25px;
			height: 25px;
			line-height: 25px;
			text-align: center;
		}
		
		.cover-bg{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: rgba(0,0,0,.5);
			z-index: 9999;
		}
		.err-foot{
			&.active{
				height: 300px;
				z-index: 600;
				
			}
			position: fixed;
			bottom: 0;
			padding: 0 15px;
			z-index: 99;
			width: 100%;
			/*height: 240px;*/
			background: #fff;
			/*height: 48px;*/
			/*height: 48px;*/
			
			line-height: 44px;
			>p:nth-child(1){
				color: #A17423;
				float: left;
				>span{
					font-size: 15px;
				}
			}
			>p:nth-child(2){
				float: right;
				>span{
					color: #A17423;
					font-size: 13px;
				}
				>img{
					width: 28px;
					vertical-align: middle;
				}
				>img:active .sheet-ul{
					height: 300px;
					
				}
			}
			.sheet-scroll{
				margin-top: 44px;
				height: calc(100% - 44px);
				>.cube-scroll-wrapper{
					width: 100%;
				}
			}
			.sheet-ul{
				height: 100%;
				border-top: 1px solid #F3F3F4;
				clear: both;
				transition: height 2s;
				/*height: 0;*/
				overflow: hidden;
				padding: 10px 0;
				li{
					font-size: 13px;
					float: left;
					width: 32px;
					color: #fff;
					border-radius: 50%;
					background: url(/static/images/pop-btn-selected-ctan.png);
					background-size: cover;
					line-height: 32px;
					text-align: center;
					margin-right: 30px;
					margin-bottom: 12px;
				}
				li.sheetY{
					background: url(/static/images/pop-btn-selected-yman.png);
					background-size: cover;
				}
				li:nth-child(6n){
					margin-right: 0;
				}
			}
			.sheet-ul:after{
				content: '';
				display: block;
				clear: both;
			}
		}
	}
	
	
	
	
	
	
</style>