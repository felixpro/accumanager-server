var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var themeSchema = new Schema({
    name: {type: String required: true},
    time : String,
},{ timestamps: { createdAt: 'created_at' } });



module.exports = mongoose.model('Theme', themeSchema);
