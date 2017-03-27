<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <ul class="footer">
        <router-link to="/home" tag="li" active-class="Acitive">鼎城商城</router-link>
        <router-link to="/classify" tag="li" active-class="Acitive">分类</router-link>
        <router-link to="/shopcar" tag="li" active-class="Acitive">购物车</router-link>
         <router-link to="/community" tag="li" active-class="Acitive">社区</router-link>
        <router-link to="/mine" tag="li" active-class="Acitive">我的</router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0
}
body,html{
  font-size:1.2rem;
  overflow:auto;
  height:100%;
}
ul,li{
  list-style:none
}
.footer{
  position:fixed;
  bottom:0;
  width:100%;
  height:4rem;
  line-height:4rem;
  display:flex;
  z-index:10;
  background-color:#fff;
}
.footer li{
  text-align:center;
  flex:1
}
.l{
  float:left
}
.r{
   float:right
}
.co-white{
  color:#fff
}
.Acitive{
           color:#0089dc;
         
        }

</style>
