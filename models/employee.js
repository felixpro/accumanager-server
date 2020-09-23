var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: {type: String, max: 50, required: true},
    age: {type: Number, required: true},
    position: {type: String, required: true},
    supervisor: {type: String, required: true},
    schedule: {type: String, required: true},
    time : String,
},{ timestamps: { createdAt: 'created_at' } });



module.exports = mongoose.model('Employee', employeeSchema);
