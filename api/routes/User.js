const express = require('express');
const Router = express.Router();
const { checkToken } = require('../middlewares/Auth')
const { getUser,createUser,login} = require('../controllers/User');


Router.get('/:id',checkToken, getUser)
Router.post('/', createUser)
Router.post('/login', login)



module.exports = Router;