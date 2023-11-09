require('dotenv').config();
const connectionString = "mongodb+srv://sumanthkorada364:sum123@cluster0.qe4of8e.mongodb.net/?retryWrites=true&w=majority"
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose = require('mongoose');
const shoe = require('./models/shoes');
mongoose.connect(connectionString);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoeRouter = require('./routes/shoes');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var ShoesRouter = require('./models/shoes');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shoes', shoeRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/shoes', ShoesRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB() {
  // Delete everything from the shoe model
  await shoe.deleteMany();

  let instance1 = new shoe({ Brand: 'Nike', Ambassador: 'Jordan', price: '$125' });
  instance1.save().then(doc => {
    console.log("First shoe saved");
  }).catch(err => {
    console.error(err);
  });

  let instance2 = new shoe({ Brand: 'Puma', Ambassador: 'Kohli', price: '$135' });
  instance2.save().then(doc => {
    console.log("Second shoe saved");
  }).catch(err => {
    console.error(err);
  });

  let instance3 = new shoe({ Brand: 'Jimmy choo', Ambassador: 'Sumanth', price: '$699' });
  instance3.save().then(doc => {
    console.log("Third shoe saved");
  }).catch(err => {
    console.error(err);
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;
