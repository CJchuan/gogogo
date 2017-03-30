var express = require('express');
var router = express.Router();
var user= global.dbhandler.getModelByType("user");


//下面只能匹配post请求
router.post("/",function(req,res,next){
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