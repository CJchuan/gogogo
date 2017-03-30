 <template>
  <div id="goodlist" class="list">
    <div class="top">
         <header>
             <span class="iconfont" @click="fanhui">&#xe647;</span>
             <h4>商品列表</h4>
             <span class="iconfont">&#xe67a;</span>
         </header>
        <ul id="classname">
            <li @click="songhe">综合</li>
            <li @click="xiaoliang">销量</li>
            <li @click="jiage">价格</li>
            <li @click="fenlei">分类</li>
        </ul>
    </div>
    <div class="main">
        <ul id="goodname" v-infinite-scroll="loadMore" v-if="isshow"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
            <li v-for="(data,index) in goodlist" @click="changedetail(data.id)">
                <div ><img :src="data.thumb" alt=""></div>
                <div class="right">
                    <p class="one">{{data.title}}</p>
                    <p class="two">￥{{data.shop_price}}</p>
                    <p><span>销量{{data.count_sales}}</span> <span>关注{{data.count_view}}人次</span></p>
                </div>
            </li>
        </ul>
         <ul id="goodname2" v-else>
          <li v-for="(data,index) in classlist">
            <img :src="data.image" alt="">
            <p>{{data.mname}}</p>
          </li>
        </ul>
    </div>   
   
    <!-- <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in goodlist">{{ item }}</li>
</ul>  -->
  </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';

  
    import router from "../router";  
    export default{
       data(){
           return{
                goodlist:[],
                index:1,
                classlist:[],
                isshow:true
           }
       },
       methods:{
            fanhui(){
                history.go(-1)
            },
            xiaoliang(){
                this.$http.get("http://10.2.158.246:3000/homeapi/list/hot").then(res=>{
                // console.log(res.body);
                this.goodlist=res.body.data.list
                },error=>{

                })
            },
            songhe(){
                this.$http.get("http://10.2.158.246:3000/homeapi/list/def").then(res=>{
                // console.log(res.body);
                this.goodlist=res.body.data.list
                },error=>{

                })
            },
            jiage(){
              this.isshow=true;
                this.$http.get("http://10.2.158.246:3000/homeapi/list/price").then(res=>{
                // console.log(res.body);
                this.goodlist=res.body.data.list
                },error=>{

                })
            },
            fenlei(){
                this.$http.get("http://10.2.158.246:3000/homeapi/category1").then(res=>{
                // console.log(res.body);
                this.classlist=res.body.data;
                // loadMore()
                this.goodlist=[];
                this.isshow=false
                },error=>{

                })
            },
            loadMore() {
              this.index++;
              this.loading = true;
               this.$http.get("http://10.2.158.246:3000/homeapi/lists?pageid="+this.index).then(res=>{
                // console.log(res.body);
                 this.goodlist=[...this.goodlist,...res.body.data.list];
                 // this.loading = false;
                },error=>{

                })
           
            },
            changedetail(id){
                router.push({name:"detail",params:{detid:id}});
            }
       },
       mounted(){
        this.$http.get("http://10.2.158.246:3000/homeapi/lists?pageid="+1).then(res=>{
                // console.log(res.body.data.list);
                this.goodlist=res.body.data.list;

        },error=>{

        })
       }

    }
</script>

<style scoped>
.l{
    float: left
}
.r{
    float: right
}
#goodlist{
    height:100%;
    background: #eee;
    display: flex;
    flex-direction: column;
}
.top{
    height:10rem;
    position: fixed;
    top:0;
    left: 0;
    width: 100%
}
.main{
    flex:1;
}
   header{
    height:4.8rem;
    background: #fff;
    display: flex;
    text-align: center;
   /* position: absolute;
    top:0;
    left:0;*/
    color:#bc946e;
    border-bottom: 1px solid #ccc
   }
   header span{
    
    width:4.8rem;
    height:100%;
    line-height: 4.8rem
   }
   header h4{
    flex:1;
    line-height: 4.8rem;
    font-size: 20px
   }
   ul#classname{
    height:4.8rem;
    display: flex;
    margin-bottom: 2rem;
    background: #fff
   }  
   ul#classname li{
    width: 25%;
    height:100%;
    line-height: 4.8rem;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #fff
   }
 
   ul#classname li:hover{
   color:#f00;
   border-color: #f00
   }
    ul#goodname li{
        height:10rem;
        padding:1rem;
        box-sizing: border-box;
        background: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
    }
    ul#goodname li img{
        height: 8rem;
        width:8rem;
    }
    ul#goodname div.right p{
        color:#666;
        font-size: 14px;
        height:2.3rem;
        line-height: 2.3rem;
        padding-left: 1rem
    }
    ul#goodname div.right p.one{
        height:3.5rem;
        overflow:hidden;
        line-height: 1.7rem
    }
     ul#goodname div.right p.two{
        font-size: 16px;
        color:#f00;
     }
     ul#goodname2{
      margin-top: 10rem;
      padding:5%;
      width:100%;
      overflow:auto;
      background: #fff
     }
   ul#goodname2 li{
    width:25%;
    height:6rem;
    float: left;
    text-align: center;
    border:1px solid #ccc;
    margin:2%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   ul#goodname2 li img{
    width:50%;
    height:60%;
   }
   ul#goodname2 li p{
    line-height: 2rem;
    font-size: 16px
   }
</style>
