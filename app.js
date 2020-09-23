const express = require('express');
const indexRouter = require('./routes/index');
const dbconnection = require('./bin/dbconnection');
var bodyParser = require('body-parser');


const app = express();

// Middlewares


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', indexRouter);

// DB
dbconnection.dbConnect();



app.listen(3000);
