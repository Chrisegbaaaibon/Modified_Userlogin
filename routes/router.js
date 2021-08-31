const express = require('express');
const controller = require('../controller/controller')
const route = express.Router();

route.get('/', controller.signUp);
route.get('/login', controller.login)
module.exports = route