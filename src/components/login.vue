<template>
 <div>
     <div class="header">
            <span class="iconfont icon-shangyiyehoutuifanhui" @click='mine'></span>
        <img src="../assets/3.jpg" alt="">
     </div>
     <div class="center">
           
            <mt-field label="用户名" placeholder="手机号/邮箱/用户名" type="email" v-model="username" style="font-size: 12px"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" style="font-size: 12px" class="bor_b"></mt-field>
            <div class="mim"><span>忘记密码？</span></div>
                

            <mt-button type="danger" size='large' class="log" @click="login">登录</mt-button>
            <mt-button type="default" size='large' class="red_b" @click='register'>注册领取898元大礼包</mt-button>
            <div class="main1"></div>
            <div class="footer">
                <p>
                    客服电话：400-188-9138
                </p>
            </div>
     </div>
     <div id="box2" :style='[b]'>
            {{msg}}
        </div>
 </div>
</template>
<script>
    import $ from "jquery"
 export default {
     name:"Login",
     data(){
         return{
             username:"",
             password:"",
             b:{},
             msg:"登录失败，请检测后重试!"
         }
     },
     methods:{
         mine(){
             this.$router.push("/product");
         },
         register(){
            this.$router.push("/register");
         },
         login(){
            var _this=this;
                $.post("http://127.0.0.1:3000/user/login",{phoneNum:_this.username,password:_this.password},function(data){
                    console.log(data);
                    var outmoney=parseInt(data[0].outmoney)
                    var usemoney=parseInt(data[0].usemoney)
                    var money=parseInt(data[0].money)
                    console.log(data[0].arr)
                    if(data[0].arr.length!=0){
                 var arr=JSON.parse(data[0].arr)
                }else{
                 var arr=data[0].arr

                }
                    console.log(arr);

                    if(data!=0){
                        _this.$store.commit("xian",_this.username)
                        _this.$store.commit("xian1",outmoney)
                        _this.$store.commit("xian2",usemoney)
                        _this.$store.commit("xian3",money)
                        _this.$store.commit("xian4",arr)
                        _this.$store.commit("mima",_this.password)
                        // alert("注册成功");
                        _this.msg='登录成功，请稍等！'
                        _this.b={display:'block'};
                        var _1this=_this;
                        function f(){
                            _1this.b={display:'none'};
                            _1this.$router.push("/mine")
                            
                        }
                        setTimeout(f,1000)

                       
                    }else{
                        // alert("登录失败，请检测后重试")
                        _this.b={display:'block'};
                        var _1this=_this;
                        function f(){
                            _1this.b={display:'none'};
                        }
                        setTimeout(f,1000)

                    }               
            
	    }) 
        
           
         }

       
     }
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
 .mim{
     text-align: right;
     margin-top: 10px;
     font-size: 12px
 }
 .red_b{
     color: #e94c4e;
     border: 1px solid #e94c4e;
     background: #fff;
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
 .footer{
     font-size: 12px;
     text-align: center;
     color: #8c8383;
 }
 #box2{
            width: 160px;
            height: 50px;
            border-radius: 10px;
            background:orange;
            color: aliceblue;
            text-align: center;
            line-height: 50px;
            position: absolute;
            left: 50%;
            top: 60%;
            margin:-25px 0 0 -80px;
           display: none;
           font-size: 12px;
        }
</style>