var express = require('express');
var route = express.Router();

const { userLogin, logout } = require("../controllers/auth/authController");
const { authValidation } = require('../validations/auth');
const validationError = require('../middleware/validationError');
const checkUser = require('../middleware/checkUser');

// user-login
route.post('/user-login', authValidation,validationError, userLogin);

// logout route
route.post('/user-logout', logout);

module.exports = route;