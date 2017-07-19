var express = require('express');
var router = express.Router();
var http=require('http');


router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 轮播的接口
// localhost:3000/lunbo
router.get('/lunbo', function(req, res) {
  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口
  // http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
  var time = new Date().getTime();
  http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time, function(response) {
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })
    response.on('end', function() {
      res.send(data);
    })
  })
})
//首页获取已更新列表
router.get('/now', function(req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  http.get('http://m.maizuo.com/v4/api/film/now-playing?__t=' + time+'&page=1&count=5', function(response) {
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })
    response.on('end', function() {
      res.send(data);
    })
  })
})
//列表页面已更新的电影
router.get('/film/now-playing', function(req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  // http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
  http.get('http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7', function(response) {
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })
    response.on('end', function() {
      res.send(data);
    })
  })
})
//获取详情页
router.get('/film/', function(req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  var id=req.query.id;
  // http://m.maizuo.com/v4/api/film/3794?__t=1500443309809
  http.get('http://m.maizuo.com/v4/api/film/'+id+'?__t='+time, function(response) {
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })
    response.on('end', function() {
      res.send(data);
    })
  })
})
module.exports = router;
