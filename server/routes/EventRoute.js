const express = require('express')
const router = express.Router()

const  { 
    createEvent,
    getEvents,
    addParticipant,
    cookieInvitation
} = require('../controllers/EventController.js')


router.post('/createEvent', createEvent)
router.post('/addParticipant', addParticipant)
router.get('/cookieInvitation', cookieInvitation)
router.get('/getEvents', getEvents)



module.exports = router