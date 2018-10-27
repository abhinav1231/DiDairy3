var mongoose = require('mongoose');
var Schema = mongoose.Schema;


studentSchema = new Schema({
	name : {type : String},
	rollnumber : {type : String},
    teachername: {type : String},
    address : { type : String},
});


var student = mongoose.model('student',studentSchema);

module.exports = studentSchema;
module.exports = student;