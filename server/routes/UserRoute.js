const express = require('express')
const router = express.Router()
var Cookies = require( "cookies" )
var jwt  = require('jsonwebtoken')
const { promisify } = require('util')
const AppError = require('../utils/appError')

const  { 
    createUser, 
    getAllUsers,
    activateAccount,
    UpdateUser,
    getUserConnexion,
    getUserDeconnexion
} = require('../controllers/UserController.js')
const { nextTick } = require('process')


async function isConnected(req, res, next){
    var token = new Cookies(req,res).get('access_token');
    if(token) {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    console.log("Ton id (ROUTER): ", decoded.id);
    next();
    }
    else {
        return next(new AppError("Tu n'es pas connecté", 404));
    }
}

router.post('/createUser', createUser)
router.post('/modifyUserInfo',isConnected, UpdateUser)
router.get('/emailVerification', activateAccount)
router.get('/',isConnected, getAllUsers),
router.post('/getUserConnexion', getUserConnexion),
router.post('/getUserDeconnexion', getUserDeconnexion)

module.exports = router