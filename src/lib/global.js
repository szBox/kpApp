
import OSS from 'ali-oss';
const global = {
    session: {
        set(key, val) {
            sessionStorage.setItem(key, JSON.stringify(val));
        },
        get(key) {
            return JSON.parse(sessionStorage.getItem(key)) || {};
        },
        clear() {
            sessionStorage.clear();
        },
        remove(key) {
        	 sessionStorage.removeItem(key);
        }
    },
   	//日期
   	dateFilter: {
   		ymd(val) {
   			if (val != null) {
		      	let date = new Date(val),
		        years = date.getFullYear() ,
		        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
		        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate()
		      	return years + '-' + month + '-' + day
	    	}
	    	return "";
  		},
   		ymdHm(val) {
   			if (val != null) {
		      	let date = new Date(val),
		        years = date.getFullYear() ,
		        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
		        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate(),
		        hours = date.getHours()<10? ('0'+date.getHours()) : date.getHours(),
		        minutes = date.getMinutes()<10? ('0'+date.getMinutes()) :date.getMinutes()
		      	return years + '-' + month + '-' + day + ' ' + hours + ':' +minutes 
		    }
		    return "";
   		}
   	},
    menu: {
        get(menu) {
            return global.session.get('user').menus || [];
        }
    },
    //验证提示
    formValidate (target, fun) {
        this.$refs[target].$refs['form'].validate((valid) => {
            if (valid) {
                fun();
            } else {
                return false;
            }
        });
    },
     //删除提示
 	deleteConfirm  (fun, parmas) {
        this.$confirm('确定删除吗？' , '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          fun(parmas);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
	//获取当前时间，格式yyyy-MM-dd
	getNowDate () {
		let today = new Date();
		return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
	},
	alyConfig : {
      region: 'oss-cn-shenzhen',
      accessKeyId: 'LTAIw559xuafx83T',
      accessKeySecret: 'aaEY1Yog2AWmywgLdPMgU7BAXPvWbt',
      bucket: 'hyjy',
      newClient(){
        return new OSS.Wrapper({
          region: this.region,
          accessKeyId: this.accessKeyId,
          accessKeySecret: this.accessKeySecret,
          bucket: this.bucket
        });
      },
      uploadToAliyun(f,cb){
          let file = f , key = 'xiliyuyue/'+new Date().getTime()


          let client = this.newClient()

          return client.multipartUpload(key, file, {
            progress: function(p){
              return function (done) {
//              console.log('progress:',p)
                done();
              }

            }
          }).then(function (res) {
//          console.log('upload success: %j', res);
            let fileUrl = res.res.requestUrls[0].split('?')[0]
            cb ? cb(fileUrl) : ''
//          return listFiles(client);
          });
        }
    },
    timerCountDown(end) {
        const now = new Date();
        const endDate = new Date(end);
        const leftTime = endDate.getTime() - now.getTime();
        const leftsecond = parseInt(leftTime / 1000);
        const day = Math.floor(leftsecond / (60 * 60 * 24));
        const hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
        const minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
        const second = Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
        let str = `${(day * 24 + hour) < 10 ? '0' + (day * 24 + hour) : (day * 24 + hour)}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
        let bool = (day * 24 + hour) == 0 && minute == 0 && second == 0 ? true : false;
        return [str, bool];
    },
    getIdStringByArr(arr) {
        if(!arr || arr.length == 0) return '';
        let newArr = [];
        for(let item of arr) {
            if(item.id) {
                newArr.push(item.id);
            }else{
                return arr.join(',');
            }
        };
        return newArr.join(',');
    }
}




export default global;