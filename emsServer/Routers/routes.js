const express=require('express')
const { adminLogin, addEmployee, getAllEmployees, getEmployee, deleteEmployee, editEmployee, filterEmployee } = require('../controls/adminlogic')
const upload = require('../middlewares/multerMiddleware')

const router=new express.Router() 



router.post('/admin/login',adminLogin) 


// new employee file upload

router.post('/admin/add-employee',upload.single("user_profile"),addEmployee)


// all employees data

router.get('/admin/get-all-employees',getAllEmployees)

// single employee details
  
router.get('/admin/get-employee/:id',getEmployee)

// delete employee

router.delete('/admin/delete-employee/:id',deleteEmployee)

// edit employee

router.put('/admin/edit-employee/:id',upload.single("user_profile"),editEmployee)   


// filter status

router.get('/admin/filter',filterEmployee)

 
module.exports=router         // exporting router to index