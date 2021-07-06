var express = require('express');
var router = express.Router();

// admin routes
const user = require('./user');
router.use("/admin", user);

// user-login 
const auth = require('./auth');
router.use("/auth", auth)

// client
const client = require('./client');
router.use('/client', client)

// resource-manager
const resourceManager = require('./resourceManager');
router.use('/resource-manager', resourceManager)


module.exports = router;
