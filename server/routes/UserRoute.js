const express = require('express')
const router = express.Router()
var Cookies = require( "cookies" )
var jwt  = require('jsonwebtoken')
const { promisify } = require('util')

const  { 
    createUser, 
    getAllUsers,
    activateAccount,
    UpdateUser,
    getUserConnexion
} = require('../controllers/UserController.js')
const { nextTick } = require('process')


async function isConnected(req, res, next){
    var token = new Cookies(req,res).get('access_token');
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    next();
}

router.post('/createUser', createUser)
router.post('/modifyUserInfo',isConnected, UpdateUser)
router.get('/emailVerification', activateAccount)
router.get('/',isConnected, getAllUsers),
router.post('/getUserConnexion', getUserConnexion)

module.exports = router