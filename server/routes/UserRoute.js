const express = require('express')
const router = express.Router()
var Cookies = require( "cookies" )
var jwt  = require('jsonwebtoken');

const  { 
    createUser, 
    getAllUsers,
    activateAccount,
    UpdateUser,
    getUserConnexion
} = require('../controllers/UserController.js')


function isConnected(){
    var token = new Cookies(req,res).get('access_token');
    console.log(token)
    next;
}

router.post('/createUser', createUser)
router.post('/modifyUserInfo',isConnected, UpdateUser)
router.get('/emailVerification', activateAccount)
router.get('/',isConnected, getAllUsers),
router.post('/getUserConnexion', getUserConnexion)

module.exports = router