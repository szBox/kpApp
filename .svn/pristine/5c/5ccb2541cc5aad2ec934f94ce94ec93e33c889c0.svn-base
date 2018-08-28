<template>
	<div class="user-setting">
		<header class="header">
			<div @click="back()"><img src="/static/images/nav-forget-icon-goback.png" alt="" /></div>
			<h1>设置</h1>
		</header>
		<div class="my-content">

			<div @click="goMima()" class="set-div">
				<span>修改密码</span>
				<img class='icon-right' src="/static/images/content-jt-icon-right.png"/>
			</div>

			
			
			<div @click="Esc()" class="btn-Esc">退出登录</div>
		</div>
		

	</div>
</template>

<script>
	export default{
		data() {
			return {
				
			
      			
			}
		},
		
		computed:{
			
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			goMima(){
				this.$router.push({
			      	path:'/userMima'
		     	})
			},
			Esc(){
				var self = this;
				this.$createDialog({
			        type: 'confirm',
			        icon: 'cubeic-alert',
			        title: '是否确认退出登录',
	//		        content: '',
			        confirmBtn: {
			          text: '确定',
			          active: true,
			          disabled: false,
			          href: 'javascript:;'
			        },
			        cancelBtn: {
			          text: '点错了',
			          active: false,
			          disabled: false,
			          href: 'javascript:;'
			        },
			        onConfirm: () => {
			          self.$router.push({
			          	path:'/'
			          })
			        },
			        onCancel: () => {
			       
			        }
		      	}).show()
			}
			
			
			
			
		}

	}
</script>

<style scoped lang="less">
	.user-setting {
		background: #F5F5F5;
		.set-div{
			overflow: hidden;
			position: relative;
			padding: 18px 15px;
			background:#fff;
			margin:8px 0;
			>span{
				float: left;
				font-size: 14px;
			}
			>img{
				right: 10px;
			}
		}
		.btn-Esc{
			background:#fff;
			text-align: center;
			color: #515151;
			font-size: 16px;
			line-height: 50px;

		}
	}
	
	
	
	
	
	
</style>