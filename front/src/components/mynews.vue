<template>
    <div class="mynews">
        <div class="header2">
           <left></left>
            <h2>回复我的</h2>
        </div>
        <ul>
            <li>
                <div class="top">
                    <img src="" alt=""/>
                    <h3></h3>
                    <p class="sendtime"></p>
                    <mt-button type="primary" size="small">回复</mt-button>
                </div>
                <p class="cont">hahahh</p>
            </li>
            <li>
                <div class="top">
                    <img src="" alt=""/>
                    <h3></h3>
                    <p class="sendtime"></p>
                    <mt-button type="primary" size="small">回复</mt-button>
                </div>
                <p class="cont">hahahh</p>
            </li>
        </ul>
    </div>
</template>

<script>
 import left from "./left.vue";
    export default {
        name:'mynews',
        data(){
            return{

            }
        },
        components:{
          left
        }
    }
</script>

<style scoped>
    li{
        border-bottom:.1rem solid #aaa;
        padding:1rem;
    }
    .top{
        display:flex;
    }
    .top img{
        width:3.8rem;
        height:3.8rem
    }
    .top h3{
     flex:1
    }
    .mt-button{
     margin:auto
    } 
    .cont{
        overflow:hidden;
        font-size:1.6rem;
        margin-top:1rem;
    }
</style>