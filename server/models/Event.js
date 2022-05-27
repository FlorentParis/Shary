const mongoose = require('mongoose')
const validator = require('validator')


const EventSchema = new mongoose.Schema({

    Name : String, 
    Participants : {
        ids : { 
            type : Map,
            of: {
                email : {
                    type : String, 
                    required: [true, "Please provide your email!"],
                },

                id : Object, 
                
                role : {
                    type: String,
                    required: [true, 'Please define a user role'] 
                },

                status: {
                    type: String, 
                    enum: ['Pending', 'Active'],
                    default: 'Pending'
                },
            },
        },
    },
    Modules : Array

})
//commentaire
const Event = mongoose.model('Events', EventSchema)

module.exports = Event