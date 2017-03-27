var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var userobj = {
    name:String,
    password:String
}
//创建user模型，基于这个模型就会创建users集合
mongoose.model("user",new Schema(userobj));

var postsobj = {
        postid:Number,
        name:String,
        word:String,
        otime:String,
        imghash:String,//头像
        imglist:Array,//插入的图片
        zan:Number,
        view:Number,
        apply:Number
}
//创建article模型，基于这个模型就会创建articles集合
mongoose.model("posts",new Schema(postsobj));


module.exports = {
    getModelByType:function(type){
        return mongoose.model(type);
    }
}