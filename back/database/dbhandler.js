var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var userobj = {
    nickname:String,
    password:String
}
//创建user模型，基于这个模型就会创建users集合
mongoose.model("user",new Schema(userobj));

var postsobj = {
        postid:Number,//帖子ID
        uid:Number,//帖子主人ID
        nickname:String,//帖子主人昵称
        content:String,//帖子内容
        ctime:String,//发帖时间
        avatar:String,//头像图片地址
        attachs:Array,//帖子插入的图片
        digg:Number,//赞数量
        view:Number,//查看数量
        apply:Number,//回复数量
        list:Array//评论列表
}
//创建article模型，基于这个模型就会创建articles集合
mongoose.model("posts",new Schema(postsobj));


module.exports = {
    getModelByType:function(type){
        return mongoose.model(type);
    }
}