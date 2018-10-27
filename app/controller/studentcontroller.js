var studentschema = require('../models/studentschema');


var student = function(req, res){
  // work here
  let name = req.body.name;
  let rollnumber = req.body.rollnumber;
  let teachername= req.body.teachername;
  let address= req.body.address;

  
  if(name && rollnumber){
    var studentModel = {
      name : name,
      rollnumber : rollnumber,
      teachername : teachername,
      address : address,
    };
    console.log("data::",studentModel);
    studentschema.create(studentModel,(err, data)=>{
      if(err) return res.send({status : 400, message :"Error occured!",Error :err});
      return res.send({status : 200, message :"Succesful created",data : data});
    });
  }else{
    studentschema.find({},function(err,result){
      console.log('Error::',err)
      if(err) return res.send({status : 400, message :"Please fill all required field"}); 
      return res.send({status:200,message:"Fetched Successfully",data:result});

    })
  }
  console.log("create user");
  // res.send({status : 200, message :"Hello"});
}


exports.student=student;

