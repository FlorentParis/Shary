const express = require('express')
const router = express.Router()

const  { 
    createUserCollection
} = require('../controllers/UserController.js')

router.post('/', createUserCollection) 

module.exports = router