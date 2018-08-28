<template>
	<div class="my-alert-box">
		<div class="my-alert">
			<img :src="objects.imgType" alt="" />
			<h1>{{objects.title}}</h1>
			<p>{{objects.content}}</p>
			<slot name='clearance'><!--恭喜你,闯关成功--></slot>
			
			<slot name='back'><!--确认交卷? 还有题目没做完--></slot>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:{
			objects:{
				type: Object,
				default () {return {}}
			},
		},
		mounted() {
			if(this.objects.imgType=='Y'){
				this.objects.imgType = 'http://hyjy.oss-cn-shenzhen.aliyuncs.com/1/image/jpeg/0/1/2018-7-12/1531377871497'
			}else if(this.objects.imgType=='N'){
				this.objects.imgType = 'http://hyjy.oss-cn-shenzhen.aliyuncs.com/1/image/png/0/1/2018-7-12/1531362455652'
			}
			setTimeout(()=>{
				console.log('prpo',this.objects)
			},1000)
			
		}
	}
</script>

<style scoped lang="less">
	.my-alert-box{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,.5);
		z-index: 999999;
	}
	.my-alert{
		width: 200px;
		background: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%,-50%);
		-moz-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-o-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
		>img{
			height:60px;
			
		}
		>h1{
			color: #0270EC;
			text-align: center;
			font-size: 14px;
		}
		>div{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			span{
				width: 50%;
				text-align: center;
			}
		}
	}
</style>