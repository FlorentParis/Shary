const mongoose = require('mongoose')
const validator = require('validator')


const EventSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true, "Please provide the event's name"]
    },
    start: {
        type:Date,
        required:[true, "Please provide the event's start"]
    },
    end: {
        type:Date,
        required:[true, "Please provide the event's end"]
    },
    dresscode: {
        type:String,
        default:null
    },
    place:{
        address:{
            type:String,
            required:[true, "Please provide the event's address"]
        },
        zipcode:{
            type:Number,
            required:[true, "Please provide the event's zip code"]
        },
        city:{
            type:String,
            required:[true, "Please provide your the event's city"]
        },
        access:{
            transport:{
                type:Boolean,
                default:false
            },
            parking:{
                type:Boolean,
                default:false
            },
            pedestrian:{
                type:Boolean,
                default:false
            }
        }
    },
    contacts:{
        type:Map,
        of: {
            firstname:{
                type:String,
                required:[true, "Please provide the contact's firstname"]
            },
            phone:{
                type:String,
                required:[true, "Please provide your contact's phone"]
            },
            contactBy:{
                    type: String, 
                    enum: ['call', 'SMS', 'all'],
                    default: 'all'
            }
        }
    },
    notifications:{
        inviteAccepted:{
            type:Boolean,
            default:false
        },
        inviteRefused:{
            type:Boolean,
            default:false
        },
        announcement:{
            type:Boolean,
            default:false
        }
    },
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
        photoVideo: {
            type: Boolean, 
            default: false
        },
        chat: {
            type: Boolean, 
            default: false
        },
        livre: {
            type: Boolean, 
            default: false
        },
        artifice: {
            type: Boolean, 
            default: false
        },
        fresque: {
            type: Boolean, 
            default: false
        },
        playlist: {
            type: Boolean, 
            default: false
        }
    }
})
//commentaire
const Event = mongoose.model('Events', EventSchema)

module.exports = Event