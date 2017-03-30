<template>

    <div class='cont'>
    	<div class="head" id="log">
    		<div class="face" @click="changelogo">
    			<img id="avatar" :src="require('../assets/images/em.gif')" v-if="nossion" />
    			<img id="avatar" :src="uinfo.ulogo"  v-else />
    		</div>
    		<div class="info">
	            <h3 id="nickname" v-if="nossion">登录鼎城商城</h3>
	            <h3 id="nickname" v-else>欢迎回来，{{uinfo.nickname}}</h3>
	            <p id="info">
	            	<button class="aui-btn aui-btn-danger" style="padding-bottom:3px" @click="changepage" v-if="nossion">点击登录或注册</button>
	            	<button class="aui-btn aui-btn-danger" style="padding-bottom:3px" @click="exit" v-else>退出当前登录</button> 	
	            </p>
	        </div>

    	</div>

    	<div class="aui-content grid3">
    		<ul class="aui-grid-nine">
    			<li class=" aui-text-center">
    				<span class="aui-icon  aui-text-warning"><i class="iconfont">&#xe6cb;</i></span>
    				<p id="money">余额0￥</p>
    			</li>
    			<li class="aui-text-center">
    				<span class="aui-icon aui-text-primary"><i class="iconfont">&#xe68c;</i></span>
    				<p id="money">惠民币0</p>
    			</li>
    			<li class="aui-text-center">
    				<span class="aui-icon aui-text-danger "><i class="iconfont">&#xe629;</i></span>
    				<p id="money">红包0个</p>
    			</li>
    		</ul>
    	</div>
    	<ul class="aui-list-view">
    		<li class="aui-list-view-cell">
	            <a class="aui-arrow-right" >
	                <span><i class="iconfont">&#xe60b;</i>订单记录</span>
	                <span class="aui-badge aui-badge-danger" id="count_order">0</span>
	               
	            </a>
	        </li>
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right" >
	                <span><i class="iconfont">&#xe61f;</i>我的收藏</span>
	               
	            </a>
	        </li>
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right"   @click="changead">
	                <i class="iconfont">&#xe67c;</i>收货地址  <!-- aui-icon --> 
	               
	            </a>
	        </li>
    	</ul>
    	<ul class="aui-list-view">
    		<li class="aui-list-view-cell">
	            <a class="aui-arrow-right">
	                <i class="iconfont">&#x3433;</i>我的二维码
	                <span class="aui-badge aui-badge-primary aui-con" id="count_order">0</span>
	              
	            </a>
	        </li>
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right">
	                <i class="iconfont">&#xe61d;</i>鼎城商城客服
	               
	            </a>
	        </li> 
    	</ul>
    	<ul class="aui-list-view" style="margin-bottom:60px;">
	        <li class="aui-list-view-cell">
	            <a class="aui-arrow-right"><i class="iconfont">&#xe607;</i>关于鼎城商城</a>
	        </li>
	    </ul>
	    <mt-actionsheet
  			:actions="actions"
  			v-model="sheetVisible">
		</mt-actionsheet>
	    </div>
	</template>



    <script>

    	import URL from "../url";
    import { MessageBox } from 'mint-ui';
    import { Actionsheet } from 'mint-ui';
    import router from "../router";
	export default {
	  name: 'mypro',
	  data () {
	    return {
	       categorylist:[],
	       goodslist:[],
	       currentIndex:0,
	       isShow:true,
	       nossion:true,
	       uinfo:{},
	       sheetVisible:false,
	       actions:[]
	    }
	  },
	   beforeRouteEnter(to,from,next){
        next(vm=>{
          
            vm.$http.post(`${URL.obj}/upsession`).then(res=>{
            console.log(res)
                    if(res.data=="null"){
                       vm.nossion=true
                    }else{
                    console.log(res.body)
                      vm.nossion=false;
                      vm.uinfo=res.data;
                    }
            });
                    
        })
    },
	  methods:{

	  	changepage(){
  			router.push({name:"loading"})
  		},
  		changead(){
  			router.push({name:"myaddress"});
  		},
  		camera(){
  			var _this=this;
  			// 扩展API加载完毕后调用onPlusReady回调函数 
				document.addEventListener( "plusready", onPlusReady, false );
			// 扩展API加载完毕，现在可以正常调用扩展API 
				function onPlusReady() {
				console.log("plusready");
			}
			// 拍照
			function captureImage(){
			var cmr = plus.camera.getCamera();
			var res = cmr.supportedImageResolutions[0];
			var fmt = cmr.supportedImageFormats[0];
			console.log("Resolution: "+res+", Format: "+fmt);
			cmr.captureImage( function( path ){
			alert( "Capture image success: " + path ); 
		 	    _this.uinfo.ulogo=path; 
    			_this.$http.post(URL.obj+"/ulogo",{ulogo:path}).then(res=>{
    			  console.log(res.body)
    			
		},
		function( error ) {
			alert( "Capture image failed: " + error.message );
		},
		{resolution:res,format:fmt}
	);
})
  		}
  		},
  		photos(){
  		var _this=this;
  				// 扩展API加载完毕后调用onPlusReady回调函数 
				document.addEventListener( "plusready", onPlusReady, false );
				// 扩展API加载完毕，现在可以正常调用扩展API 
				function onPlusReady() {
				}
			// 从相册中选择图片 
				function galleryImg() {
				// 从相册中选择图片
				console.log("从相册中选择图片:");
    			plus.gallery.pick( function(path){
    			_this.uinfo.ulogo=path; 
    			_this.$http.post(URL.obj+"/ulogo",{ulogo:path}).then(res=>{
    			  console.log(res.body)
    			})
    		}, function ( e ) {
    		console.log( "取消选择图片" );
    	}, {filter:"image"} );
	}
  		},
  		changelogo(){
  		var _this=this;
  		this.sheetVisible=true;
  		this.actions=[{name:"拍照",method:function(){
  		     _this.camera();
  		}},{name:"从相册中选择",method:function(){
  		   _this.photos();
  		}}]
  		},
  		exit(){
  		 MessageBox({
  			title: '提示',
  			message: '确定退出吗?',
  			showCancelButton: true
			});
			MessageBox.confirm('确定执行此操作?').then(action => {
  			this.changepage();
		});
  		  
  		}


	  }
	}


    </script>



    <style scoped>
  
	p {
	    margin-top: 0;
	    margin-bottom: 0;
	    font-size: 1.4rem;
	    color: #8f8f94;
	}
    
	body {
		position: relative;
	    background-color: #f2f2f2;
	    color: #555;
	    max-width: 60rem;
	    margin: 0 auto;
	    width:100%;
	}

	.head {
	    background: #fff;
	    height: 9rem;
	    margin-bottom: 0;
	    position: relative;
	    top: 0rem;
	    width: 100%;
	    color: #333;
	    border-bottom: 0.1rem solid #f2f2f2;
	}

	.head .face {
	    float: left;
	    width: 6.8rem;
	    margin: 1.3rem 1rem 0;
	}

	.head .face img {
	    width: 6.8rem;
	    height: 6.8rem;
	    border-radius: 3.8rem;
	    border:0;
	}

	.head .info {
	    padding-top: 2.2rem;
	}

	.head .info h3 {
	    font-size: 1.6rem;
	    font-weight: 400;
	}

	.head .info p {
	    font-size: 1.4rem;
	    color: #666;
	    margin-top: 0.5rem;
	}

	.aui-btn-danger {
	    color: #ffffff;
	    background-color: #e74c3c;
	    border: 0.1rem solid #e74c3c;
	}
	button, .aui-btn {
	    position: relative;
	    display: inline-block;
	    padding: 0.6rem 1.2rem;
	    margin-bottom: 0;
	    font-size: 1.4rem;
	    font-weight: 400;
	    line-height: 1.42857143;
	    text-align: center;
/*	    background-color: #ecf0f1;
*/	    white-space: nowrap;
	    vertical-align: middle;
	    /*-ms-touch-action: manipulation;
	    touch-action: manipulation;*/
	    cursor: pointer;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    border: 0.1rem solid #ecf0f1;
	    border-radius: 0.4rem;
	}

	.head .righticon {
	    position: absolute;
	    top: 2rem;
	    right: 1rem;
	    font-size: 2.8rem;
	    color: #888;
	    z-index: 99;
	}

	.aui-content {
	    margin-bottom: 1rem;
	    width:100%;
	}

	.aui-grid-nine {
	    overflow: auto;
	    background: #ffffff;
	    position: relative;
	    width:100%;
	}

	.grid3 .aui-grid-nine li {
	    padding: 0.8rem 1rem;
	    width: 33.333333%;
	}
	.aui-grid-nine li {
	    float: left;
	    position: relative;
	    padding: 2rem 1rem;
	    
	}
	

	.aui-text-center {
	    text-align: center !important;

	}

	.aui-grid-nine li .aui-icon {
	    font-size: 2.8rem;
	    display: inline-block;
	    text-indent: center;
	    margin-bottom: 0.5rem;
	}
	.aui-grid-nine li{
	    border-left: 0.1rem solid #f2f2f2;
	    border-bottom: 0.1rem solid #e2e2e2;
	    box-sizing: border-box;
	}
	.aui-text-warning {
	    color: #f1c40f !important;
	}
	.aui-text-primary {
	    color: #1abc9c !important;
	}
	.aui-text-danger {
	    color: #e74c3c !important;
	}

	.aui-list-view {
	    margin-bottom: 1rem;
	    background:#aaa;
	}
	.aui-list-view {
	    position: relative;
	    padding-left: 0;
	    margin-top: 0;
	    margin-bottom: 1.5rem;
	    list-style: none;
	    background-color: #fff;
	    font-size:1.6rem;
	}
	.aui-list-view-cell {
	    padding: 1rem 1.2rem;

	}
	.aui-list-view-cell > a {
	    position: relative;
	    padding: inherit;
	    margin: -1rem -1rem;
	    display: block;
	    overflow: hidden;
	    color: inherit;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	      border-bottom:.1rem solid #ccc;
	}
	/*.aui-list-view-cell > a {
	    margin: -1rem -1.5rem;
	    border-bottom: 0.1rem solid #f2f2f2;
	}*/
	
	a {
	    color: #0062cc;
	    text-decoration: none; 
	    background-color: transparent;
	}
	.aui-list-view i.aui-icon {
	    border-radius: 3rem;
	    color: #666;
	    margin-right: 0.5rem;
	    font-size: 2rem;
	    padding: 0;
	}
	
	.aui-badge {
	    display: inline-block;
	    padding: 0.3rem 0.6rem;
	    font-size: 1.2rem;
	    line-height: 1;
	    color: #333;
	    background-color: #bdc3c7;
	    border-radius: 10rem;
	    margin-left: 22rem;
	}
	.aui-badge-danger {
	    color: #ffffff;
	    background-color: #e74c3c;
	}
	.aui{
		float:right;
	}
	.aui-badge-primary {
	    color: #ffffff;
	    background-color: #1abc9c;
	}
	.aui-con{
		margin-left:21rem;
	}
	.aui-o{
		float:right;
	}
	.aui-list-view-cell > a.aui-arrow-right > .aui-badge, .aui-list-view-cell > div.aui-arrow-right > .aui-badge {
	    position: absolute;
	    top: 50%;
	    right: 3rem;
	    -webkit-transform: translateY(-50%);
	    transform: translateY(-50%);
	}

	.iconn{
		float:right;
	}

	.aui-grid-nine li .aui-icon i{
		font-size:3rem;
	}
	

    </style>
