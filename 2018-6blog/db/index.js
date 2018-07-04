/**
 * Created by hh on 2018/6/29
 */
var settings = require('../settings');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.connect(settings.dbURL,{useMongoClient: true});
mongoose.model('User',new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    avatar:{type:String,require:true},
}));
mongoose.model('Article',new mongoose.Schema({
    title:{type:String,require:true},
    content:{type:String,require:true},
    createAt:{type:Date,default:Date.now},
    img:{type:String},
    user:{type:ObjectId,ref:'User'}
}));
global.Model = function(type){
    return mongoose.model(type);
}
