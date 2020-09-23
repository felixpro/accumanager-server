var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    name: {type: String, max: 50, required: true},
    time : String,
    employee: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
},{ timestamps: { createdAt: 'created_at' } });



module.exports = mongoose.model('Department', departmentSchema);
