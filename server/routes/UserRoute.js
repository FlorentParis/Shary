const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getUsers,
    EmailVerification
} = require('../controllers/UserController.js')

router.post('/createUser', createUser)
router.get('/emailVerification', EmailVerification) 
router.get('/', getUsers)

module.exports = router