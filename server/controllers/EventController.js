const Event = require('../models/Event.js');
const User = require('../models/User.js');
var Cookies = require( "cookies" )
var nodemailer = require('nodemailer');
const catchAsync = require('../utils/catchAsync');
const e = require('express');
require('dotenv').config();
const { isConnected } = require('../utils/isConnected')
const { acceptInvitation } = require('../utils/acceptInvitation')
const AppError = require("../utils/appError");

const createEvent = catchAsync(async(req, res) => {
    var data = req.body
    /*
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
            return res.status(500).send("you're contacts need to create their own account")
        }
    }
    */

    const event = await Event.create(data)
    return res.status(200).json({
        status: 'success',
        data: {
            event
        },
        message : ""
    })
})

const getAllEvents = catchAsync(async(req, res) => {
    data = req.query
    let events = await Event.find(data)
    res.status(200).json({
        status: 'success',
        data: {
            events
        },
        message : ""
    })
})

const getAllEventsByCreator = catchAsync(async(req, res) => {
    let data = req.query
    let events = await Event.find({})
    let userEvent = []

    events.forEach(function(event){
        if(event.userId == data._id){
            return userEvent.push(event)
        }
    });

    res.status(200).json({
        status: 'success',
        data: {
            userEvent
        },
        message : "Récuperation des évènements creer par l'utilisateur :" + data._id
    })
})

const getAllEventsByParticipant = catchAsync(async(req, res) => {
    let data = req.query

    let events = await Event.find({})
    let userEvent = []
    events.forEach(event =>
        event.participants.forEach(function(participant){
            if(participant.userId == data._id && participant.status == "Accepted"){
                return userEvent.push(event)
            }
        })
    );

    res.status(200).json({
        status: 'success',
        data: {
            userEvent
        },
        message : "Récuperation des évènements l'utilisateur " + data._id + " est participant"
    })
})

const getEventsByStatus = catchAsync(async(req, res) => {
    data = req.query

    /* Récupération de des évènements grace au status */
    let events = await Event.find({status : data.status})

    res.status(200).json({
        status: 'success',
        data: {
            events
        },
        message : "Récuperation des évènements ayant pour status : " + data.status
    })

})

const updateEvent = catchAsync(async(req, res) => {
    const data = req.body
    let event = await Event.findByIdAndUpdate(data._id, data,{
        new: true, //true to return the modified document rather than the original, defaults to false
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        data: {
            event
        },
        message : "L'event a bien été modifié !"
    })
})

const addParticipant = catchAsync(async(req, res, next) => {

    var data = req.body

    let event = await Event.find(
        {
            _id: data.idEvent,
        }
    )

    if (!event)
        return res.status(500).send("Event not found")


    let userInfo = await User.find({
        firstname: data.user.firstname,
        name: data.user.name,
        email: data.user.email
    })

    let userInfoObject = {}

    if(userInfo.length !== 0){
        userInfoObject = {
            userId: userInfo[0]._id,
            email: userInfo[0].email,
            role: data.user.role
        }
    }else{
        userInfoObject = {
            email: data.user.email,
            role: data.user.role
        }
    }

    if(!event[0].participants){
        event[0].participants = {
            "0": userInfoObject
        }
        const result = await Event.replaceOne({_id: event[0]._id},event[0])
        let mailSent = await sendMail(userInfoObject,event[0])
        res.status(200).json({
            status: 'success',
            data: {
                result,
                userInfoObject
            },
            message : "Une personne a été ajouté a la liste des participants"
        })

    } else {
        let count = event[0].participants.size
        object = {}
        string = 'participants.' + count
        object['participants.'+count] = userInfoObject
        const result = await Event.update({ _id: data.idEvent}, { "$set": object })
        let mailSent = await sendMail(userInfoObject,event[0])
        console.log(mailSent)
        res.status(200).json({
            status: 'success',
            data: {
                result,
                userInfoObject
            },
            message : "Une personne a été ajouté a la liste des participants"
        })
    }
})

const getParticipantsByEvent = catchAsync(async(req, res) => {
    data = req.query

    /* Récupération de l'évènement grace a l'id_event */
    let events = await Event.findById(data._id)

    /* Récupération des participants de l'évènement */
    let participants = events.participants
    let list_participant = []
    let user_info = {}
    for (const participant of participants) {
        console.log(participant)
        let id = participant[1].userId
        console.log("Function Get participants Event ", id)
        if(id){
            id = id.toString()
            console.log("Participant a un compte", id)
            let user = await User.findById(id)
            console.log("TEST", user)
            user_info = {
                "email" : participant[1].email,
                "role" : participant[1].role,
                "status_invit" : participant[1].status ,
                "img" : user.img,
                "lastname": user.lastname,
                "firstname" : user.firstname,
                "status_account" : user.status
            }
        }else{
            console.log("Participant n'a pas de compte")

            user_info = {
                "email" : participant[1].email,
                "role" : participant[1].role,
                "status_invit" : participant[1].status ,
                "img" : "https://res.cloudinary.com/dr7db2zsv/image/upload/v1657014631/ij8qgts5uouifonqjj6w.png",
                "lastname": "",
                "firstname" : "",
                "status_account" : "Pas de compte"
            }
        }
        list_participant.push(user_info)
    }
    console.log(list_participant)

    res.status(200).json({
        status: 'success',
        data: {
            list_participant
        },
        message : "Récuperation information des participants de l'évènement " + data._id
    })
})

const getModuleStatusByEvent = catchAsync(async(req, res) => {
    data = req.query

    /* Récupération de l'évènement grace a l'id_event */
    let events = await Event.findById(data._id)

    /* Récupération des participants de l'évènement */
    let modules = events.modules
    res.status(200).json({
        status: 'success',
        id_event : data._id,
        test : modules.photoVideo,
        data : {
            modules
        },
        //message : "Récuperation des modules de l'évènement " + data._id
    })
})

const updateModuleStatus = catchAsync(async (req, res)=>{
    let data = req.body;
    // Get modules of the event and change the value of one element of the array "modules"
    const event = await Event.findById( data.idEvent )
    event.modules[req.body.nameModule] = req.body.value
    const event_updated = await Event.findByIdAndUpdate(data.idEvent, event)
    // Send result json if success else catch error with catch Async and send error name
    res.status(200).json({
            status: 'success',
            data: {
                event_updated
            }
        }
    );
})

const sendMail = async(userInfo,event) =>{
    console.log("sendMail invitation")
    const userEvent = await User.find({
        _id: event.userId,
    })
    const subject = "Invation à l'évènement de " + userEvent[0].firstname + " " + userEvent[0].lastname
    const html = "<a href='http://localhost:3030/api/event/cookieInvitation/?eventId=" + event._id + "'>Accepter l'invitation</a>"
    if(userInfo.email){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "OAuth2",
                user: "symchowiczbenji@gmail.com",
                clientId: "828571010780-5qkqqvb2d0ensbl7qqtq8scsi967r6cc.apps.googleusercontent.com",
                clientSecret: process.env.GOOGLE_OAUTH2_KEYS,
                refreshToken: "1//04Xq2X3b-NsYbCgYIARAAGAQSNwF-L9IrYZkIO6cNd8ERMuWJJArLPXplJM7xv-0s4Z2Z-vGV2zih2VGU2Dlq0hrHjC7E1iKQ41M"
            }
        });
        var message = {
            from: "symchowiczbenji@gmail.com", // sender address
            to: userInfo.email, // list of receivers
            subject: subject, // Subject line
            text: "data.contenu", // plaintext body
            html:html
        }
        return await transporter.sendMail(message);
    }
}

const cookieInvitation = catchAsync(async(req, res, next) => {
    console.log("Function cookie Invitation")
    const data = req.query
    res.cookie('eventInvitation', data.eventId, {
        httpOnly: true
    })
    const result = await acceptInvitation(req, res, data.eventId);
    if(result === 401){
        return next(new AppError("Tu n'es pas connecté", 401))
    }
    res.status(200).json({
        status: 'success',
        message : "abcdef",
        data: {
            result
        },
    })
    // res.redirect("http://localhost:3000/")

})

const deleteEvent = catchAsync(async(req, res) => {
    data = req.query
    let result = await Event.deleteOne(
        {_id:data.eventId}
    )
    res.status(200).json({
            status: 'success',
            data: {
                result
            },
            message : "L'event ayant pour iD" + data.eventId + "a été supprimé"
        }
    );

})


module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getAllEventsByCreator,
    getAllEventsByParticipant,
    getEventsByStatus,
    addParticipant,
    getParticipantsByEvent,
    getModuleStatusByEvent,
    updateModuleStatus,
    cookieInvitation
}