var userSchema = require('../models/userSchema');
var teacherSchema = require('../models/teacherschema');

var createAdmin = function(req, res){
	// work here
	let username = req.body.name;
	let usermarks = req.body.marks;
	let userresult= req.body.result;
	
	if(username && usermarks){
		var userModel = {
			name : username,
			marks : usermarks,
			userresult : userresult==true ? userresult : false
		};
		console.log("data::",userModel);
		userSchema.create(userModel,(err, data)=>{
			if(err) return res.send({status : 400, message :"Error occured!",Error :err});
			return res.send({status : 200, message :"Succesful created",data : data});
		});
	}else{
		return res.send({status : 400, message :"Please fill all required field"});	
	}
	console.log("create user");
	// res.send({status : 200, message :"Hello"});
}


var getAdmin = function(req, res){
	userSchema.find({},{},function(err, data){
		return res.send({status : 200, message :"Get admins", data : data});	
	});
}

var getAdminById = function(req, res){
	userSchema.find({_id : req.body.adminId},{name : 1},function(err, data){
		return res.send({status : 200, message :"Get admins", data : data});	
	});
}

var teacherAdmin = function(req, res){
	// work here
	let teacherName = req.body.name;
	let teacherEmail = req.body.email;
	let teacherAge = req.body.age;
	let teacherGender = req.body.gender;	
	let teacherAddress = req.body.address;
	let teacherPhone= req.body.phone;
	let teacherSubject = req.body.subject;
	let accountType = req.body.accountType;
	let teacherJoin= req.body.join;
	
	if(teacherName){
		var teacherModel = {
			name : teacherName, 
			mail: teacherEmail, 
			age: teacherAge, 
			accountType : accountType,
			'gender.male' : teacherGender,
			'gender.female' : teacherGender, 
			'address.line1' : teacherAddress.lin1,
			// 'address.line1' : teacherAddress, 
			'address.state' : teacherAddress.state, 
			'address.city' : teacherAddress.city, 
			// 'address.pincode' : teacherAddress,  
			phone: teacherPhone, 
			subject : teacherSubject, 
			// 'education.bachelor.indian' : teacherEducation,
			// 'education.bachelor.Abroad' : teacherEducation,
			// 'education.Master.indian' : teacherEducation,
			// 'education.Master.Abroad' : teacherEducation,
			// 'education.Phd.indian' : teacherEducation,
			// 'education.Phd.Abroad' : teacherEducation,
			join: teacherJoin,
		};
		console.log("data::",teacherModel);
		teacherSchema.create(teacherModel,(err, data)=>{
			if(err) return res.send({status : 400, message :"Error occured!",Error :err});
			return res.send({status : 200, message :"Succesful created",data : data});
		});
	}else{
		return res.send({status : 400, message :"Please fill all required field"});	
	}
	console.log("create user");
	// res.send({status : 200, message :"Hello"});
}


var getteacherAdmin = function(req, res){
	teacherSchema.find({},{},function(err, data){
		return res.send({status : 200, message :"Get teacher admins", data : data});	
	});
}

var getteacherAdminById = function(req, res){
	teacherSchema.findOne({name : req.params.name},{name : 1},function(err, data){
		return res.send({status : 200, message :"Get teacher admins", data : data});	
	});
}

var updateAdminById = function(req, res){
	// condition, update,callback
	teacherSchema.update({_id : req.body.id},{$set : {name : req.body.name}},function(err, updateData){
		return res.send({status : 200, message :"Update Succesful!."});	
	})
}

var deleteAdminById = function(req, res){
	// condition, update,callback
	teacherSchema.remove({_id : req.body.id},function(err, updateData){
		return res.send({status : 200, message :"Delete Succesful!.",data : updateData});	
	})
}



var postData = function(req, res){
	res.send({status : 200, message:  req.body,message1: req.params.id})
}

var postData1 = function(req, res){
	console.log(req.headers.name,req.headers.class);
	console.log(req.query.name);
	res.send({status : 200, message:  req.body,message1: req.params.id})
}

exports.createAdmin=createAdmin;

exports.postData1 = postData1;
exports.postData = postData;
exports.getAdmin = getAdmin;
exports.getAdminById = getAdminById;

exports.teacherAdmin=teacherAdmin;
exports.getteacherAdmin = getteacherAdmin;
exports.getteacherAdminById = getteacherAdminById;

exports.updateAdminById = updateAdminById;
exports.deleteAdminById = deleteAdminById;