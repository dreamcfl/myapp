import Vue from "vue"
import Vuex from "vuex"
import $ from "jquery"
import axios from "axios"
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        phoneNum:'请登录',
        obj:'',
        money:0,
        pass:'',
        outmoney:0,
        usemoney:0,
        outtake:[]
    },
    mutations:{
        xian(a,b){
            a.phoneNum=b;
        },

        xian1(a,b){
            a.outmoney=parseInt(b);
        },
        xian2(a,b){
            a.usemoney=parseInt(b);
        },
        xian3(a,b){
            a.money=parseInt(b);
        },
        xian4(a,b){
            a.outtake=b;
        },

        detail(a,b){
            a.obj=b;
        },
        detail1(a,b){
            a.obj=b;
        },
        addqian(a,b){
            a.money+=parseInt(b[0]);
            a.usemoney+=parseInt(b[0]);
            //money
            $.post("http://127.0.0.1:3000/user/money",{phoneNum:b[1],money:a.money},function(data){

            })
            // usemoney
            $.post("http://127.0.0.1:3000/user/usemoney",{phoneNum:b[1],usemoney:a.usemoney},function(data){

            })

        },
        jianqian(a,b){
            a.money-=parseInt(b[0]);
            a.usemoney-=parseInt(b[0]);
            //money
            $.post("http://127.0.0.1:3000/user/money",{phoneNum:b[1],money:a.money},function(data){

            })
            // usemoney
            $.post("http://127.0.0.1:3000/user/usemoney",{phoneNum:b[1],usemoney:a.usemoney},function(data){

            })
        },
        outqian(a,b){
            a.outmoney+=parseInt(b[0]);
            a.usemoney-=parseInt(b[0]);
             //outmoney
             $.post("http://127.0.0.1:3000/user/outmoney",{phoneNum:b[1],outmoney:a.outmoney},function(data){

            })
            // usemoney
            $.post("http://127.0.0.1:3000/user/usemoney",{phoneNum:b[1],usemoney:a.usemoney},function(data){

            })
        },
        mima(a,b){
            a.pass=b;
        },
        outtake1(a,b){
            a.outtake.push(b[0])
             // arr
             console.log(a.outtake)
        //      $.post("http://127.0.0.1:3000/user/usearr",{phoneNum:b[1],arr:a.outtake},function(data){

        //     })
        axios({
            method:'post',
            url:'http://127.0.0.1:3000/user/usearr',
            params:{phoneNum:b[1],arr:JSON.stringify(a.outtake)}
          })
            .then(function(data) {
                console.log(data.data)
          });
         
         },
         zhuan1(a,b){
            a.usemoney+=parseInt(b[0]);
            a.outmoney-=parseInt(b[0]);
            // console.log(b[2])
            a.outtake.splice(b[2],1)
             //outmoney
             $.post("http://127.0.0.1:3000/user/outmoney",{phoneNum:b[1],outmoney:a.outmoney},function(data){

            })
            // usemoney
            $.post("http://127.0.0.1:3000/user/usemoney",{phoneNum:b[1],usemoney:a.usemoney},function(data){

            })
             // arr
            //  $.post("http://127.0.0.1:3000/user/usearr",{phoneNum:b[1],arr:JSON.stringify(a.outtake)},function(data){

            // })
            axios({
                method:'post',
                url:'http://127.0.0.1:3000/user/usearr',
                params:{phoneNum:b[1],arr:JSON.stringify(a.outtake)}
              })
                .then(function(data) {
                    console.log(data.data)
              });
         }
    }
})