<template>
 <div id="box">
     <header :style='isshow'>{{tit}}</header>
     <section>
         <router-view @toparent='getdata'></router-view>
     </section>
     <footer>
        
         <router-link to="/home" tag="span">
          <ul>
              <li class="iconfont icon-shouye"></li>
              <li>首页</li>
          </ul>

        </router-link>
         <router-link to="/product" tag="span">
                <ul>
                    <li class="iconfont icon-YUAN"></li>
                    <li>产品</li>
                </ul>
        </router-link>
         <router-link to="/mine" tag="span" v-if='islogin'>
             <ul>
                    <li class="iconfont icon-guanyanren"></li>
                    <li>我的</li>
                </ul>
        </router-link>
        <router-link to="/login" tag="span" v-else>
            <ul>
                   <li class="iconfont icon-guanyanren"></li>
                   <li>我的</li>
               </ul>
       </router-link>
     </footer>
 </div>
</template>
<script>

 export default {
     name:"Main",
     data:function(){
         return{
             tit:"首页",
             isshow:{'display':'none'},
             islogin:false
         }
     },
     methods:{
         getdata(msg){
             this.tit=msg[0];
             this.isshow=msg[1];
         }
     },
    mounted() {
        if(this.$store.state.phoneNum =="请登录"){
            this.islogin=false
        }else{
            this.islogin=true

        }
    },
    
 }
</script>
<style>
    
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,input{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0; }
img{display:block;}
a{text-decoration:none; color:#333;}
h1,h2,h3,h4,h5,h6,strong{font-weight:100;}
body{ font-family:"微软雅黑";}
input,a{outline:none;}


    #box{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
 footer{
     height: 50px;
     text-align: center;
     font-size: 14px;
     border-top:1px solid #f1f1f1; 
 }
 header{
     height: 40px;
     color: #fff;
     font-size: 14px;
     text-align: center;
     line-height: 40px;
     background:#e94c4e;
     position: absolute;
     width: 100vw;
 }
 section{
     flex: 1;
     overflow: auto;
    
 }
footer span{
    width: 33.3%;
    float: left;
}
footer span ul{
    height: 40px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
footer span ul li{
    height:auto;
    line-height:20px
}
footer span ul li:nth-of-type(1){
    font-size: 24px
}
.router-link-active{
    color:#e94c4e;
}
</style>