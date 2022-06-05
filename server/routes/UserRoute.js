const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getAllUsers,
    activateAccount,
    UpdateUser,
    getUserConnexion
} = require('../controllers/UserController.js')


function isConnected(){
    var token = new Cookies(req,res).get('access_token');
    // Verifier ce qu'on veut.
    next;
}

router.post('/createUser', createUser)
router.post('/modifyUserInfo',isConnected, UpdateUser)
router.get('/emailVerification', activateAccount)
router.get('/',isConnected, getAllUsers),
router.post('/getUserConnexion', isConnected, getUserConnexion)

module.exports = router