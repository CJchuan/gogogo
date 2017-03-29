
<template>

</template>

<script scoped>

    export default {
        name:'Writecont',
        data(){
            return{
                myinpput:"",
                imglist:""
            }
        }
    }
</script>

<style>
      .content{
        height:100%;
    }
    .choosePic{
        background: #f8f8f8;
        position: relative;
        padding: .8rem;
        height:7.2rem;
        line-height:7.2rem;
        font-size:1.6rem;
        color:#999;
    }
    .add{
        display:inline-block;
        width:7.2rem;
        height:7.2rem;
        line-height:7.2rem;
        text-align:center;
        font-size:3.2rem;
  
        border:.1rem solid #aaa;
    }
        .Picshow{
         width:100%;  
         height:8rem;
        overflow-x:scroll; 
        white-space:nowrap;
        }
        .mint-button--normal{
            padding:0 2rem!important;
            left:50%;
            transform:translateX(-50%);
            width:100%;
        }
</style>