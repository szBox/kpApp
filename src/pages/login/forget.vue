<template>
  <!--<transition name="slideIn">-->
  <div class="forget">
    
    <header class="header">
		<div @click="back()"><img src="/static/images/nav-forget-icon-goback.png" alt="" /></div>
	</header>
	<div class="form-login">
       <div class="form-div">
       		<h4 class="form-title">手机号</h4>
          <input type="text"  v-model="phone" placeholder="请输入手机号"  maxlength="11"/>
      </div>
      <div class="form-div yzm-div">
        	<h4 class="form-title">验证码</h4>
          	<input :readonly="isReadonly" type="text"  v-model="yzm"   placeholder="请输入验证码" />
          	<button :disabled="isDisabled" @click="getYzm()">{{yzmtext}}</button>
      </div>
      
      <div class="btn-login" @click="btnType && next()">下一步</div>
      <div class="firm-tips">
      	<p>© 2015华亿教育(深圳)科技有限公司</p>
      	<p>客服电话: 4006-810-820</p>
      </div>
    </div>
    
		
  </div>
</template>

<script>

	import login from '@/network/login/login.js'

	export default {
		data() {
			return {
				phone:'',
				yzm:'',
				btnType:true,
				isReadonly:true,
				yzmtext:'发送验证码',
				timer:null,
				isDisabled:false,
			}
		},
		mounted() {
			
  		},
		
		methods: {
			back() {
				this.$router.go(-1);
			},
			getYzm(){
				var numY=/^[1][3,4,5,7,8][0-9]{9}$/; 
				if(!this.phone){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '请输入手机号',
				        type:'warn'
			   		})
			   		toast.show()
				}else if(!numY.test(this.phone)){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '手机号格式不正确',
				        type:'warn'
			   		})
					toast.show()
				}else{
					this.isDisabled=true;
					this.isReadonly=false;
					var times = 3;
					this.yzmtext=times;
					this.timer = setInterval(()=>{
						this.yzmtext--;
						if(this.yzmtext==0){
							this.yzmtext='重新发送';
							this.isDisabled=false;
							clearInterval(this.timer)
						}
					},1000)
				}
			},
			next(){
				
				if(!this.phone){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '请输入手机号',
				        type:'warn'
			    	})
			    	toast.show()
				}else if(!this.yzm){
					const toast = this.$createToast({
				        time: 1000,
				        txt: '请输入验证码',
				        type:'warn'
			    	})
			    	toast.show()
				}
				else{
					let params={
						userName:this.phone,
						password:this.yzm
					}
					login.login(params).then(res => {
//						console.log(res)
						if(res.data.code === 1005 || res.data.code === 1006){
							const toast = this.$createToast({
			        time: 1000,
					        txt: '账号或密码错误',
					        type:'warn'
			    		})
			    		toast.show()
						}
						if(res.data.code === 0) {
//							console.log(params)
							this.global.session.set('authentication', res.data.data.token);
							this.global.session.set('user', res.data.data);
							this.global.session.set('login', true);
              instance.instance.defaults.headers['Authentication'] = res.data.data.token;
							localStorage.setItem('userLogin',JSON.stringify(params))  // 存储用户信息
							this.$router.replce({
								path:'/home'
							})
	          }
                    
          })
				}
				
			},
			
			goForget(){
				this.$router.push({
					path:'/forget'
				})
			}
		},
		
	}



</script>

<style>
	
</style>
<style scoped lang="less">
	input{
		padding-left: 0;
	}
  .login-box{
    width: 100%;
    height: 100%;
    
    background: #fff;
  }
  .login-img{
  	padding:20px 30px 0;
    height:70px;
    overflow: hidden;
    >img{
    	float: left;
    	height: 100%;
    	vertical-align: middle;
    }
    >p{
    	float: left;
    	line-height: 50px;
    	font-size:20px;
    }
  }
  .form-login{
  	
  	padding:70px 40px 0;
  	.form-div{
  		margin-top:30px;
	    border-bottom: 1px solid #d0d0d0;
	    .form-title{
	    	font-size:24px;
	    	color: #515151;
	    	font-weight: bold;
	    	margin-bottom: 15px;
	    }
	    input{
		    width: 100%;
		    height:40px;
		    font-size:15px;
		    outline: none;
		    background: none;
		    color: #333;
		}
	  }
	  .form-div.yzm-div{
	  	position: relative;
	  	
	  	button{
	  		width: 80px;
	  		font-size: 15px;
	  		position: absolute;
	  		right: 0;
			bottom: 12px;
			color: #FFB514;
			border: none;
			background: transparent;
	  	}
	  	button:active{
	  		background: none !important;
	  	}
	  }
  }
  .btn-login{
    background: #5bb9ff;
    color: #fff;
    height:40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    border-radius: 3px;
    margin-top: 40px;
  }

  
	.firm-tips{
		margin-top: 138px;
		margin-bottom: 30px;
		text-align: center;
		font-size: 13px;
		color: #d0d0d0;
	}
 
 

</style>
