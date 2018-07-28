<template>
<div>
    <div class="header1">
            <span class="iconfont icon-shangyiyehoutuifanhui" @click='mine()'></span>
            提现界面
    </div>
    <div class="con">
            <div class="group">
                    <label for="ad">提现金额：</label>
                    <input type="number" id="ad" v-model='num1'>
            </div>
        <div class="group">
            <label for="ad1">输入密码：</label>
            <input type="password" id="ad1" v-model='pass'>
        </div>
    </div>
    <div class="btn_wrap">
            <mt-button type="danger" size='large' class="back" @click='ti()'>提现</mt-button>
    </div>
    <div id="box2" :style='[b]'>
            {{msg}}
    </div>
</div>
</template>
<script>
export default {
    name:"Jianmoney",
    data:function(){
         return{
            b:{},
            msg:"提现失败，请核实后重试!",
            pass:'',
            num1:''
         }
     },
    methods:{
        mine(){
            this.$router.push("/mine")
        },
        ti(){
            var reg=/^\d{1,}$/;
            if(reg.test(this.num1) && this.pass==this.$store.state.pass
        && this.num1<=this.$store.state.usemoney
        ){
                   this.msg="提现成功，请稍等~"
                   var _this=this;
                     _this.b={display:'block'};
                        var _1this=_this;
                        function f(){
                            _1this.b={display:'none'};
                            _1this.$store.commit("jianqian",[_1this.num1,_1this.$store.state.phoneNum])
                            _1this.$router.push("/mine");
                        }
                        setTimeout(f,1000)
             }else{
                    var _this=this;
                     _this.b={display:'block'};
                        var _1this=_this;
                        function f(){
                            _1this.b={display:'none'};
                        }
                        setTimeout(f,1000)
                }

         }
    }
}
</script>
<style scoped>
.group{
    padding: 10px;
}
.group input{
    height: 30px;
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
.con{
    margin: 20px 0;
}
.btn_wrap{
    margin:30px;
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
            top: 60%;
            margin:-25px 0 0 -100px;
           display: none;
           font-size: 12px;
        }
</style>