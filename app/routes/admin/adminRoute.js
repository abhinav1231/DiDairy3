
var express=require('express');
var adminCtrl=require('../../controller/adminController');
var router=express.Router();

router.post('/createAdmin',adminCtrl.createAdmin);
router.post('/postData/:id',adminCtrl.postData); //get params by route
router.post('/postData1/:id',adminCtrl.postData1);

router.get('/getAdmin',adminCtrl.getAdmin);
router.post('/getAdminById',adminCtrl.getAdminById);

router.post('/teacherAdmin',adminCtrl.teacherAdmin);
router.get('/getteacherAdmin',adminCtrl.getteacherAdmin);
router.get('/getteacherAdminById/:name',adminCtrl.getteacherAdminById);

router.post('/updateAdminById', adminCtrl.updateAdminById);
router.post('/deleteAdminById', adminCtrl.deleteAdminById);

module.exports=router;