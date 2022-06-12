const Event = require('../models/Event.js')
const User = require('../models/User.js')
var nodemailer = require('nodemailer');
const e = require('express');
require('dotenv').config()

const createEvent = async (req, res) => {
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
            return res.status(500).send("you're contacts need to create them account")
        }
    } 
    */

    try {
        const event = await Event.create(data)
        return res.status(200).json({event})
    } catch (err) {
        return res.status(500).send(err)
    }  
}

const getAllEvents = async (req, res) => {
    data = req.query
    let events = ''
    try{
        console.log(data)
        events = await Event.find(data)
        res.status(200).json({ events })
    }catch (err) {
        return res.status(500).send(err)
    }
    
}

const updateEvent = async (req, res) => {
    data = req.body
    let events = ''
    try{
        console.log(data)
        events = await Event.updateOne({_id:data._id}, data);
        res.status(200).json({ events })
    }catch (err) {
        return res.status(500).send(err)
    }
    
}

const addParticipant = async (req, res) => {

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

    if(userInfo[0]._id){
        userInfoObject = {
            userId: userInfo[0]._id,
            email: userInfo[0].email,
            role: data.user.role
        }
    }else{
        userInfoObject = {
            email: userInfo[0].email,
            role: data.user.role
        } 
    }
    
    
    if(!event[0].participants){
        event[0].participants = {
            "0": userInfoObject
        }
        const result = await Event.replaceOne({_id: event[0]._id},event[0])
        await sendMail(userInfoObject,event[0])
        return res.status(200).json({result})

    } else {
        let count = event[0].participants.size
        console.log(count)
        object = {}
        string = 'participants.' + count
        object['participants.'+count] = userInfoObject
        const result = await Event.update({ _id: data.idEvent}, { "$set": object })
        await sendMail(userInfoObject,event[0])
        return res.status(200).json({result, userInfoObject})

    }

}

const sendMail = async (userInfo,event) =>{
    const userEvent = await User.find({
        _id: event.userId,
    })
    console.log(event)
    const subject = "Invation à l'évènement de " + userEvent[0].firstname + " " + userEvent[0].lastname
    const html = "<a href='http://localhost:3030/api/event/cookieInvitation/?eventId=" + event._id + "'>Accepter l'invitation</a>"
    console.log(html)
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
        transporter.sendMail(message, function(error, info){  
                if(error){  
                    console.log(error);  
                    res.status(400);  
                    res.json(data);        
                    next();  
                }    
                else{  
                    res.json(data);        
                    next();  
                }     
            }
        );  
    }
}

const cookieInvitation = async (req, res) => {

    const data = req.query
    res.cookie('eventInvitation', data.eventId, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true
    })    
    res.send("create cookie eventInvitation")
    res.redirect("http://localhost:3000/")
    
}

const deleteEvent = async (req, res) => {
    data = req.body
    let result = await Event.deleteOne(
        {_id:data.eventId}
    )
    return res.status(500).send(result)

}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    addParticipant,
    cookieInvitation
}