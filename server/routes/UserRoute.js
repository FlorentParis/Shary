const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getAllUsers,
    activateAccount,
    UpdateUser
} = require('../controllers/UserController.js')

router.post('/createUser', createUser)
router.post('/modifyUserInfo', UpdateUser)
router.get('/emailVerification', activateAccount)
router.get('/', getAllUsers)


module.exports = router