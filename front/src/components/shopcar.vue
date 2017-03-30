<template>
    <div class="shopcar">
        <div class="header2">
                <left></left>
                <h2>购物车</h2>
        </div>
        <div id="show" v-if="goodscar.length==0">
          空空。。
        </div>
      <div class="wrap" v-else>
        
       <table width="100%" align="center" cellpadding="0" border-bottom=".1rem solid #ccc" style="border-collapse:collapse; border-spacing:0px 10px;">
  <tr v-for="(data,index) in cars">                <td width="5%">
                    <label>
                        <input type="checkbox" :value="index" class="check"  v-model="ischeck"/>
                       <!--  <span class="checkshow" v-if="ischeck">√</span> -->
                    </label>
                </td>
                <td width="20%">
                    <img :src="data.imghash"/>
                </td>
                <td class="detail">
 <p class="goodname">{{data.goodsName}}</p>
                    <p class="price"><span>{{data.price}}</span><span class="beforeprice">￥{{data.bprice}}</span></p>
                </td>
                <td class="count"  width="20%">
                    <a @click="jian(index)">-</a>
                    <span> {{data.num}} </span>
                    <a @click="add(index)">+</a>
                </td>
                <td class="del"  width="5%">
                    <a>删除</a>
                </td>
            </tr>
       </table>
       </div>
       <table class="bot">
            <tr>
                <td width="5%">
                    <label class="">
                        <input type="checkbox" class="check" v-model="ischeckAll" />
                        <span class="checkshow" v-if="ischeckAll">√</span>                    </label>
                </td>
                <td>全选</td>
                <td>合计：<span class="f30">{{all}}</span></td>
                <td style="text-align:center;background-color:#f30;color:#fff">结算（0）</td>
            </tr>
       </table>
    </div>
</template>

<script>
  import URL from "../url";
 import left from "./left.vue";
 import router from "../router"
    export default {
        name:'shopcar',
        data(){
            return{
                ischeck:true
              ischeckAll:true,
                all:0,
                cars:[]
        },
        computed:{
          totalPrice:function(){
            var total = 0; 
            this.cars.forEach(function(el){ 
              if(el.isCheck){
               total += good.productPrice * good.productQuentity; 
               }
              });
            return total;
            }
        }, 
        watch:{
          "all":"showTotal"
        },
        methods:{
          add(index){
              this.cars[index].num++;
            },
            jian(index){
            var num=this.cars[index].num-1;
            this.cars[index].num=Math.max(num,1);
            },
            showTotal(){
              this.all=this.totalPrice
            }
           
        },
          beforeRouteEnter(to,from,next){
        next(vm=>{
          
            vm.$http.post(`${URL.obj}/upsession`).then(res=>{
      
                    if(res.data=="null"){
                       router.push({name:"loading"})
                    }else{
                       vm.userinfo.uid=res.data.uid;
                       vm.userinfo.uname=res.data.nickname;  
                    }
            });
                    
        })
    },    
        mounted(){
        var _this=this;
          this.$http.post(`${URL.obj}/shopcar/read`).then(res=>{
              console.log(res.body);
          })
        },
        components:{
        left
        }
    }
</script>
<style scoped>

 .header2{
   height:4rem;
   line-height:4rem;
 }
  h2{
    display:inline-block;
  }



























    input[type=checkbox]{
        visibility:hidden;
        width:100%;
        height:100%;
    }
    label{
        display:block;
        background:#fff;
        width:1.5rem;
        height:1.5rem;
        border-radius:50%;
        border:.1rem solid #ccc;
        position:relative;
    }
      label.active{
        background:red;
      }

    img{
     width:6rem;
     height:6rem;
    }
    .count a{
        display:inline-block;
        width:1.5rem;
        height:1rem;
        line-height:1rem;
        border:.1rem solid #ccc;
        text-align:center;
    }
    .count input{
    outline:none;
     width:1.5rem;
     height:1rem;
     text-align:center;
    }
    table{
     background:#eee;
 
    }
    tr{
     border-bottom:.2rem solid #fff;
    }
    .del{
     width:3rem;
    text-align:center;
    }
    .del a{
     display:inline-block;
     width:1.6rem;
     font-size:1.6rem;

    }
    .price{
    color:#f03;
    }
    .detal p{
      width:20rem;
      height:3rem;
      overflow:hidden;
    }
    .desc{
    color:#999;
    }
    .checkshow{
      color:#f00;
      position:absolute;
      top:0rem;
      left:50%;
      transform:translateX(-50%);
      font-size:1.4rem;
      font-weight:bold;
    }
    .bot{
     position:fixed;
     bottom:0rem;
     height:4rem;
     line-height:4rem;
    }
    .bot .checkshow{
     top:-1.2rem;
    }
    .f30{
     color:#f30;
     
    }
    .beforeprice{
     text-decoration:line-through;
     color:#888;
    }

</style>