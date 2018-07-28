<template>
  <div>
        <div class="header1">
                <span class="iconfont icon-shangyiyehoutuifanhui" @click='mine()'></span>
                出借记录
        </div>
      <div class="box">
        <table>
            <tr>
                <td>出借项</td>
                <td>出借额</td>
                <td>天数</td>
                <td>年利率</td>
                <td>操作</td>

            </tr>
            <tr v-if='this.$store.state.outtake.length==0'>
                        <td>暂无记录</td>
                       
            </tr>
            <tr v-for='(v,i) in this.$store.state.outtake' v-else>
                    <td>{{i+1}}</td>
                    <td>￥{{v.outmoney}}.00</td>
                    <td>{{v.day}}</td>
                    <td>{{v.y}}</td>
                    <td><mt-button type="danger" size='small' style="font-size: 12px;width: 50px" @click='zhuan(v.outmoney,i)'>转出</mt-button></td>
                </tr>
                
        </table>
      </div>
      <div></div>
  </div>
</template>
<script>
 export default {
     name:"Outtake",
     data:function(){
         return{
             
         }
     },
     methods:{
        mine(){
                    this.$router.push("/mine")
                },
        zhuan(n,m){
            this.$store.commit("zhuan1",[n,this.$store.state.phoneNum,m])
        }
     }
 }
</script>
<style scoped>
 .box{
     padding: 10px;
     font-size: 12px;
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
        table tr:nth-of-type(1) td{
            border-bottom: 1px solid #ddd;
            font-weight: 800;
        }
        table tr td{
            padding: 10px 10px
        }
</style>