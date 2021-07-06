var express = require('express');
var route = express.Router();


const { getUserById, changeRole, changePasswordByAdmin, getAllUsers, addAdmin, updateAdmin, deleteAdmin, getAllAdmin } = require("../controllers/admin/adminAuthController");
const { addUserValidation, UpdateUserValidation, userValidation } = require('../validations/user');
const validationError = require('../middleware/validationError');
const checkAuth = require('../middleware/checkAuth');
const {wrapper} = require('../utlis/errorWrap');
const { addEmployee, updateEmployee, deleteEmployee, getAllEmployee, getEmployeeListOfClient, uploadFile, downloadFile } = require('../controllers/employee/employeeAuthController');
const { addUser, updateUser, getAllUser, deleteUser, getClientList, getListOfClients, getListOfResourceManager } = require('../controllers/user/userAuthController');
const upload = require('../config/multer');


// add admins
// route.post('/',checkAuth, addUserValidation, validationError, wrapper(addUser));
route.post('/', addUserValidation, validationError, addUser);

// update admin user
route.put('/',checkAuth, UpdateUserValidation, validationError, wrapper(updateUser));

// delete admin user
route.delete('/user/:id',checkAuth, wrapper(deleteUser));

// get admin users
route.get('/all', wrapper(getAllUser));

// get admin user by id
route.get('/user/:id',checkAuth, wrapper(getUserById));

// change role by admin
route.post('/role', checkAuth, wrapper(changeRole));

// change password by admin
route.post('/change-password',checkAuth, wrapper(changePasswordByAdmin));

// get client list 
route.get('/clients',checkAuth, wrapper(getListOfClients));

// get resource manager list
route.get('/resource-managers',checkAuth, wrapper(getListOfResourceManager));

// add employee
route.post('/resource',checkAuth, wrapper(addEmployee));

// update resource
route.put('/resource', updateEmployee);

// delete resource
route.delete('/resource/:id', deleteEmployee);

// get all employees
route.get('/all-resources', getAllEmployee);

//file upload
route.post('/file-upload', upload.single('file'), wrapper(uploadFile));

// file download
route.get('/file-download/:id', downloadFile)



module.exports = route;
