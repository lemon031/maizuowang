var express = require('express');
var router = express.Router();
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/project';


router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 轮播的接口
// localhost:3000/lunbo
router.get('/lunbo', function (req, res) {
  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口
  // http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
  var time = new Date().getTime();
  http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time, function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})
//首页获取列表
router.get('/now', function (req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  http.get('http://m.maizuo.com/v4/api/film/now-playing?__t=' + time + '&page=1&count=5', function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})
router.get('/coming', function (req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  // http://m.maizuo.com/v4/api/film/coming-soon?__t=1500464814078&page=1&count=3
  http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t=' + time + '&page=1&count=3', function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})
//列表页面
router.get('/now-playing', function (req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  // http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
  http.get('http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7', function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})
router.get('/coming-soon', function (req, res) {
  var page = req.query.page;
  var count = req.query.count;
  var time = new Date().getTime();
  // http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
  http.get('http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7', function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})
//获取详情页
router.get('/film_detail', function (req, res) {
  var time = new Date().getTime();
  var id = req.query.id;
  // http://m.maizuo.com/v4/api/film/3794?__t=1500443309809
  http.get('http://m.maizuo.com/v4/api/film/' + id + '?__t=' + time, function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})

//获取影院地址
router.get('/cinema', function (req, res) {
  var time = new Date().getTime();
  //http://m.maizuo.com/v4/api/cinema?__t=1500545065722
  http.get('http://m.maizuo.com/v4/api/cinema?__t=' + time, function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
})

//登陆注册存储后台
//localhost:8080/login
router.get('/login', function (req, res, next) {
  var name = req.query.name;
  var pwd = req.query.pwd;
  console.log(name);
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      res.send({ msg: '网络异常，请稍后重试' });
    } else {
      console.log()
      var conn = db.collection('users');
      conn.insertOne({ name: name, pwd: pwd }, function (err, info) {
        if (err) {
          res.send({ msg: '注册失败' });
        } else {
          res.send({ msg: '注册成功！买卖网欢迎您' })
        }
        db.close();
      })
    }
  })
});




module.exports = router;
