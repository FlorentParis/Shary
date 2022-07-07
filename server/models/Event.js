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
    type : {
        type: String,
        enum: ['mariage', 'anniversaire', 'autre'],
        required:[true, "Please provide the event's type"]
    },
    description : {
        type: String
    },
    banniere:{
        type: String,
        default:null
    },
    status: {
        type: String,
        enum: ['Pending', 'InProgress','finish'],
        default: 'Pending'
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
            train:{
                type:Boolean,
                default:false
            },
            parking:{
                type:Boolean,
                default:false
            },

            autres:{
                type: Boolean,
                default:false
            },
            precision:{
                type: String
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
    alerts:{
        date : {
                type:Date,
                required:[true, "Please provide the alert's date"]
        },
        description : {
            type:String,
            required:[true, "Please provide the alert's description"]
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
        },
        required : true
    },
    modules : {
        photos_videos: {
            type: Boolean, 
            default: false
        },
        chat: {
            type: Boolean, 
            default: false
        },
        livre_d_or: {
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