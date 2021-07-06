var express = require('express');
var route = express.Router();

const { createEmployeeList, addEmployee, getAllEmployee } = require('../controllers/employee/employeeAuthController');
const {wrapper} = require('../utlis/errorWrap');
const validationError = require('../middleware/validationError');
const checkClient = require('../middleware/checkClient');
const checkUser = require('../middleware/checkUser');
const { getListForClient } = require('../controllers/admin/adminAuthController');

// add employee
route.post("/", checkClient, wrapper(addEmployee))

// create employee list
route.post('/add',checkClient, wrapper(createEmployeeList));
// route.post('/', addUserValidation, validationError, addUser);

// get all emp
route.get('/', checkClient, getAllEmployee);

// get selected of emp for client
route.post('/emp-list', getListForClient);

module.exports = route;