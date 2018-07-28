<template>
 <div class="detail">
     <header>
            <span class="iconfont icon-shangyiyehoutuifanhui" @click='chanp'></span>
           <span>出借详情</span>
     </header>
     <section>
<div class="con">
    <h2><span>{{this.$store.state.obj.y}}</span></h2>
    <p>年利率</p>
    <p><span>{{this.$store.state.obj.day}}</span>天锁定期 | <span>{{this.$store.state.obj.day}}</span>天后可免费退出</p>
</div>
<div class="det">
    <h3>了解【智能出借服务】</h3>
    <p>为了给出借人带来更好的产品体验，票据宝推出了智能出借服务工具，使用该工具，平台用户可以更加轻松便捷的通过平台标的的出借资金，获取利息。 
    智能出借服务工具协助投向的所有标的均以拥有稳定持续性经营收入的中小微企业为借款人，票据宝平台为这些中小微企业借款人提供借款信息中介服务，服务实体经济，借款人则以“企业经营性现金收入+足额或超额票据”的双重还款来源作为风险保证措施。</p>
     <h4>如何获得收益</h4>
     <p>借款匹配成功当日开始计算收益，因资金存管系统及支付通道结算时效要求一般出借1-3日内匹配成功。</p>
    <h4>何时到期</h4>
    <p>本产品可满足用户长期收益诉求，除非产品内所有借贷项目到期、或无借贷项目符合用户设定的出借标准。</p>
    <h4>出借限额</h4>
    <p>最低100.00元起，且为整数。</p>
    <h4>退出时间</h4>
    <p>锁定期内不支持退出，锁定期后可免费退出。</p>
    <h4>退出金额</h4>
    <p>申请退出时，单笔退出金额最低100.00元。</p>
    <h4>退出时长</h4>
    <p>申请退出后，系统将以债权转让方式撮合交易，视交易情况而定，成功退出一般需要1-3个自然日。</p>
    <h4>结算方式</h4>
    <p>退出时按退出本金比例结算对应的利息，退出本金在成功退出之前一直计息，但退出成功当天不计息。</p>
    <h4>费用说明</h4>
    <p>退出费用为0.00元</p>
    <h4>服务协议</h4>
    <p>服务协议</p>
</div>
</section>
    <footer @click='out'>
        立即出借
    </footer>
 </div>
</template>
<script>
 export default {
     name:"Detail",
     methods:{
         chanp(){
             this.$router.push("/product")
         },
         out(){
            this.$router.push("/outmoney")
         }
     }
 }
</script>
<style scoped>
    
 .detail{
     font-size: 12px;
     display: flex;
     flex-direction: column;
     height: 100vh;
 }

 h3{
     text-align: center;
     font-weight: 800;
 }
 .detail h4{
     font-weight: 800;
 }
 .det>p{
     margin: 10px 0;
     text-indent: 2em;
 }
 header{
     height: 40px;
     color: #fff;
     font-size: 14px;
     text-align: center;
     line-height: 40px;
     position: absolute;
     background:#e94c4e;
     width: 100vw;
 }
 .iconfont{
        position: absolute;
        font-size: 20px;
        color: #fff;
        left: 0;
    }
 section{
     flex: 1;
     overflow: auto;
     margin-top: 40px;
 }
 .det{
     padding: 10px;
 }
 .con{
     background: #e94c4e;
     height: 150px;
     color: #fff;
     text-align: center;
     padding-top: 30px;
 }
 .con p{
     margin: 10px 0;
 }
 footer{
     height: 50px;
     color: #fff;
     font-size: 14px;
     text-align: center;
     line-height: 50px;
     background:#e94c4e;
     width: 100vw;
 }
</style>