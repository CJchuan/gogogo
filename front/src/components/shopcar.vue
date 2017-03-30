<template>
    <div class="shopcar">
        <div class="header2">
                <left></left>
                <h2>购物车<span(5)</span></h2>
        </div>
        <div id="show" v-if="goodscar.length==0">
          空空。。
        </div>
      <div class="wrap" v-else>
        
       <table width="100%" align="center" cellpadding="0" border-bottom=".1rem solid #ccc" style="border-collapse:collapse; border-spacing:0px 10px;">
         
            <tr v-for="(data,index) in goodscar" :key="index">
                <td width="5%">
                    <label>
                        <input type="checkbox" :value="index" class="check"  v-model="ischeck"/>
                       <!--  <span class="checkshow" v-if="ischeck">√</span> -->
                    </label>
                </td>
                <td width="20%">
                    <img :src="data.imghash"/>
                </td>
                <td class="detail">
                    
                    <p class="desc">{{data.goodsName}}</p>
                    <p class="price"><span>￥{{data.price}} </span><span class="beforeprice">￥{{data.bprice}}</span></p>
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
                        <input type="checkbox"   @click="btn"/>
                       <!--  <span class="checkshow" v-if="ischeck">√</span> -->
                    </label>
                </td>
                <td>全选</td>
                <td>合计：<span class="f30">{{all}}</span></td>
                <td style="text-align:center;background-color:#f30;color:#fff">结算（0）</td>
            </tr>
       </table>
    </div>
</template>

<script>
 import left from "./left.vue";
    export default {
        name:'shopcar',
        data(){
            return{
                ischeck:[],
                value:1,
                show:false,
                all:0,
                goodscar:[]
            }
        },
        methods:{
            btn(){
      
                if(this.ischeck.length==this.goodscar.length){
                  this.ischeck=[]
                }else{
                  this.ischeck=[];
                  for(var i=0;i<this.goodscar.length;i++){
                    
                    this.ischeck.push(i)
                  }
                }
                
              },
          
            add(index){
              this.goodscar[index].num++;
              console.log(index);
              this.$http.post('/shopcar/add',{number:this.goodscar[index].num}).then(res=>{
                 console.log(res.body)
                 if(res.body=='1'){
                    console.log(1111)
                 }
                })
              
            },
            jian(index){
              // this.value--;
               this.goodscar[index].num--;
              if(this.goodscar[index].num<1){
                this.goodscar[index].num=1;
                 
              }
            }
           
        },
         beforeRouteEnter(to,from,next){
        next(vm=>{
          
            vm.$http.post('/upsession').then(res=>{
      
                    if(res.data=="null"){
                       router.push({name:"loading"})
                    }else{
    
                    }
            });
                    
        })
    },

        mounted(){
          this.$http.post('/shopcar/read').then(res=>{
              console.log(res.body);
              this.goodscar=res.body;
              for(let i=0;i<this.goodscar.length;i++){
                this.all+=this.goodscar[i].num*this.goodscar[i].price
              }
          })
        },
        components:{
        left
        }
    }
</script>

<style scoped>
.shopcar{
  display: flex;
  flex-direction: column;
}
#show{
  margin-top: 5rem;
  text-align: center;
  font-size: 30px
}
.wrap{
  flex:1;
  margin-top: 5rem
}
   .header2{
    width:100%;
    display: flex;
    height:4rem;
    text-align: center;
    line-height: 4rem;
    position: fixed;
    top:0;
    left:0;
    background: #fff;
    z-index: 2
   }
   .header2 .iconfont{
    width:4rem;
   }
   .header2 h2{
    flex:1;
    font-size: 20px;
    margin-left: -4rem;
    color:#a30;
   }
    input[type=checkbox]{
       
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
     width:5rem;
     height:5rem;
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
     padding: .5rem;
     box-sizing: border-box;
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
    height: 2rem;
    margin-top: 1rem
    }
    .detal p{
      width:20rem;
      height:3rem;
      overflow:hidden;
    }
    .desc{
    color:#999;
    height:3rem;
    overflow:hidden;
    line-height: 1.5rem
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