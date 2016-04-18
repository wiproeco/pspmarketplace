"use strict";
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path_1 = require('path');
var index_1 = require('./routes/index');
var usersRoute_1 = require('./routes/usersRoute');
var uploadtest_1 = require('./routes/uploadtest');
var search_1 = require('./routes/search');
var cookieParser = require('cookie-parser'); // this module doesn't use the ES6 default export yet
var engine = require('ejs-locals');
var app = express();
// view engine setup
app.set('views', path_1.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path_1.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/public/scripts')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/public/stylesheets'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/', index_1.default);
app.use('/users', usersRoute_1.default);
app.use('/upload', uploadtest_1.default);
app.use('/search', search_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error['status'] || 500);
        res.render('error', {
            message: error.message,
            error: error
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error['status'] || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
    return null;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=app.js.map