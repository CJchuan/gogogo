<template>
    <div class="shopcar">
        <div class="header">
                <i class="iconfont">&#xe647;</i>
                <h2>购物车<span(5)</span></h2>
        </div>
       <table width="100%" align="center" cellpadding="0" border-bottom=".1rem solid #ccc" style="border-collapse:collapse; border-spacing:0px 10px;">
            <tr style="border-bottom:.1rem solid #fff">
                <td width="5%">
                    <label class="">
                        <input type="checkbox" class="check" v-model="ischeck"/>
                        <span class="checkshow" v-if="ischeck">√</span>
                    </label>
                </td>
                <td width="20%">
                    <img src=""/>
                </td>
                <td class="detail">
                    <p class="goodname">特好看男装aaaaaaaaaaaaaaaa</p>
                    <p class="desc">描述aaaaaaaaaaaa</p>
                    <p class="price"><span>￥239</span><span class="beforeprice">￥338</span></p>
                </td>
                <td class="count"  width="20%">
                    <a>-</a>
                    <input type="text" value="1"/>
                    <a>+</a>
                </td>
                <td class="del"  width="5%">
                    <a>删除</a>
                </td>
            </tr>
            <tr>
                <td width="5%">
                    <label>
                        <input type="checkbox" class="check" v-model="ischeck"/>
                        <span class="checkshow" v-if="ischeck">√</span>
                    </label>
                </td>
                <td width="20%">
                    <img src=""/>
                </td>
                <td class="detail">
                    <p class="goodname">特好看男装aaaaaaaaaaaaaaaa</p>
                    <p class="desc">描述aaaaaaaaaaaa</p>
                    <p class="price"><span>￥239</span><span class="beforeprice">￥338</span></p>
                </td>
                <td class="count"  width="20%">
                    <a>-</a>
                    <input type="text" value="1"/>
                    <a>+</a>
                </td>
                <td class="del"  width="5%">
                    <a>删除</a>
                </td>
            </tr>
       </table>
       <table class="bot">
            <tr>
                <td width="5%">
                    <label class="">
                        <input type="checkbox" class="check" v-model="ischeck"/>
                        <span class="checkshow" v-if="ischeck">√</span>
                    </label>
                </td>
                <td>全选</td>
                <td>合计：<span class="f30">￥0</span></td>
                <td style="text-align:center;background-color:#f30;color:#fff">结算（0）</td>
            </tr>
       </table>
    </div>
</template>

<script>
    export default {
        name:'shopcar',
        data(){
            return{
                ischeck:true
            }
        }
    }
</script>

<style scoped>
        .header{
        height:4rem;
         line-height:4rem;
        color:#bc946e;
        }
    h2{
        text-align:center;
        height:4rem;
        border-bottom:.1rem solid #ccc;

        display:inline-block
    }
    input[type=checkbox]{
        visibility:hidden;
        width:100%;
        height:100%;
    }
    label{
        display:block;
        background:#fff;
        width:1.5rem;
        height:1.5rem;
        border-radius:50%;
        border:.1rem solid #ccc;
        position:relative;
    }
      label.active{
        background:red;
      }

    img{
     width:6rem;
     height:6rem;
    }
    .count a{
        display:inline-block;
        width:1.5rem;
        height:1rem;
        line-height:1rem;
        border:.1rem solid #ccc;
        text-align:center;
    }
    .count input{
    outline:none;
     width:1.5rem;
     height:1rem;
     text-align:center;
    }
    table{
     background:#eee;
 
    }
    tr{
     border-bottom:.2rem solid #fff;
    }
    .del{
     width:3rem;
    text-align:center;
    }
    .del a{
     display:inline-block;
     width:1.6rem;
     font-size:1.6rem;

    }
    .price{
    color:#f03;
    }
    .detal p{
      width:20rem;
      height:3rem;
      overflow:hidden;
    }
    .desc{
    color:#999;
    }
    .checkshow{
      color:#f00;
      position:absolute;
      top:0rem;
      left:50%;
      transform:translateX(-50%);
      font-size:1.4rem;
      font-weight:bold;
    }
    .bot{
     position:fixed;
     bottom:4rem;
     height:4rem;
     line-height:4rem;
    }
    .bot .checkshow{
     top:-1.2rem;
    }
    .f30{
     color:#f30
    }
    .beforeprice{
     text-decoration:line-through;
     color:#888;
    }
</style>