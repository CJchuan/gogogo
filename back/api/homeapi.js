/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();
//首页数据
router.get("/home",function(req,res,next){
    //回调函数
    spider("/api?c=index&a=home",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
router.get("/lists",function(req,res,next){
    //回调函数
    spider("/api?c=goods&a=index&catid=null&title=&order=&orderby=desc&page="+req.query.pageid,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//分类1
router.get("/category1",function(req,res,next){
    //回调函数
    spider("/api?c=data&a=category",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//分类2
router.get("/category2",function(req,res,next){
    //回调函数
    spider("/api?c=index&a=category&pid="+req.query.cateid,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//商品列表综合排序
router.get("/list/def",function(req,res,next){
    //回调函数
    spider("/api?c=goods&a=index&catid="+req.query.id+"&title=&order=&orderby=desc&page=1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//商品列表按销量排序
router.get("/list/hot",function(req,res,next){
    //回调函数
    spider("http://dc.srh9.com/api?c=goods&a=index&catid="+req.query.id+"&title=&order=hot&orderby=desc&page=1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//商品列表按价格排序
router.get("/list/price",function(req,res,next){
    //回调函数
    spider("/api?c=goods&a=index&catid="+req.query.id+"&title=&order=price&orderby=desc&page=1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});

//详情页接口
router.get("/detail",function(req,res,next){
    //回调函数
    spider("/api?c=goods&a=detail&id="+req.query.id,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//帖子
router.get("/posts",function(req,res,next){
    //回调函数
    spider("/api?c=weibo&a=index&order=new&page=1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
router.get("/postdetail",function(req,res,next){
    //回调函数
    spider(`http://dc.srh9.com/api?c=weibo&a=detail&page=${req.query.pagenum}&id=${req.query.postid}`,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
module.exports = router;
