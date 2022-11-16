var express = require('express');
var path = require('path');
var { Liquid } = require('liquidjs');
var favicon = require('serve-favicon');
var engine = new Liquid();

var indexRouter = require('./routes/index');

var app = express();

app.use(express.static('public/stylesheets'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/favicon.ico', express.static('public/images/favicon.ico'));

// register liquid engine
app.engine('liquid', engine.express()); 
app.set('views', './views');            // specify the views directory
app.set('view engine', 'liquid');       // set liquid to default

module.exports = app;
