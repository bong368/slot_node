var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send(path.join(__dirname + '/../views/' ,'index.html'));
  res.sendFile(path.join(__dirname, '/../views/', 'index.html'));
  //res.render('index', { title: 'Express' });
});

module.exports = router;