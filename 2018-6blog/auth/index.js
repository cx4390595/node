/**
 * Created by hh on 2018/7/2
 */
//检查必须登陆,不登陆就跳到登陆页
exports.mustLogin = function (req,res,next) {
    if(req.session.user){
        next()
    }else {
        req.flash('error','你尚未登陆,请登录')
        res.redirect('/user/login')
    }
};
//检查必须没有登陆,已经登陆就跳到首页
exports.mustNotLogin = function (req,res,next) {
    if(req.session.user){
        req.flash('error','你已经登陆');
        res.redirect('/')
    }else {
        next();
    }
};