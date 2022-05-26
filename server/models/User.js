const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    lastname:String,
    firstname:String,
    password:String,
    email:String,
    phone:Number,
    birthday:Date,
    role:String,
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})
//commentaire
const User = mongoose.model('Users', UserSchema)

module.exports = User