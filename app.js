var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')

// Routers
var indexRouter = require('./routes/MainPage');
var aboutRouter = require('./routes/AboutPage');
var serviceRouter = require('./routes/ServicePage');
var projectRouter = require('./routes/ProjectsPage');
var contactRouter = require('./routes/ContactPage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))   // fav icon = tab icon

// Routing
app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectRouter);
app.use('/services', serviceRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var server = app.listen(5000, () => {console.log("Server is now open at http://localhost:5000/");});
