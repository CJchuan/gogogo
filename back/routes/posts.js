var express = require('express');
var router = express.Router();
var posts= global.dbhandler.getModelByType("posts");

router.get('/read', function(req, res, next) {
    //获取发布过的帖子
    posts.find({

    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});

function Arandom (){
    return Math.random().toFixed(4)*10000;
}
router.get('/write', function(req, res, next) {
    //发布帖子
     posts.find({
            postid:Arandom ()
    },function(error,data){
      if(!error){
        console.log(data);
        if(data.length>0){
             Arandom(); 
        }else{
            var id=Arandom();
             write(id);
        }
      
      }
    })
    function write(id){
         posts.create({
        userid:req.query.userId,
        postid:id,
        name:req.query.username,
        word:req.query.word,
        otime:new Date(),
        imghash:req.query.imgurl,//头像
        imglist:req.query.imgurllist,//插入的图片
        zan:0,
        view:0,
        apply:0
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
    }
   
});
router.get('/zan', function(req, res, next) {
    //zan
    posts.update(
       {postid: req.query.postid}, {$set: {zan: req.query.newzancount}
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});
router.get('/apply', function(req, res, next) {
    //zan
    posts.update(
       {postid: req.query.postid}, {$set: {apply: req.query.newapplycount}}
    ,function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});
router.get('/view', function(req, res, next) {
    //zan
    posts.update(
       {postid: req.query.postid}, {$set: {apply: req.query.newviewcount}}
    ,function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});
module.exports = router;