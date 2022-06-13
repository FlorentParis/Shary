const mongoose = require('mongoose')
const validator = require('validator')


const EventSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true
    },
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
            name:{
                type:String,
                required:[true, "Please provide a name"]
            },
            phone:{
                type:String,
                required:[true, "Please provide the phone number"]
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
            userId: {
                type:String,
                unique:true
            },
            email: {
                type:String,
                unique:true
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