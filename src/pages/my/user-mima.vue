<template>
	<div class="user-mima">
		<header class="header">
			<div @click="back()"><img src="/static/images/nav-forget-icon-goback.png" alt="" /></div>
			<h1>修改密码</h1>
		</header>
		<div class="my-content">
			<ul class="ul-mima">
				<li>
					<span>当前密码</span>
					<input type="password" maxlength="16" v-model.trim="init"  placeholder="请输入当前密码"/>
				</li>
				<li>
					<span>新的密码</span>
					<input type="password" maxlength="16" v-model.trim="new1" placeholder="请输入您要设置的密码"/>
				</li>
				<li>
					<span>确认密码</span>
					<input type="password" maxlength="16" v-model.trim='new2' placeholder="请再次输入密码"/>
				</li>
			</ul>
			

			
			
			<div @click="dis && Changemima()" class="btn-tijiao">提交</div>
			<div class="bb-tips">
				<p style="margin-bottom: 5px;">如果您忘记当前密码</p>
				建议通过提交<span style="color:#0293FE ;">找回密码</span>来修改密码
			</div>
		</div>
		

	</div>
</template>

<script>
	import login from '@/network/login/login.js'
	export default{
		
		data() {
			return {
				init:'',
				new1:'',
				new2:'',
				dis:true
      			
			}
		},
		
		computed:{
			
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			Changemima (){
				var self =this;
				var minY=/^[1][3,4,5,7,8][0-9]{9}$/; 
				var myPassword = JSON.parse(localStorage.getItem('userLogin')).password;
				let params = {
					  	newPassword: this.new1,
  						password: this.init
				}
				if(this.new1==''||this.init==''||this.new2==''){
					
				}else if(this.init!=myPassword){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '当前密码输入有误',
				        type:'warn'
			   		})
			    	toast.show()
				}else if(this.new1!=this.new2){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '两次输入密码不一样',
				        type:'warn'
			   		})
			    	toast.show()
				}
				else if(this.new1.length<6 || this.new2.length<6){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '密码长度最少6位',
				        type:'warn'
			   		})
			    	toast.show()
				}
				else{
					login.xiugaimima(params).then(res=>{
						if(res.data.code==0){
							this.dis=false;
							const toast = this.$createToast({
						        time: 800,
						        txt: '修改成功',
						        type:'correct'
					   		})
					    	toast.show()
							setTimeout(function(){
								self.$router.go(-1);
							},800)
						}
					
					})
				}
				
			},
			
			
			
			
		}

	}
</script>

<style scoped lang="less">
	.user-mima {
		background: #fff;
		.ul-mima{
			li{
				overflow: hidden;
				border-bottom: 1px solid #EFEFEF;
				padding:8px 15px;
				line-height: 40px;
				span{
					float: left;
					font-size: 14px;;
					margin-right: 10px;
				}
				input{
					float: left;
					width: 78%;
					height: 40px;
					font-size: 14px;;
					line-height: 40px;
					color: #555;
				}
			}
		}
		.btn-tijiao{
			margin: 80px auto 25px;
		}
		.bb-tips{
			text-align: center;
			font-size: 14px;
			color: #9E9E9E;
			
		}
	}
	
	
	
	
	
	
</style>