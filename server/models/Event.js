const mongoose = require('mongoose')
const validator = require('validator')


const EventSchema = new mongoose.Schema({

    name : String,      
    participants : {
        type : Map,
        of: {
            user_id: {
                type:Number,
                unique:true
            },
            email: {
                type: String,
                required: [true, "Please provide your email!"],
                unique: true,
                lowercase: true,
                validate: [validator.isEmail, "Please provide a valid Email!"]
            },
            role: {
                type: String, 
                enum: ['Admin', 'User', 'Moderator'],
                default: 'User'
            },
            status: {
                type: String, 
                enum: ['Pending', 'Active'],
                default: 'Pending'
            }
        }
    },
    modules : {
        photos: Boolean,
        livre_d_or: Boolean
    },

})
//commentaire
const Event = mongoose.model('Events', EventSchema)

module.exports = Event