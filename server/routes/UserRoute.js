const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getAllUsers,
    EmailVerification,
    modifyUserInfo
} = require('../controllers/UserController.js')

router.post('/createUser', createUser)
router.post('/modifyUserInfo', modifyUserInfo)
router.get('/emailVerification', EmailVerification) 
router.get('/', getAllUsers)

module.exports = router