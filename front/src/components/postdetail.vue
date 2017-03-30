<template>
    <div class="postdetail cont">
            <div class="header2">
                <left></left>
                <h2>帖子详情</h2>
            </div>
            <div class="wrap">
            <div class="top">
                    <img :src="data.avatar" alt="" v-if="data.avatar!=''"/>
                    <div class="name"> 
                        <h3>{{data.nickname}}</h3>
                        <span>浏览：{{data.view}}</span>
                    </div>
                    <p class="sendtime">{{data.otime}}</p>
                </div>
                <div class="mid">
                    <p class="word">{{data.content}}</p>
            </div>
            <div class="comment">
                <h4>评论{{data.apply}}条</h4>
            </div>
            <ul>
                <li v-for="(item,index) in applylist" :key="item.id">
                    <img :src="item.avatar" alt="" v-if="item.avatar!=''" class="l"/>
                    <img src="../assets/images/em.gif" alt="" v-else  class="l"/>
                    <div>
                    <h5>{{item.uname}}</h5>
                    <p class="content">{{item.content}}</p>
                    <p class="libot">
                        <span>{{item.otime}}</span> 
                        <a>                       
                            <i class="iconfont">&#xe645;</i>{{item.digg}}
                            <i class="iconfont">&#xe64f;</i>{{item.reply}}
                        </a>
                    </p>
                    </div>
                </li>
            </ul>
         </div>
        <div class="footer">
            <div class="continfo" v-if="changebtn">
                <a @click="clickchange">
                    <i class="iconfont">&#xe6d7;</i>
                    我要评论
                </a>
                 <i class="iconfont" >&#xe645;</i>{{data.digg}}
                <i class="iconfont">&#xe64f;</i>{{data.comment}}
            </div>
            <div class="applycontent" v-else>
               <input type="text"  v-model="myapply"/>
               <mt-button type="danger" size="small" @click="sendapply">发送</mt-button>
            </div>
        </div>
       
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import router from "../router" ;
import left from "./left.vue";
import * as moment from 'moment';
    export default {
        name:'postdetail',
        data(){
            return{
                  data:{},
                  applylist:[],
                  changebtn:true,
                  myapply:""
            }
        },
         beforeRouteEnter(to,from,next){
        next(vm=>{
            Indicator.open();
            vm.$http.get(`/posts/detail?postid=${vm.$route.params.poid}`).then(res=>{
               console.log(res.body)
                    vm.data=res.body[0];
                    vm.applylist=res.body[0].list;
                 Indicator.close();
            });
                    
        })
    }, 
        methods:{
        clickchange(){
          this.changebtn=false;
        },
        sendapply(){
         console.log(this)
            var _this=this;
            console.log(_this.applylist)
              _this.$http.post('/upsession').then(res=>{
                    if(res.data=="null"){
                       MessageBox({
                        title: '提示',
                        message: '您还没有登录！',
                        showCancelButton: true,
                        confirmButtonText:"去登录",
                        cancelButtonText:"暂不评论"
                    });
                    MessageBox.confirm('去登录').then(action => {
                        router.push({name:"loading"})
                    });
                    }else{
                    console.log(res.data)
                      var id=res.data.uid;
                      var name=res.data.nickname;
                      var avat=res.data.ulogo;
                    _this.data.apply++;
                    _this.applylist.push({
                        uid:id,
                        uname:name,
                        avatar:avat,
                        content:_this.myapply,
                        ctime:moment().format('X'),
                        otime:moment().format('YYYY-MM-DD HH:mm:ss')  
                    });
                      var newapplylist=JSON.stringify(_this.applylist);
                      var newapply=encodeURIComponent(newapplylist);
                      console.log(newapplylist)
                      _this.$http.get(`/posts/apply?newapplycount=${_this.data.apply}&newlist=${newapplylist}`).then(res=>{
                        console.log(res.body)
                      })
              
                    }
            });
        }
        },
        components:{
          left
        }
    }
</script>

<style scoped>
.top{
     display:flex;
     background-color:#ccc;
     padding:1rem;
}
.name{
    flex:1;
    margin-left:1rem;
}
img{
    width:3.8rem;
    height:3.8rem;
}
.top h3{
    color:#f70;
    margin-bottom:1rem;
}

.footer{
    height:5rem;
}
.mid .word{
     font-size:1.6rem;
     line-height:2rem;
     color:#555;
     padding:1rem;
}
.comment{
        padding:1rem 0;
        background-color:#ccc;
}
h4{
    height:3rem;
    line-height:3rem;
    font-size:1.8rem;
    background-color:#fff;
    text-indent:1rem;
    font-weight:100;
}

li{
    border-bottom:.1rem solid #aaa;
  
    overflow:hidden;
    padding:1rem;
    display:flex;
}
li>div{
    flex:1
}
h5{
    font-size:1.5rem;
    font-weight:100;
    height:2.2rem;
    line-height:2.2rem;
}
li p{
    text-indent:3rem;
    width:100%;
    overflow:hidden;
    margin-top:.5rem;
} 
.content{
      font-size:1.5rem;
}
i{
    margin-right:0
}
.libot{
    display:flex;
    font-size:1.3rem;
    color:#777;
}
.libot span{
    flex:1
}
.libot a{
    display:block;
    margin-right:1rem;
}
.footer>div{
     display:flex;
     width:100%;
     padding:1rem;
     box-sizing:border-box;
}
.applycontent input{
   flex:4;
   height:3rem;
   border:.1rem solid #aaa;
}
.applycontent button{
    flex:1;
    margin-left:1rem
}
</style>