var express = require('express');
var router = express.Router();
var user= global.dbhandler.getModelByType("user");


//下面只能匹配post请求
router.post("/",function(req,res,next){
    //console.log(req.body); //获取前端post的数据

    //将注册的数据存储到数据库mongodDB

    //查询集合users 有没有这个email & password 对应的数据
    user.find({
        name:req.body.username,
        password:req.body.password
    },function(error,data){
        if(!error){
            //data 就是匹配到所有数据
            console.log(data);
           if(data.length==0){
               //用户名密码输入错误
               res.render("login",{title:"登录页面",isShowError:true});
           }else{
               //设置sessionID 为有效id
               req.session.kerwinuser= data[0];
               //用户名密码输入正确
               res.redirect("/home");
           }
        }
    })
});

module.exports = router;