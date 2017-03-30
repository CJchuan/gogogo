var express = require('express');
var router = express.Router();
var user= global.dbhandler.getModelByType("user");


//下面只能匹配post请求
router.post("/",function(req,res,next){
    //console.log(req.body); //获取前端post的数据

    //将注册的数据存储到数据库mongodDB

    //查询集合users 有没有这个email & password 对应的数据
    user.update(
    {uid:req.session.userinfo.uid},{$set:{ulogo:req.body.ulogo}},function(error,data){
        if(!error){
            res.send("1");
           }else{
              res.send("0"); 
               }           
           })
});

module.exports = router;