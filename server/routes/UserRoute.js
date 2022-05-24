const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getUsers,
    EmailVerification,
    modifyUserInfo
} = require('../controllers/UserController.js')

router.post('/createUser', createUser)
router.post('/modifyUserInfo', modifyUserInfo)
router.get('/emailVerification', EmailVerification) 
router.get('/', getUsers)

module.exports = router