const express = require('express');
const indexRouter = require('./routes/index');
const dbconnection = require('./bin/dbconnection');
var bodyParser = require('body-parser');
var cors = require('cors')

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', indexRouter);

// DB
dbconnection.dbConnect();



// puerto de la app
var port=Number(process.env.PORT || 4000);


// arrancar la app
app.listen(port,() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
