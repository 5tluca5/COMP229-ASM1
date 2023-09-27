var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var visitorName = req.body.name;
  // const visitorName = "get";
  res.render('pages/MainPage/index', {title : "My Portfolio", visitor: visitorName });
});

router.post('/home', function(req, res) {
  var visitorName = req.body.name;
  // const visitorName = "post";
  res.render('pages/MainPage/index', {title : "My Portfolio", visitor: visitorName });
});

module.exports = router;
