const express = require('express');
const indexRouter = require('./routes/index');
const dbconnection = require('./bin/dbconnection');

const app = express();

// Middlewares

// DB
dbconnection.dbConnect();

app.use('/', indexRouter);


app.listen(3000);
