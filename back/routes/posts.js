var express = require('express');
var router = express.Router();
var posts= global.dbhandler.getModelByType("posts");
var moment = require('moment');
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

router.post('/write', function(req, res, next) {
    //发布帖子
      posts.create({
        uid:req.session.userinfo.uid,
        nickname:req.session.userinfo.nickname,
        content:req.body.word,
        ctime:moment().format('X'), //时间戳
        otime:moment().format('YYYY-MM-DD HH:mm:ss'),//格式化后的时间
        avatar:req.session.userinfo.ulogo,//头像
        attachs:req.body.imgurllist,//插入的图片
        digg:0,//点赞数
        view:0, //查看人数
        apply:0, //回复数量
        list:[] //评论列表
    },function(error,data){
      if(!error){
        res.send('1');
      }else{
        res.send('0')
      }
    })
   
});
router.get('/digg', function(req, res, next) {
    //赞帖子
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
        res.send(1);
      }
    })
});
module.exports = router;