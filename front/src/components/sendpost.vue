<template>
    <div class="sendpost">
      <div class="header2">
            <left></left>
            <h2>发表帖子</h2>
      </div>

    <div class="Writecont" id="writecont">
     <textarea id="content" name="content" style="width:100%;height:20rem;padding:1rem;margin:0;border:0;overflow-y:auto;font-size:1.6rem" placeholder="说点什么吧...(点击加号添加图片，长按图片删除)" v-model="myinput"></textarea>
      <div class="choosePic">
            <span class="add">
                +
            </span>
            添加图片（长按删除图片）
      </div>
    <div class="Picshow">
            <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
      </div>

    </div>
      <mt-button type="primary" @click="sendpost">发表</mt-button>
    </div>
</template>

<script>
import left from "./left.vue";
import router from "../router";
import { Toast } from 'mint-ui';
    export default {
        name:'sendpost',
        data(){
            return{
             userinfo:{
                uid:"",
                uname:'',
                uimg:""
             },
                myinput:"",
                imglist:[]
                
            }
        },
        components:{
                left
        },
          beforeRouteEnter(to,from,next){
        next(vm=>{
          
            vm.$http.post('${vm.URL.url}/upsession').then(res=>{
      
                    if(res.data=="null"){
                       router.push({name:"loading"})
                    }else{
                       vm.userinfo.uid=res.data.uid;
                       vm.userinfo.uname=res.data.nickname;  
                    }
            });
                    
        })
    },
        methods:{
          sendpost(){
          var _this=this;
            this.$http.post(`${_this.URL.url}/posts/write`,{word:_this.myinput,imgurllist:_this.imglist}).then(res=>{
                  console.log(res.body);
                  if(res.body=='1'){
                      Toast({ 
                       message: '发表成功',
                      iconClass: 'icon icon-success'
                      });
                      _this.goback();
                  }
            })
          }
        }
    }
</script>

<style scoped>
 .content{
        height:100%;
    }
    .choosePic{
        background: #f8f8f8;
        position: relative;
        padding: .8rem;
        height:7.2rem;
        line-height:7.2rem;
        font-size:1.6rem;
        color:#999;
    }
    .add{
        display:inline-block;
        width:7.2rem;
        height:7.2rem;
        line-height:7.2rem;
        text-align:center;
        font-size:3.2rem;
  
        border:.1rem solid #aaa;
    }
        .Picshow{
         width:100%;  
         height:8rem;
        overflow-x:scroll; 
        white-space:nowrap;
        }
        .mint-button--normal{
            padding:0 2rem!important;
            left:50%;
            transform:translateX(-50%);
            width:100%;
        }
</style>