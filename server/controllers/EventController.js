const Event = require('../models/Event.js')
var nodemailer = require('nodemailer');
require('dotenv').config()


const createEvent = ((req, res) => {
    var data = req.body;
    Event.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({msg:  error }))     
    })

/* const addParticipants = ((req, res) => {
        var data = req.body;
        Event.findOneAndUpdate(
            {
                id: data.id,
            },
            {$set: { 
                
            }
            },
            {upsert: true},
            function(err, doc) {
                res.send("success")
            }
        )    
    }) */




module.exports = {
    createEvent
}