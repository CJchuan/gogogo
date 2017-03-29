<template>
    <div class="community">
  
            <router-view></router-view>

       
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
        display:flex;
    }
    .header2 h2{
        text-align:center;
        font-weight:100;
        flex:1;
    }
.community{
    height:100%;
    overflow:hidden;
}
</style>