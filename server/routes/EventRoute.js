const express = require('express')
const router = express.Router()

const  { 
    createEvent,
    updateEvent,
    getAllEvents,
    deleteEvent,
    addParticipant,
    cookieInvitation
} = require('../controllers/EventController.js')


router.post('/createEvent', createEvent)
router.post('/updateEvent', updateEvent)
router.post('/deleteEvent', deleteEvent)
router.post('/addParticipant', addParticipant)
router.get('/cookieInvitation', cookieInvitation)
router.get('/getAllEvents', getAllEvents)



module.exports = router