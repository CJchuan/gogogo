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

@font-face {
  font-family: 'iconfont';
  src: url('../assets/community/icon/iconfont/iconfont.eot');
  src: url('../assets/community/icon/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../assets/community/icon/iconfont/iconfont.woff') format('woff'),
  url('../assets/community/icon/iconfont/iconfont.ttf') format('truetype'),
  url('../assets/community/icon/iconfont/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
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