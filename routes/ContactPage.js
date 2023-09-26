var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/ContactPage/index', {title : "Contact Me"});
  });
  
  // router.post('/', function(req, res) {
  //   const visitorName = req.body.name;
  //   res.redirect('/');
  // });
module.exports = router;
  