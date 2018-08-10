var mongoose = require('mongoose');
var Schema = mongoose.Schema;



 teacherSchema = new Schema({
    name: {type : String,select : false},
    email: {type : String},
    age: {type : Number},
    gender:{
    	male: {type : Boolean,default : false},
    	female: {type : Boolean,default : false},
    },
    accountType : {
        type : String,
        enum : ['Student','Teacher','Admin','Super Admin','Watchman','Doctor'],
        default : 'Student'
    },
    address: {
        line1: {type : String},
        line2: {type : String},
        city: {type : String},
        state: {type : String},
        pincode: {type : String},
    },
    phone: {type : String},
    subject: {type : String},
    // education: {
	   //  bachelor: {
	   //  	indian : {type : String},
	   //  	Abroad : {type : String},
	   //  },
	   //  Master: {
	   //  	indian : {type : String},
	   //  	Abroad : {type : String},
	   //  },
	   //  Phd: {
	   //  	indian : {type : String},
	   //  	Abroad : {type : String},
	   //  },
    // },
    join: {
        type: Date
    }

})

var teacher = mongoose.model('teacher', teacherSchema);

module.exports = teacher;			