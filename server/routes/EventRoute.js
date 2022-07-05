const express = require('express')
const router = express.Router()

const  { 
    createEvent,
    updateEvent,
    getAllEvents,
    getAllEventsByCreator,
    getAllEventsByParticipant,
    getEventsByStatus,
    deleteEvent,
    addParticipant,
    getParticipantsByEvent,
    cookieInvitation
} = require('../controllers/EventController.js')


router.post('/createEvent', createEvent)
router.post('/updateEvent', updateEvent)
router.post('/deleteEvent', deleteEvent)
router.post('/addParticipant', addParticipant)
router.get('/cookieInvitation', cookieInvitation)
router.get('/getAllEvents', getAllEvents)
router.get('/getAllEventsByCreator', getAllEventsByCreator)
router.get('/getAllEventsByParticipant', getAllEventsByParticipant)
router.get('/getEventsByStatus', getEventsByStatus)
router.get('/getParticipantsById', getParticipantsByEvent)



module.exports = router