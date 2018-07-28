<template>
 <div>
     <div class="header">
         <span class="iconfont icon-shangyiyehoutuifanhui" @click='mine'></span>
        <img src="../assets/3.jpg" alt="">
     </div>
          <div class="center">
           
            <mt-field label="手机号" placeholder="请输入手机号" type="tell" v-model="username"  style="font-size: 12px"></mt-field>
            <mt-field label="密码" placeholder="请输入6-16位数字和字母组合" type="password" v-model="password" style="font-size: 12px"></mt-field>
            <div class="fa">
                <mt-field label="验证码" placeholder="请输入验证码" type="text" v-model="yzm" style="font-size: 12px"></mt-field>
                <mt-button type="default" size="small" style="font-size: 12px;height: 30px;width: 140px" id="fasong">发送验证码</mt-button>
            </div>
            <mt-field label="邀请码" placeholder="输入好友手机号或邀请码（选填）" type="text" v-model="yqm" class="bor_b" style="font-size: 12px"></mt-field>
            <div class="xx">
                    <input type="checkbox" name="b" class="chek">
                    <p>
                        已阅读并同意
                       <span>《票据宝平台使用协议》</span>
                       <span>《隐私保护协议》</span>
                       <span>《风险告知书》</span>
                    </p>
                </div>
            <mt-button type="danger" size='large' class="log" id="zhuce">注册即获多重好礼</mt-button>
           </div>
           <div class="tet">
               <p>
                   已有账户？直接
                   <span @click='login'>登录</span>
               </p>
           </div>
           <div class="main1"></div>
            <div class="footer">
                <p>
                    客服电话：400-188-9138
                </p>
            </div>
            <div id="box2" :style='[b]'>
                    {{msg}}
            </div>
     </div>
</template>
<script>
    import $ from "jquery"
 export default {
     name:"Register",
     data(){
         return{
             username:"",
             password:"",
             yzm:"",
             yqm:"",
             b:{},
             msg:""
         }
     },
     methods:{
         mine(){
             this.$router.push("/product");
         },
         login(){
            this.$router.push("/login");

         }
     },
     mounted() {
         var _this=this;
        $(function(){
	   $("#fasong").click(function(){
	   $.post("http://127.0.0.1:3000/user/register",{id:1,phoneNum:_this.username,password:_this.password},function(data){
	   //console.log(data);
    //    alert("验证码发送成功，请查看")
    if(data==1){
            _this.msg='验证码发送成功，请查看'
            _this.b={display:'block'};
            var _1this=_this;
            function f(){
                _1this.b={display:'none'};
               
            }
            setTimeout(f,1000)
        }else{
            _this.msg='请输入正确的手机号'
            _this.b={display:'block'};
            var _1this=_this;
            function f(){
                _1this.b={display:'none'};
               
            }
            setTimeout(f,1000)

        }
	   })
	    
	}) ;
	
	$("#zhuce").click(function(){
	   $.post("http://127.0.0.1:3000/user/register",{phoneNum:_this.username,password:_this.password,yzm:_this.yzm,id:0},function(data){
	   console.log(data);
	   if(data==1){
            // alert("注册成功");
             _this.msg='注册成功，请稍等！'
            _this.b={display:'block'};
            var _1this=_this;
            function f(){
                _1this.b={display:'none'};
             _1this.$router.push("/login");
               
            }
            setTimeout(f,1000)
	   
	       }else{
	       
        //    alert("用户已存在或输入有误");
            _this.msg='用户已存在或输入有误,请重试'
            _this.b={display:'block'};
            var _1this=_this;
            function f(){
                _1this.b={display:'none'};
               
            }
            setTimeout(f,1000)
	       
	       }
	  
	   })
	
	}) ;
	
	   
  })
     },
 }
</script>
<style scoped>
    .iconfont{
        position: absolute;
        font-size: 20px;
        color: #fff;
        margin-top: 10px;
    }
 .header{
     height: 40px;
     background: #e94c4e;
     overflow: hidden;
 }
 .header img{
     width: 80px;
     display: block;
     margin: 8px auto;
 }
 .center{
     margin: 0 20px;
 }

 .bor_b{
     border-bottom:1px solid #ddd; 
 }
 .log{
     margin:20px 0;
 }
 .main1{
     height: 200px;
 }
 .xx{
     font-size: 12px;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top: 10px;
 }
 .xx p{
     width: 80%;
 }
 .chek{
     margin-top: -15px;
     margin-right: 10px;
 }
 .xx span{
     color: #e94c4e;
 }
 .tet p{
     text-align: center;
     font-size: 12px;
 }
 .tet p span{
     color: #e94c4e;
 }
 .main1{
     height: 200px;
 }
 .footer{
     font-size: 12px;
     text-align: center;
     color: #8c8383;
 }
 .fa{
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 #box2{
            width: 200px;
            height: 50px;
            border-radius: 10px;
            background:orange;
            color: aliceblue;
            text-align: center;
            line-height: 50px;
            position: absolute;
            left: 50%;
            top: 70%;
            margin:-25px 0 0 -100px;
           display: none;
           font-size: 12px;
        }
</style>