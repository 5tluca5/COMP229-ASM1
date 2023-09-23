var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/ProjectsPage/index', {title : "Projects Page"});
  });
  
  module.exports = router;
  