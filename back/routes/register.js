var express = require('express');
var router = express.Router();
var user= global.dbhandler.getModelByType("user");

//只能匹配get请求
router.get("/",function(req,res,next){
    //req.query 获取前端的get请求的数据
    res.send(res);
})

//下面只能匹配post请求
router.post("/",function(req,res,next){
    //console.log(req.body); //获取前端post的数据

    //将注册的数据存储到数据库mongodDB

    //插入文档到users 集合
    user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    },function(err,data){
        if(!err){
            res.redirect("/login");
            //当注册成功，就跳转到登录页面
        }
    })
});

module.exports = router;