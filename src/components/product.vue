<template>
 <div id="pro">
     <div class="header">
         <p>
            <img src="../assets/16.jpg" alt="">
            <span>快速了解智能出借服务（便捷出借、灵活退出）</span>
        </p>
        <p>
            <span class="iconfont icon-xiayiyeqianjinchakangengduo
            "></span>
        </p>
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
                 <dl>
                       <button @click='detail1()'>立即出借</button>
                 </dl>
            </div>
        </div>
         <div class="content" v-for='(v,i) in arr'>
            <div class="con_top">
                <span>{{v.day}}天锁定期</span>
                <img src="../assets/11.jpg" alt="">
            </div>
            <div class="con_center">
                <dl>
                    <dt>{{v.y}}</dt>
                    <dd>年利率</dd>
                </dl>
                <dl>
                        <dt>{{v.day}}天</dt>
                        <dd>锁定期</dd>
                    </dl>
                    <dl>
                        <button @click='detail(v)'>立即出借</button>
                    </dl>
             </div>
        </div>
               
        <div class="msg">
            <div class="msg_top">
                <span></span>
                <h3>借款信息公示</h3>
            </div>
            <div class="msg_center">
                <div class="msg_h">
                     
                    <ul>
                        <li>借款主体</li>
                        <li>借款用途</li>
                        <li>借款期限</li>
                        <li>借款金额</li>
                    </ul>
                </div>
                <div class="msg_s">
                    <div class="msg_warp">
                    <div v-for='v in 3'>
                    <ul>
                        <li>深圳**</li>
                        <li>经营性流动资金周转</li>
                        <li>273天</li>
                        <li>2000000.00元</li>
                    </ul>
                    <ul>
                        <li>广东**</li>
                        <li>经营性流动资金周转</li>
                        <li>334天</li>
                        <li>280000.00元</li>
                    </ul>
                    <ul>
                        <li>均荣**</li>
                        <li>经营性流动资金周转</li>
                        <li>312天</li>
                        <li>300000.00元</li>
                    </ul>
                    <ul>
                        <li>东莞**</li>
                        <li>经营性流动资金周转</li>
                        <li>340天</li>
                        <li>500000.00元</li>
                    </ul>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_banner">
            <span>债转专区</span>
            <img src="../assets/18.png" alt="">
        </div>
        <div class="footer">
                <img src="../assets/1.jpg" alt="">
                <span>银行资金存管</span>
        </div>
 </div>
</template>
<script>
    import $ from "jquery"
    var num2 = 0;
    var timer2 = null;

function foo2() {

			num2++;
			var left2 =86;
			if (num2 == 3) {
				num2 = 1;
				$(".msg_warp").css("top", 0);
			}
            $(".msg_warp").stop().animate({ "top": -left2 * num2 }, 800);
		}


 export default {
     name:"Product",
     data:function(){
         return{
            tit:"产品",
            isshow:{},
            arr:[]
         }
     },
     mounted() {
         var _this=this;

         this.$emit("toparent",[this.tit,this.isshow]);
        
        clearInterval(timer2)
        timer2 = setInterval(foo2, 3000);
        
        $.post("http://localhost:3000/user/product",function(data){
            //console.log(data);
            _this.arr=data;
        })

		
     },
     methods:{
         detail(data){
            // console.log(data);
             this.$store.state.obj=data
             this.$router.push("/detail")
         },
         detail1(){
            this.$store.state.obj={"day":30,"y":"6.0%"}
             this.$router.push("/detail")
         }
     }
 }
</script>
<style scoped>
 #pro{
     margin-top: 40px
 }
 .header{
     display: flex;
     justify-content: space-between;
     align-items: center;
     font-size: 12px;
     padding:10px;
     color: #8c8383; 
     border-bottom: 8px solid #f7f6f2;
 }
 .header p{
     display: flex;
     align-items: center;
 }
 .header p img{
     width:12px;
     margin-right: 5px;
 }
 .content{
        border-bottom:8px solid #f7f6f2; 
        padding-bottom:10px; 
        width: 100vw;
    }
    .con_top{
        display: flex;
        align-items: center
    }
    .con_top span{
        font-size: 12px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .con_top img{
        width: 168px;
        height: 45px;
    }
    .con_center{
        display: flex;
        font-size: 14px;
    }
    .con_center dl{
        width: 33.3%;
        text-align: center;
    }
    
    .con_center dl:nth-of-type(3) button{
        height: 36px;
        width: 100px;
        color: #fff;
        background: #e94c4e;
        outline: none;
        border: none;
        border-radius: 8px;
    }
    .con_center dl dd{
        color: #8c8383;
        margin-top: 5px;
    }
    
    .msg{
        border-bottom:8px solid #f7f6f2;
        font-size: 12px;
    }
    .msg .msg_top{
        font-size: 12px;
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .msg .msg_top span{
        width: 3px;
        height: 12px;
        background:#e94c4e;
        display: block;
        margin-right: 6px;
    }
    .msg_h{
        border-top: 1px solid #f7f6f2;
        width: 95%;
        height: 30px;
        margin-left:5%; 
    }
    .msg_h ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 5px;
    }
    .msg_s{
        width: 95%;
        padding: 0 0 10px;
        margin-left:5%; 
        height: 80px;
        overflow: hidden;
        position: relative;
    }
    .msg_warp{
        position: absolute;
    }
    .msg_s ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 5px;
    }
    .msg_s ul li{
        padding: 0 10px;
    }
    .msg_s ul li:nth-of-type(1){
        padding: 0 20px;
    }
    .footer_banner{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer_banner span{
        margin-left: 30px
    }
    .footer_banner img{
        width: 200px;
        margin-right: 20px;
    }
    .footer{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #f7f6f2;
        padding: 8px 0;
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