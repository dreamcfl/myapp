<template>
 <div class="shezhi">
     
        <div class="header1">
                <span class="iconfont icon-shangyiyehoutuifanhui" @click='mine()'></span>
            设置
        </div>
        <div class="box">
            <ul @click='login1'>
                <li>
                    <span class="iconfont icon-guanyanren"></span>
                    <span>{{this.$store.state.phoneNum}}</span>
                </li>
                <li>
                    <span>切换账户</span>
                     <span class="iconfont icon-xiayiyeqianjinchakangengduo
                    "></span>
                 </li>
           </ul>
        </div>
        <div class="box">
            <ul>
                <li>银行卡</li>
                <li>
                    <span>去绑定</span>
                    <span class="iconfont icon-xiayiyeqianjinchakangengduo
                    "></span>
                </li>
            </ul>
            <ul>
                    <li>账户安全</li>
                    <li>
                        <span>密码/解锁</span>
                        <span class="iconfont icon-xiayiyeqianjinchakangengduo
                        "></span>
                    </li>
                </ul>
        <ul>
            <li>风险评估</li>
            <li>
                <span>去测评</span>
                <span class="iconfont icon-xiayiyeqianjinchakangengduo
                "></span>
            </li>
        </ul>
        <ul>
                <li>收货地址</li>
                <li>
                   
                    <span class="iconfont icon-xiayiyeqianjinchakangengduo
                    "></span>
                </li>
            </ul>
        </div>
        <div class="box">
            <ul>
                <li>关于我们</li>
                <li>
                    
                    <span class="iconfont icon-xiayiyeqianjinchakangengduo
                    "></span>
                </li>
            </ul>
            <ul>
                <li>问题反馈</li>
                <li>
                    <span class="iconfont icon-xiayiyeqianjinchakangengduo
                    "></span>
                </li>
            </ul>
        </div>
        <div class="box">
                <ul>
                    <li>版本更新</li>
                    <li>
                        <span>当前版本V6.1.0</span>
                        <span class="iconfont icon-xiayiyeqianjinchakangengduo
                        "></span>
                    </li>
                </ul>
        </div>
        <div class="btn_wrap">
        <mt-button type="default" size='large' class="back" @click='login'>退出登录</mt-button>
        </div>
            <div class="main1"></div>
 </div>
</template>
<script>
 export default {
     name:"shezhi",
     methods:{
         mine(){
             this.$router.push("/mine")
         },
         login(){
            this.$store.state.phoneNum="请登录";
            this.$store.state.pass='';
            this.$store.state.money=0;
            //console.log(this.$store.state.phoneNum)
            this.$router.push("/login")

         },
         login1(){
            this.$router.push("/login")

         }
     }

 }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
 .header1{
     height: 40px;
     color: #fff;
     font-size: 14px;
     text-align: center;
     line-height: 40px;
     background:#e94c4e;
     width: 100vw;
 }
 .header1 span{
     position:absolute;
     top: 0;
     left: 10px;
 }
 li{
     list-style: none;
     padding: 15px;
    
 }
 ul {
     display: flex;
     justify-content: space-between;
      border-bottom: 1px solid #f7f6f2; 
 }
 .box{
     font-size: 12px;
     border-bottom: 20px solid #f7f6f2;
 }
 .box span{
     color: #8c8383;
 }
 .back{
     background: #fff;
     font-size: 12px;
     color: #e94c4e;
 }
 .btn_wrap{
     margin:10px 30px;
 }
</style>