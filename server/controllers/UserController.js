const User = require('../models/User.js')
require('dotenv').config()
const nodemailer = require('nodemailer');
const { json } = require('body-parser');
const bcrypt = require('bcrypt')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');


const createUser = catchAsync(async(req, res) => {
    var data = req.body;
    const user = await User.findOne(
        { email: data.email }
    )
    if (!user) {
        // middleware on save()
        bcrypt.hash(data.password, 5, async function( err, bcryptedPassword){
            data.password = bcryptedPassword
        });

        const newUser = await User.create(req.body)
        res.status(200).json({
                status: 'success',
                data: {
                    newUser
                }
            }
        );

        const mailSent = await sendMailActivation(data);
        console.log(mailSent);
    }else{
        return res.status(409).json({'error': 'user already exist'})
    }
})

const sendMailActivation = async (data)=> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: "OAuth2",
            user: "symchowiczbenji@gmail.com",
            clientId: "828571010780-5qkqqvb2d0ensbl7qqtq8scsi967r6cc.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_OAUTH2_KEYS,
            refreshToken: "1//04u-kOoe01-kBCgYIARAAGAQSNwF-L9IrnCfP21UpZPBSnWO7jKEjZYfFbu-EqrN9Cv1ht-6FM_eRzCWibjEpr4J-uJXTv6Tg2sE"
        }
    });
    const message = {
        from: "symchowiczbenji@gmail.com", // sender address
        to: data.email, // list of receivers
        subject: "Activation de votre compte Shary !", // Subject line
        text: "data.contenu", // plaintext body
        html: "Salut a toi <b>" + data.firstname + " " + data.lastname + "</b><br/>Pourrais tu nous confirmer qu'il s'agit bien de ton mail : " + data.email + "<br/>Si c'est bien le cas, cliques ici pour nous le confirmer et nous activerons ton compte: <a href='http://localhost:3030/emailVerification/?email=" + data.email + "'> CLIQUES ICI POTO !!!</a><br/> Merci et a bientot !<br/>Shary" // html body
    }

    return await transporter.sendMail(message);
}


const getAllUsers = catchAsync(async(req, res)=> {
    const users = await User.find();
    res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        }
    )
})

const EmailVerification = ((req, res) => {
    data = req.query
    User.findOneAndUpdate({email: data.email},{$set: { status:"Active" }},{upsert: true}, function(err, doc) {
        res.redirect("http://localhost:3000/")
    });
})

const modifyUserInfo = ((req, res) => {
    data = req.body
    console.log(data.email)
    User.findOneAndUpdate(
        {email: data.email},
        {$set: {
                lastname:data.lastname,
                firstname:data.firstname,
                phone:data.phone,
                birthday:data.birthday,
                role:data.role
            }
        },
        {upsert: true},
        function(err, doc) {
            res.send("success")
        }
    )
})

module.exports = {
    createUser,
    getAllUsers,
    EmailVerification,
    modifyUserInfo
}