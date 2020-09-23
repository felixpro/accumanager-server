var mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });



exports.dbConnect = function () {
  var mongoDB = process.env.DB_MONGO
  mongoose.connect (mongoDB, { useNewUrlParser: true }, function(err) {
    if (err) {
      console.log("Error when connection to DB")
    }else {
      console.log("db working perfect")

    }
  });
};


exports.dbDisconnect = function () {
  mongoose.disconnect();
};
