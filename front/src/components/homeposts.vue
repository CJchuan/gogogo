<template>
<div id="homeposts">
        <ul class='header' @click="changePage">
            <li data-id="0">
               <div data-id="0"> 
                    <i class="c7ce3e3 iconfont" data-id="0">&#xe678;</i>
                    <p data-id="0">最新帖子</p>
                </div>
            </li>
            <li data-id="1">
                <div data-id="1">
                    <i class="fc4b4b iconfont" data-id="1">&#xe738;</i>
                    <p data-id="1">最热帖子</p>
                </div>
            </li >
            <li data-id="2">
                <div data-id="2">
                    <i class="fa9529 iconfont" data-id="2">&#xe615;</i>
                    <span class="num" data-id="2">22</span>
                    <p data-id="2">我的消息</p>
                </div>
            </li>
        </ul>
    <div class="homeposts cont" id="homeposts">
            <poststemp></poststemp>
    </div>
        <div class="write" @click="changewrite">
            <i class="iconfont">&#xe6d7;</i> 
        </div>
     <ul class="footer">
        <router-link to="/home" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe608;</i>
        <p>鼎城商城</p></router-link>
        <router-link to="/classify" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe612;</i>分类</router-link>
        <router-link to="/shopcar" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe606;</i>购物车</router-link>
         <router-link to="/community" tag="li" active-class="Acitive">
         <i class="iconfont">&#xe68d;</i>
         社区</router-link>
        <router-link to="/mine" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe68e;</i>
        我的</router-link>

    </ul>
</div>
</template>

<script>
    import router from "../router"
    import poststemp from "./poststemp.vue";
    export default {
        name:'homeposts',
        data(){
            return{

            }
        },
        components:{
            poststemp
        },
         methods:{
         changePage(ev){
         console.log(ev.target.dataset.id)
            if(ev.target.dataset.id==2){
                router.push({name:"mynews"})
            }else{
                router.push({name:"postslist",pageid:ev.target.dataset.id})
            }
         },
         changewrite(){
                router.push({name:"sendpost"})
         }
        }
    }
</script>

<style>
.homeposts{
    background:#eee;
    height:100%;
}
.header{
    height:8.2rem;
    display:flex;
  
}
.header li{
    flex:1;
    text-align:center;
    display:flex;
}
.header li i{
    display:block;
    width:4.6rem;
    height:4.6rem;
    text-align:center;
    line-height:4.6rem;
    border-radius:50%;
    font-size:3rem;
    color:#fff;
 
    }
    .header li>div{
        margin:auto;
        position:relative
    }
    .num{
        position:absolute;
        top:3rem;
        right:.5rem;
        color:#f00;
        display:inline-block;

    }
.c7ce3e3{
    background-color:#7ce3e3
}
.fc4b4b{
    background-color:#fc4b4b
}
.fa9529{
    background-color:#fa9529
}
.write{
    position:fixed;
    right:0;
    bottom:5rem;
    width:4rem;
    height:4rem;
}
.write i{
    font-size:3.2rem;
    color:red;
}
.cont{
    overflow:hidden;
}
.cont ul{
    overflow:hidden;
}
.cont ul li{
     overflow:hidden;
     background:#fff;
     padding:1.5rem;
     margin-top:1rem
}
 .bot{
    display:flex
    }
    .top{
    display:flex;
    height:3.8rem;
    line-height:3.8rem
    }
    .top img{
    width:3.8rem;
    height:3.8rem;
    }
    .top h2{
        flex:1;
        color:#fa0;
        margin-left:1rem;
        font-weight:100;
    }
    .top p{
    width:10.2rem;
    }
    .bot>div{
        flex:1;
        box-sizing:border-box;
        border-left:1px solid #999;
        text-align:center;
        height:2.6rem;
        line-height:2.6
    }
    .bot>div:first-child{
    border-left:0
    }
    .word{
    padding:1rem 0;
    font-size:1.5rem
    }
</style>