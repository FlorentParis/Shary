const express = require('express')
const router = express.Router()

const  { 
    createEvent,
} = require('../controllers/EventController.js')

router.post('/createEvent', createEvent)

module.exports = router