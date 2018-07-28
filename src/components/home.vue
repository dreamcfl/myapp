<template>
 <div id="hom">
    <mt-swipe :auto="3000" style="height: 200px">
        <mt-swipe-item>
            <img src="../assets/15.jpg" height="200" width="100%">
        </mt-swipe-item>
        <mt-swipe-item >
                <img src="../assets/13.jpg" height="200" width="100%">
        </mt-swipe-item>
        <mt-swipe-item >
                <img src="../assets/6.jpg" height="200" width="100%">
        </mt-swipe-item>
        <mt-swipe-item>
                <img src="../assets/12.jpg" height="200" width="100%">
        </mt-swipe-item>
    </mt-swipe>
    <div class="nav">
        <ul>
            <li @click='con()'><img src="../assets/10.png"></li>
            <li @click='con()'><img src="../assets/9.png" ></li>
            <li @click='con()'><img src="../assets/8.png"></li>
        </ul>
    </div>
    <div class="xx">
        <img src="../assets/14.png">
        <span>更多 <strong class="iconfont icon-xiayiyeqianjinchakangengduo
            "></strong></span>
    </div>
    <div class="banner">
        <img src="../assets/7.png">
    </div>
    <div class="tj">
        <img src="../assets/2.jpg" alt="">
        <span>热门商品推荐</span>
    </div>
    <div class="content">
        <div class="con_top">
            <span>新用户专享</span>
            <img src="../assets/5.png" alt="">
        </div>
        <div class="con_center">
            <dl>
                <dt>6.0%</dt>
                <dd>年利率</dd>
            </dl>
            <dl>
                    <dt>30天</dt>
                    <dd>锁定期</dd>
             </dl>
        </div>
        <div class="con_bottom">
            <button type="button" @click='detail1()'>
                立即出借
            </button>
        </div>

    </div>
    <div class="footer">
            <img src="../assets/1.jpg" alt="">
            <span>银行资金存管</span>
    </div>
 </div>
</template>
<script>
 export default {
     name:"Home",
     data:function(){
         return{
             tit:"首页",
             isshow:{"display":"none"}
         }
     },
    mounted() {
        this.$emit("toparent",[this.tit,this.isshow])
    },
    methods:{
        con(){
             this.$router.push("/neirong")
        },
        detail1(){
            this.$store.state.obj={"day":30,"y":"6.0%"}
             this.$router.push("/detail")
         }
    }
 }
</script>
<style scoped>
    .nav ul{
        display: flex;
        width:100vw;
    }
    .nav ul li img{
        width: 100%;
        height: 100%;
    }
    .xx{
        display: flex;
    }
    .xx img{
         width: 80%; 
        height:38px;
    }
    .xx span{
        height: 30px;
        font-size: 12px;
        display: block;
        width: 100%;
        padding-left: 5px;
        line-height: 26px;
        color: #8c8383;
        border-bottom: 8px solid #f7f6f2;
    }
    .banner img{
        width: 100%;
       
    }
    .tj{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #f7f6f2;
        padding: 10px 0; 
    }
    .tj img{
        width: 16px;
    }
    .tj span{
        font-size: 12px;
        margin-left: 10px;
        color: #8c8383;
    }
    .content{
        border-bottom:8px solid #f7f6f2; 
    }
    .con_top{
        display: flex;
        align-items: center
    }
    .con_top span{
        font-size: 12px;
        margin-left: 10px
    }
    .con_top img{
        width: 168px;
        height: 45px;
    }
    .con_center{
        display: flex;
        font-size: 14px;
    }
    .con_center dl:nth-of-type(1){
        border-right:1px solid #f7f6f2;
        width: 45%;
        margin-left: 10px;
    }
    .con_center dl:nth-of-type(2){
        margin-left: 20px;
    }
    .con_center dl dd{
        color: #8c8383;
        margin-top: 5px;
    }
    .con_bottom button{
        height: 36px;
        width: 90%;
        color: #fff;
        background: #e94c4e;
        margin: 10px 5% 15px 5%;
        outline: none;
        border: none;
        border-radius: 10px;
    }
    .footer{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #f7f6f2;
        padding-bottom: 8px;
        background: #f7f6f2 
    }
    .footer img{
        width: 12px;
    }
    .footer span{
        font-size: 12px;
        margin-left: 10px;
        color: #8c8383;
    }
    
</style>