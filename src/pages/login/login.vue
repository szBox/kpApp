<template>
  <!--<transition name="slideIn">-->
  <div class="login-box">
    
    <div class="login-img">
      <img src="../../assets/images/login-logo.png"/>
      <p>
      	<span>鲲鹏</span><span style="color: #0393FF;">读写</span>	
      </p>
    </div>
		<div class="form-login">
      <div class="form-div">
        <!--<img src="../../assets/img/icon4_1.png"/>-->
       		<h4 class="form-title">手机号</h4>
          <input type="text"  v-model="phone" placeholder="请输入您的账号"  maxlength="11"/>
      </div>
      <div class="form-div">
        <!--<img src="../../assets/img/icon_pwd.png"/>-->
        	<h4 class="form-title">密码</h4>
          <input type="password"  v-model="password"   placeholder="请输入您的密码" />
      </div>
      
      <div class="btn-login" @click="btnType && login()">登录</div>
      <div class="forget" @click="goForget">忘记密码?</div>
      
      <div class="firm-tips">
      	<p>© 2015华亿教育(深圳)科技有限公司</p>
      	<p>客服电话: 4006-810-820</p>
      </div>
    </div>
    
		
  </div>
  <!--</transition>-->
</template>

<script>

	import login from '@/network/login/login.js'
	import instance from '@/network/index.js';
	export default {
		data() {
			return {
				phone:'',
				password:'',
				btnType:true
			}
		},
		mounted() {
			
  	},
		created() {
			var userInit = JSON.parse(localStorage.getItem('userLogin'))
			if(userInit){
				this.phone = userInit.userName;
				this.password = userInit.password;
			}
		},
		methods: {
			login(){
				
				if(!this.phone||!this.password){
					const toast = this.$createToast({
			        time: 1000,
			        txt: '请输入手机号和密码',
			        type:'warn'
			    })
			    toast.show()
				}else{
					let params={
						userName:this.phone,
						password:this.password
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
							this.$router.replace({
								path:'/home',
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
  	padding:0 40px;
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

  .forget{
  	text-align: center;
  	color: #0393ff;
  	font-size:14px;
  	height: 20px;
  	margin-top: 18px;
  }
	.firm-tips{
		margin-top: 100px;
		margin-bottom: 30px;
		text-align: center;
		font-size: 13px;
		color: #d0d0d0;
	}
 
 

</style>
