var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('ServicesPage/index');
  });
  
  module.exports = router;
  