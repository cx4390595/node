/**
 * Created by hh on 2018/6/26
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/cuixiao");
db.connection.on("error",function (error) {
    console.log('数据库连接失败：'+error);
});
db.connection.on("open",function () {
    console.log('数据库连接成功')
});
//集合数据模型定义 定义了字段名和字段类型 默认值
var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
},{
    collection:"abcde",
});
//创建Model 是通过数据库连接创建
var PersonModel = db.model("cx6.27",PersonSchema);

var PersonEntity  = new PersonModel({
    name:"cui",
    age:6,
    email:"350977230@qq.com"
});
console.log(PersonEntity.name);
console.log(PersonEntity.age);
console.log(PersonEntity.time);

//保存到数据库上
/*PersonEntity.save(function (error,doc) {
    if(error){
        console.log('error:'+error);
    }else {
        console.log(require("util").inspect(doc))
    }
});*/

PersonModel.find({},function (error,docs) {
    console.log(docs)
});