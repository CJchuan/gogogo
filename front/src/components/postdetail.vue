<template>
    <div class="postdetail cont">
            <div class="header2">
                <left></left>
                <h2>帖子详情</h2>
            </div>
            <div class="top">
                    <img src="" alt=""/>
                    <h2>{{data.nickname}}</h2>
                    <p class="sendtime">{{data.ctime}}</p>
                </div>
                <div class="mid">
                    <p class="word">{{data.content}}</p>
            </div>
            <div class="apnum">
                评论{{data.comment}}条
            </div>
            <ul>
                <li v-for="(item,index) in applylist" :key="item.id">
                    <img src="" />
                    <span>{{item.nickname}}</span>
                    <p>{{item.content}}</p>
                    <p>{{item.ctime}}</p>
                    <div>
                        <i class="iconfont">&#xe645;</i>{{item.digg}}
                        <i class="iconfont">&#xe64f;</i>{{item.reply}}
                    </div>
                </li>
            </ul>
        <div class="footer">
            <div class="show">
                <a>
                    <i class="iconfont">&#xe6d7;</i>
                    我要评论
                </a>
                 <i class="iconfont">&#xe645;</i>{{data.digg}}
                <i class="iconfont">&#xe64f;</i>{{data.comment}}
            </div>
        </div>
    </div>
</template>

<script scoped>
import { MessageBox } from 'mint-ui';
import router from "../router" ;
import left from "./left.vue";
    export default {
        name:'postdetail',
        data(){
            return{
                  data:{},
                  applylist:[] 
            }
        },
        mounted(){
            this.$http.get(`http://localhost:3000/homeapi/postdetail?pagenum=1&postid=${this.$route.params.poid}`).then(res=>{
            console.log(res.body.data)
                    this.data=res.body.data;
                    this.applylist=res.body.data.list;
            })
        },
        methods:{
        },
        components:{
          left
        }
    }
</script>

<style>
   .cont{
    overflow:hidden;
}
.cont ul{
    overflow:auto;
    height:100%;
    margin-bottom:1rem;
}
.cont ul li{
     overflow:hidden;
     background:#fff;
     padding:1.5rem;
     margin-top:1rem
}
.footer{
    height:5rem;
}
</style>