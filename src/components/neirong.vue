<template>
    <div class="nei">
         <div class="header_n">
                <span class="iconfont icon-shangyiyehoutuifanhui" @click='home()'></span>
            <h2>票据宝欢迎你！</h2>
        </div>
        <div class="bor_b"></div>
        <p>合规之路</p>
        <p>我们不敢怠慢</p>
        <p>未来</p>
        <p>我们稳步前行</p>
        <p>你给予我期盼</p>
        <p>我回报你如期</p>
        <div class="footer">票据宝官方网站 www.pjb.com</div>
    </div>
</template>
<script>
    export default {
        name:"Neirong",
        methods:{
            home(){
                this.$router.push("/home")
            }
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .nei{
        padding: 10px;
    }
    .header_n{
        display: flex;
        align-items: center;
        margin-top: 10px;


    }
    .header_n h2{
        font-size: 18px;
        margin-left: 10px;
    }
    .bor_b{
        border-bottom:1px solid #f1f1f1; 
        margin: 30px 0
    }
    p{
        font-size: 12px;
        text-align: center;
        margin: 30px 0;

    }
    .footer{
        text-align: center;font-size: 12px;
        margin-top: 250px;
    }
</style>