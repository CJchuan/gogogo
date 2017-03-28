<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
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
body,html,#app{
  font-size:1.2rem;
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
  display:flex;
  z-index:10;
  background-color:#fff;
  border-top:.1rem solid #ccc;
}
.footer li{
  text-align:center;
  flex:1
}
.footer li i{
   display:block;
   margin-top:1rem
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
@font-face {
  font-family: 'iconfont';
  src: url('./assets/font/iconfont.eot');
  src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/font/iconfont.woff') format('woff'),
  url('./assets/font/iconfont.ttf') format('truetype'),
  url('./assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.cont{
    height:100%!important;
    display:flex;
    flex-direction:column;
}
.wrap{
    overflow-y:scroll;
    flex:1;
    box-sizing:boeder-box;
    margin-bottom:2rem;
}
</style>
