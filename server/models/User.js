const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    lastname:{
        type: String,
        required: [true, "Please provide your lastname"]
    },
    firstname:{
        type: String,
        required: [true, "Please provide your firstname"]
    },
    password:{
        type: String,
        required: [true, "Please provide your password"]
    },
    email:{
        type: String,
        required: [true, "Please provide your email!"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid Email!"]
    },
    phone:{
        type: Number,
        required: [true, "Please provide your phone"]
    },
    birthday: {
        type: Date,
        required: [true, "Please provide your birthdate"]
    },
    /* role: String, */
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    createAt: { 
        type: Date,
        default: Date.now
    }
})
//commentaire
const User = mongoose.model('Users', UserSchema)

module.exports = User