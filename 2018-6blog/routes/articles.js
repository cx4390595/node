/**
 * Created by hh on 2018/6/27
 */
var express = require('express');
var router = express.Router();

router.get('/add',function (req,res,next) {
    res.render('article/add',{title:'发表文章'});
});

router.post('/add',function (req,res,next) {
    res.redirect('/')
});

module.exports = router;