<template>
 <div id="min">
     <div class="header">
         <div class="header_top">
            <p>
                    <span class="iconfont icon-set" @click='shezhi'></span>
            </p>
            <p>
                <span class="iconfont icon-kefu"></span>
                <span class='iconfont icon-lingdang-xianxing'></span>
            </p>
         </div>
         <div class="header_center">
             <div class="hc1">
                 <dl>
                     <dt>总资产（元）</dt>
                     <dd>{{this.$store.state.money}}.00</dd>
                 </dl>
             </div>
             <div class="hc2">
                    <dl>
                        <dt>待收收益（元）</dt>
                        <dd>0.00</dd>
                    </dl>
                    <dl>
                            <dt>累计已收收益（元）</dt>
                            <dd>0.00</dd>
                        </dl>
              </div>
         </div>
     </div>
     <div class="main1">
            <div>
                <span>可用余额：</span>
                <span class="red">￥{{this.$store.state.usemoney}}.00</span>
            </div>
            <div>
                <button @click='add'>
                    充值
                </button>
                <button @click='jian'>
                    提现
                </button>
            </div>
         </div>
         <div class="main2" @click='outta'>
                <div>
                        <span>智能出借服务资产</span>
                        
                    </div>
                    <div>
                      <span>￥{{this.$store.state.outmoney}}.00</span>
                      <span class="iconfont icon-xiayiyeqianjinchakangengduo
            "></span>
                    </div>
         </div>
         <div class="main3">
            <dl>
                <dt @click='con()'><img src="../assets/22.png" alt=""></dt>
                <dd>优惠券</dd>
            </dl>
            <dl>
                <dt @click='con()'><img src="../assets/23.png" alt=""></dt>
                <dd>邀请好友</dd>
            </dl>
            <dl>
                <dt @click='con()'><img src="../assets/24.png" alt=""></dt>
                <dd>交易明细</dd>
            </dl>
            <dl>
                <dt @click='con()'><img src="../assets/25.png" alt=""></dt>
                <dd>管家日历</dd>
            </dl>
         </div>
         <div class="main4">

         </div>
         <div class="footer">
                <img src="../assets/1.jpg" alt="">
                <span>银行资金存管</span>
        </div>
 </div>
</template>
<script>
 export default {
     name:"Mine",
     data:function(){
         return{
             tit:'',
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
         shezhi(){
            this.$router.push("/shezhi")
         },
         add(){
            this.$router.push("/addmoney")
            
         },
         jian(){
            this.$router.push("/jianmoney")

         },
         outta(){
            this.$router.push("/outtake")
         }
     }
 }
</script>
<style scoped>
    .header{
        height: 220px;
        background: #fe6951;
       
    }
    .header_top{
        display: flex;
        justify-content:space-between;
    }
    .header_top p{
        margin: 10px;
        height: 30px;
        color: #fff
    }
    .header_top p span{
        padding: 5px;
        font-size: 20px;
    }
    .header_center{
        font-size: 14px;
        color: #fff;
        margin:10px
    }
    .header_center>div{
        margin-top: 25px;
    }
    .hc1 dl{
        font-size: 18px;
    }
    .hc1 dl dt{
        margin-bottom: 6px;
      
    }
    .hc2{
        display: flex;
       
    }
    .hc2 dl{
        width: 50%;
    }
    .hc2 dl dt{
        margin-bottom: 6px;
    }

     .main1{
         display: flex;
         justify-content: space-between;
         font-size: 12px;
         padding: 15px;
         border-bottom: 8px solid #f7f6f2;
         align-items: center;
     }
     .main1 .red{
         color: #fe6951;
     }
     .main1 button{
         color: #e94c4e;
         background: #fff;
         width: 60px;
         height: 26px;
         border: 1px solid #e94c4e;
         border-radius: 6px;
         outline: none;

     }
     .main1 button:nth-of-type(1){
         margin-right: 2px;
        color: #ffffff;
        background: #e94c4e;
     }
     .main2{
         display: flex;
         justify-content: space-between;
         font-size: 12px;
         padding: 15px;
         border-bottom: 8px solid #f7f6f2
     }
     .main2 span:nth-of-type(2){
         margin-left: 6px;
     }
     .main3{
         display: flex;
         justify-content: space-between;
         font-size: 12px;
         padding: 15px;
         border-bottom: 8px solid #f7f6f2
     }
     .main3 dl{
         display: flex;
         align-items: center;
         flex-direction: column;
     }
     .main3 dd{
         color: #8c8383;
         margin-top: 3px;
     }
     .main3 dl:nth-of-type(1) dt img{
         width: 38px;
     } 
     .main3 dt img{
         width: 40px;
     } 
     .main4{
         background: #f7f6f2;
         min-height: 150px;
     }
     .footer{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #f7f6f2;
        padding: 8px 0;
        background: #f7f6f2;
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