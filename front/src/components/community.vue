<template>
    <div class="community">
       <keep-alive>
            <router-view></router-view>
       </keep-alive>
       
    </div>

</template>

<script>

import router from "../router"
    export default {
        name:'community',
        data(){
            return{

            }
        }
    }
</script>
<style>


.header2{
        height:4rem;
        line-height:4rem;
        color:#bc9461;
        border-bottom:.1rem solid #ccc;
    }
    .header2 h2{
        text-align:center;
        display:inline-block;
    }
</style>