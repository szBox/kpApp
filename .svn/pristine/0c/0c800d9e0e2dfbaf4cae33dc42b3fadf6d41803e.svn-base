<template>
	<div class="home-score">
		<header class="header">
			<div @click="back()"><img src="/static/images/nav-icon-goback.png" alt="" /></div>
			<h1>答题成绩</h1>
		</header>
		<div class="my-content">
			<div class="score-box">
				<div class="score-qiu">
					<h1>
						{{scoreObj.score}}<span>分</span>
					</h1>
				</div>
				<div class="score-time">
					<h3>用时</h3>
					<h1>{{scoreObj.answerTime}}</h1>
					<p v-if="parseInt(scoreObj.score) >= 80">恭喜你,通关啦</p>
					<p v-else>成绩未通关,继续加油哦</p>
				</div>
				<div class="score-card card1" @click="goDetail(scoreObj.errorAnswerCount)">
					<h3>{{scoreObj.errorAnswerCount == 0 ? '查看详情' : '查看错题'}}</h3>
					<p v-if="scoreObj.errorAnswerCount == 0">满分通关，你真棒！</p>
					<p v-else>做错{{scoreObj.errorAnswerCount}}题,未做{{scoreObj.notAnswerCount}}题</p>
				</div>
				<!-- <div class="score-card card2" @click="reAnswer">
					<h3>重新闯关</h3>
					<p>再接 再厉 再战</p>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			scoreObj: {}
		}
	},
	methods: {
		goDetail(num) {
			console.log(num)
			if(num == 0) {
				this.$router.push({path: `/seeInfo`, query: {id: this.scoreObj.id}});
			}else{
				this.$router.push(`/seeError/${this.scoreObj.id}`);
			}
		},
		back() {
			this.$router.push('/home')
		},
		init() {
			this.scoreObj = this.$route.query;
		},
		reAnswer() {
			let params = {
				bookId: this.scoreObj.bookId,
				gradeId: this.scoreObj.gradeId,
				studentId: this.scoreObj.studentId
			}
			this.$router.push({ path: '/beginChallenge', query : params});
		}
	},
	created() {
		this.init();
	}
}
</script>

<style scoped lang="less">
	
	.home-score {
		height: 100%;
		&::before{
			content: ' ';
			position: fixed;
			z-index: -1;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: url(/static/images/bgg1.jpg);
			background-size: cover;
		}
		.header{
			background: transparent;
			h1{
				color: #996809;
			}
		}
		.my-content{
			
			padding-top: 0;
			margin-top: 50px;
			padding-bottom: 0;
			height: calc(100% - 20px);
			overflow: auto;
			
			.score-box{
				/*margin: 0 auto;*/
				background: rgba(255,255,255,0.3);
				margin: 15px;
				padding: 25px 0 50px;
				border: 2px solid #E7C78F;
				border-radius: 10px;
				.score-qiu{
					width: 120px;
					height: 120px;
					padding-top: 45px;
					background: url(/static/images/dati-qiu.png);
					background-size: cover;
					margin: 0 auto;
					text-align: center;
					>h1{
						font-weight: bold;
						font-size: 48px;
						color: #0393ff;
						>span{
							font-weight: bold;
							font-size: 15px;
						}
					}
				}
				.score-time{
					margin: 15px auto 20px;
					text-align: center;
					>h3{
						font-size: 15px;
						color: #BA7C01;
						/*font-weight: bold;*/
					}
					>h1{
						font-size: 18px;
						color: #40aeff;
						font-weight: bold;
						margin: 5px 0 8px;
					}
					>p{
						font-size: 13px;
						color: #b9ab90;
					}
				}
				.score-card{
					margin: 0 auto;
					width:200px;
					height: 60px;
					margin-top: 10px;
					padding: 10px 0 0 70px;
					>h3{
						color: #fff;
						font-size: 16px;
						margin: 5px 0;
					}
					>p{
						color: #fff;
						font-size: 13px;
					}
				}
				.score-card.card1{
					background: url(/static/images/content-ckct-bg-icon.png);
					background-size: 100% 100%;
				}
				.score-card.card2{
					background: url(/static/images/content-cxcg-bg-icon.png);
					background-size: 100% 100%;
				}
				
			}
		}
		/*background: url(/static/images/bgg1.jpg);
		background-size: cover;*/
		
		
	}
	
	
	
	
	
	
</style>