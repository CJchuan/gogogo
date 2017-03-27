<template>
    <div class="postslist">
        <div class="header2">
           <left></left>
            <h2>帖子列表</h2>
        </div>
        <poststemp></poststemp>
    </div>
</template>

<script>
import left from "./left.vue";
import poststemp from "./poststemp.vue";
    export default {
        name:'postslist',
        data(){
            return{
                
            }
        },
        components:{
            poststemp,
            left
        }
        
    }
</script>

<style>
    
</style>