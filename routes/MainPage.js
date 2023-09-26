var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const visitorName = req.body.name;
  res.render('pages/MainPage/index', {title : "My Portfolio", visitor: visitorName });
});

module.exports = router;
