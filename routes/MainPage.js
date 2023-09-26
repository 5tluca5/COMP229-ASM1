var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const storedVisitorName = localStorage.getItem('visitorName');
  res.render('pages/MainPage/index', {title : "My Portfolio", visitor: storedVisitorName});
});

module.exports = router;
