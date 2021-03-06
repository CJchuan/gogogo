var express = require('express');
var router = express.Router();
var shopcar= global.dbhandler.getModelByType("shopcar");
var moment = require('moment');
router.post("/add",function(req,res,next){
    //req.query 获取前端的get请求的数据
     console.log(req.session.userinfo)
    shopcar.create({
        uid:req.session.userinfo.uid,
        num:req.body.number,
        price:req.body.price,
        bprice:req.body.bprice,
        goodsID:req.body.goodsID,
        goodsName:req.body.goodsname,
        imghash:req.body.imghash,
        ctime:moment().format('X'),
        otime:moment().format('YYYY-MM-DD HH:mm:ss')
    },function(error,data){
      if(!error){
        console.log(data);
        res.send('1');
      }else{
        res.send('0')
      }
    })
});
router.post("/read",function(req,res,next){
    //req.query 获取前端的get请求的数据
    //读取购物车
    shopcar.find({
        uid:req.session.userinfo.uid
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});
router.get("/del",function(req,res,next){
    //req.query 获取前端的get请求的数据
    //删除某一物品
    shopcar.remove({
        goodsID:req.query.goodsid,
        uid:req.query.userid
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});


module.exports = router;