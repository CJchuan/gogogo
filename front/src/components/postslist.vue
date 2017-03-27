<template>
    <div class="postslist">
        <div class="header2">
           <i class="iconfont">&#xe647;</i>
            <h2>帖子列表</h2>
        </div>
        <poststemp></poststemp>
    </div>
</template>

<script>
import poststemp from "./poststemp.vue";
    export default {
        name:'postslist',
        data(){
            return{
                
            }
        },
        components:{
            poststemp
        }
        
    }
</script>

<style>
    
</style>