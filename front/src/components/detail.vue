<template>
  <div id="detail">
  	  <router-view></router-view>        
	    <header>
	    	<a @click="changeBack"><span><</span></a>
	    	<p>商品详情</p>
	    </header>  
  	  
  	  
			   	  <swipe class="my-swipe" :showIndicators="true">
						  <swipe-item class="slide1" v-for="data in goods.images"><img :src="data"/></swipe-item>
						</swipe>
			  	  
			  	  <div class="sell">
			  	      <h3>{{goods.title}}</h3>
			  	      <p>
			  	      	<span class="shop-price">{{goods.shop_price}}元</span>
			            <span class="market-price">原价:{{goods.market_price}}元</span> 	      
			   	      </p>
			   	      <div class="buynumber">
			   	      	<div class="left" @click="low">-</div>
			  	        <input type="text"  v-model="number"/>
			  	        <div class="right" @click="up">+</div>
			   	      </div>			  	       	  
			   	      
			  	  </div>
			  	  
			      
			      
			  	  <ul class="bottom">
			  	  	  <li class="discountInfo">优惠信息</li>
			  	    	<li class="share">评论分享</li>
			  	  	  <li class="pictruedetail">图文详情</li>
			 	  	</ul>
			 	  	 
				   	<ul class="footer">
	  	  	    <li>客服</li>	
	  	  	    <li>收藏</li>	
	  	  	    <li class="shopcar" @click="addcar(goods.id)">加入购物车</li>	
	  	  	    <li class="buy" @click="gocar">立即购买</li>	
	  	  	 </ul>
  </div>
</template>

<script>
  import URL from "../url";
import router from "../router";
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
    export default{
    	data(){
    		return{
    			   goods:{},
                   number:1,
                   uid:""
    		}
    	},
    	 components:{
        "swipe":Swipe,
        "swipe-item":SwipeItem
      },
      beforeRouteEnter(to,from,next){
        next(vm=>{
            Indicator.open();
            vm.$http.get(`http://10.2.158.246:3000/homeapi/detail?id=${vm.$route.params.detid}`).then(res=>{
                    vm.goods=res.body.data;
                 Indicator.close();
            });
                    
        })
    },     	
    	methods:{
    		 changeBack(){
    		 	  history.go(-1);
    		 },
             up(){
                   this.number++;
             },
             low(){
             	//console.log(1111);
              this.number=Math.max(1,this.number-1)
             },
             addcar(id){
              var _this=this;
               this.$http.post('/upsession').then(res=>{
                    if(res.data=="null"){
                       router.push({name:"loading"})
                    }else{
                       this.uid=res.data.uid;  
                       this.ADDcar(id,_this);
                    }
            });
               
             },
             gocar(){
              router.push({name:"shopcar"})
             },
             ADDcar(id,vm){
                vm.$http.post(URL.obj+'/shopcar/add',{goodsID:id,price:vm.goods.shop_price,bprice:vm.goods.market_price,number:vm.number,goodsname:vm.goods.title,imghash:vm.goods.images[0]}).then(res=>{
                 console.log(res.body)
                 if(res.body=='1'){
                    Toast({
                        message: '加入购物车成功',
                        position: 'bottom',
                        duration: 3000
                });
                 }else{
                     Toast({
                        message: '加入购物车失败',
                        position: 'bottom',
                        duration: 3000
                    });
                 }
                })
             }

    	}
    }

</script>

<style scoped>
			 #detail header{
				 	position:fixed;
				 	top:0;
				 	width:100%;
				 	height:4.9rem;
				 	
				 	display:flex;
				 	background: white;
			    z-index: 998;
			 }
			 #detail header a{
				   padding-left: 10px;
			    font-size: 0.16rem;
			    color: #bc946e;
			    font-weight:bold;
			 }
			 #detail header a span{
				 	display: block;
				 	width:2rem;
				 	height:2rem;
				 	margin-top: 1.5rem;
			  
			 }
		 #detail header p{
		     	font-size:2rem;
			    flex: 1;
			    height:4.9rem;
			    line-height: 4.9rem;	          
		      margin-right:3rem;
		      text-align: center;
		      color: #bc946e;
	     }
     #detail .my-swipe{
	    	  width:100%;
				  height: 30rem;
				  color: #fff;	
				  margin-top:3.6rem;		  
			}
			#detail .my-swipe img{
					width:100%;
					height:auto;
			}
      #detail .sell{
	      	margin-top: 0.5rem;
	      	margin-bottom: 0.5rem;
	      	height:8rem;
	        padding: 0.5rem;
	        background: #fff;
	        
      } 
      #detail .sell h3{
      	   font-size:1.6rem;
      	   font-weight: 400;
      }
      #detail .sell p .shop-price{
      	   font-size: 2.2rem;
      	   color: #e74c3c !important;
      } 
      #detail .sell p .market-price{
      	  text-decoration: line-through;
      }
      #detail .sell .buynumber{    	 
	      	  width:9rem;
	      	  height:3rem;
	      	  position:absolute;
	      	  right:0.1rem;     	  
      }
      #detail .sell .buynumber .left{
	      	  width:2rem;
	      	  height:2rem;
	      	  line-height: 2rem;
	      	  border:1px solid #ccc;
	      	  float:left;
	      	  text-align: center;
      }
      #detail .sell .buynumber .right{
	      	  width:2rem;
	      	  height:2rem;
	      	  line-height: 2rem;
	      	  border:1px solid #ccc;
	      	  float:left;
	      	  text-align: center;
      }
      #detail .sell .buynumber input{
	      	 width:2.5rem;
	      	 height: 2rem;
	      	 float:left;
	      	 text-align: center;
	      	 border:1px solid #ccc;
      }
      #detail .bottom{
      	
      	           
      }
      #detail .bottom .discountInfo{ 
      	    margin-bottom:0.5rem;    	    
      	    padding:1rem 2rem;   
            color:#000;
            font-size: 1.6rem;
            background: white;
      }
      #detail .bottom .share{
	      	font-size: 1.6rem;
	      	padding:1rem 2rem;
	      	background: white;
	      	border-bottom: 1px solid #E5E5E5;
      }
      #detail .bottom .pictruedetail{
	      	font-size: 1.6rem;
	      	padding:1rem 2rem;
	      	background: white;
	      	margin-bottom: 5rem;
      }
      #detail .footer{      	  
      	  height:4.5rem;
      	  line-height: 4.5rem;
      	  background: ;
      	  text-align: center;
      	  position: fixed;
      	  bottom: 0;
      	  z-index: 998;
      }
      #detail .footer .shopcar{
      	  background: #FF9C00;
			    color: #fff;
			    height:100%;
      }
       #detail .footer .buy{
       	  background: #FF3300;
          color: #fff; 
          height:100%;  
       }
</style>
