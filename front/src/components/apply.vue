<template>
    <div class="applay">
      <div class="header2">
            <i class="iconfont">&#xe647;</i>
            <h2>回复帖子</h2>
      </div>
      <Writecont></Writecont>
        <mt-button type="primary">回复</mt-button>
    </div>
</template>

<script>
import Writecont from "./Writecont.vue";
    export default {
        name:'applay',
        data(){
            return{

            }
        },
        components:{
                Writecont
        }
    }
</script>

<style scoped>

</style>