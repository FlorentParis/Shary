const Event = require('../models/Event.js')
const User = require('../models/User.js')
var nodemailer = require('nodemailer');
const e = require('express');
require('dotenv').config()



async function createEvent(req, res) {
    var data = req.body
    data.participants = {}
    for(contact in data.contacts){
        try {
            let userInfo = await User.find({
                firstname: data.contacts[contact].firstname,
                phone: data.contacts[contact].phone
            })
            data.contacts[contact]._id = userInfo[0]._id
            let object = {
                user_id: userInfo[0]._id,
                role: "Admin"
            }
            data.participants[contact] = object
        } catch (err) {
            return res.status(500).send("you're contacts need to create them account")
        }
    }

    try {
        const event = await Event.create(data)
        res.status(200).json({event})
    } catch (err) {
        return res.status(500).send("Crash on the request Event.create")
    }  
}

async function addParticipant(req, res) {
    var data = req.body
    let event = await Event.find(
        {
            _id: data.idEvent,
        }
    )

    if (!event)
        return res.status(500).send("Event not found")

    try {

        let userInfo = await User.find({
            firstname: data.user.firstname,
            name: data.user.name,
            email: data.user.email
        })

        let object = {
            user_id: userInfo[0]._id,
            role: data.user.role
        }
        console.log("avant")
        console.log(event[0].participants)
        console.log("apres")
        if(!event[0].participants){
            event[0].participants[0] = object
            const result = Event.replaceOne({_id: data.idEvent},event[0])

        } else {
            let count = Object.keys(event[0].participants).length / 3 
            console.log("numero du participant:", count)
            event[0].participants[count] = object
            console.log('l ajout : ', event[0].participants[count])
            console.log(event[0].participants[0])
            const result = await Event.replaceOne({_id: data.idEvent},event[0])
            console.log("resultat")
            console.log(result)
        }
        return res.status(200).json({result})
    } catch (err) {
        return res.status(500).send("Crash create participant")
    }  

}


module.exports = {
    createEvent,
    addParticipant
}