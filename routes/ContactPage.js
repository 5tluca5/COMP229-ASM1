var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/ContactPage/index', {title : "Contact Me"});
  });
  
  module.exports = router;
  