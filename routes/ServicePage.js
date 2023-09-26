var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var slides = [
    { path: '/Image/unity.png', title: "2D Game Development", desc: "Develop 2D game demos based on your ideas or implement a specific features for you"},
    { path: '/Image/web_dev.png', title: "Simple website development", desc: "Develop simple website structure using NodeJS (No backend support)"},
    { path: '/Image/blender.png', title: "Create 3D models", desc: "Create a simple 3D model characters for your game"}
  ];
    res.render('pages/ServicesPage/index', {title : "Services Page", slides: slides});
  });
  
  module.exports = router;
  