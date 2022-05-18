const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    lastname:String,
    firstname:String,
    password:String,
    email:String,
    phone:Number,
    birthday:Date,
    role:String,
   /*  photo:File, */
})
//commentaire
const User = mongoose.model('Users', UserSchema)

module.exports = User