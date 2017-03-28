<template>
        <div class="write" @click="changewrite">
            <i class="iconfont">&#xe6d7;</i> 
        </div>
</template>
<script>
 import router from "../router";
 export default{
  name:"write",
  data(){
   return{

   }
  },
  methods:{
         changewrite(){
                router.push({name:"sendpost"})
         }
  }
 }
</script>
<style scoped>
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
</style>