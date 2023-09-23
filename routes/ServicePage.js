var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/ServicesPage/index', {title : "Services Page"});
  });
  
  module.exports = router;
  