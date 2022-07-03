var Cookies = require( "cookies" )
const { isConnected } = require('../utils/isConnected')
const Event = require('../models/Event.js');
const User = require('../models/User.js');

async function acceptInvitation(req, res, eventId = null){ 
    const idUser = await isConnected(req,res);
    if(eventId === null) {
        var eventInvitation = new Cookies(req,res).get('eventInvitation');
    }
    else {
        eventInvitation = eventId;
    }
    console.log(eventInvitation, "eventInvitation");
    var result;
    if (idUser && eventInvitation !== "") {
        const event = await Event.findOne({_id : eventInvitation})
        const user = await User.findById(idUser)
        event.participants.forEach(function(participant){
            if(participant.email == user.email){
                participant.userId = idUser;
                participant.status = "Active";
            }
        });
        result = await Event.replaceOne({_id: eventInvitation},event)
        res.clearCookie('eventInvitation');
    }
    return result;
}

module.exports = {
    acceptInvitation
}