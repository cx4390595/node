var express = require('express');
//返回一个路由的实例
var router = express.Router();
var markdown = require('markdown').markdown;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/articles/list/1/2')
});

module.exports = router;
