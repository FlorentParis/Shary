const express = require('express')
const router = express.Router()

const  { 
    createEvent,
    addParticipant
} = require('../controllers/EventController.js')


router.post('/createEvent', createEvent)
router.post('/addParticipant', addParticipant)


module.exports = router