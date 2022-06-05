const User = require('../models/User.js')
const nodemailer = require('nodemailer');
require('dotenv').config()
const { json } = require('body-parser');
const bcrypt = require('bcrypt')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');

const createUser = catchAsync(async(req, res, next) => {
    let data = req.body;
    //Take datas we want only
    const newUser = await User.create(data);

    //const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

    // Send email with a link to activate the account
    const mailSent = await sendMailActivation(data);
    console.log(mailSent);

    // Send result json if success else catch error with catch Async and send error name
    res.status(200).json({
            status: 'success',
            data: {
                newUser
            },
            message : "Email nodemailer sent"
        }
    );

})

// Doc : https://nodemailer.com/usage/
const sendMailActivation = async (data)=> {
    // To send email you need a transporter object
    // TODO à mettre dans un SendMailController ou autre fichier pour qu'on puisse récupèrer ce code et envoyer d'autre mail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: "OAuth2",
            user: "symchowiczbenji@gmail.com",
            clientId: "828571010780-5qkqqvb2d0ensbl7qqtq8scsi967r6cc.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_OAUTH2_KEYS, //Key to configure
            refreshToken: "1//04Xq2X3b-NsYbCgYIARAAGAQSNwF-L9IrYZkIO6cNd8ERMuWJJArLPXplJM7xv-0s4Z2Z-vGV2zih2VGU2Dlq0hrHjC7E1iKQ41M"
        }
    });

    const message = {
        from: "symchowiczbenji@gmail.com", // sender address
        to: data.email, // list of receivers
        subject: "Activation de votre compte Shary !", // Subject line
        text: "data.contenu", // plaintext body
        html: "Salut a toi <b>" + data.firstname + " " + data.lastname + "</b><br/>Pourrais tu nous confirmer qu'il s'agit bien de ton mail : " + data.email + "<br/>Si c'est bien le cas, cliques ici pour nous le confirmer et nous activerons ton compte: <a href='http://localhost:3030/api/user/emailVerification/?email=" + data.email + "'> CLIQUES ICI POTO !!!</a><br/> Merci et a bientot !<br/>Shary" // html body
    }

    return await transporter.sendMail(message);
}

const getAllUsers = catchAsync(async(req, res, next)=> {
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

//  TODO : Activate account with user_ID from cookies, session or token, faire un findByIdAndUpdate
const activateAccount = ((req, res) => {
    data = req.query
    User.findOneAndUpdate({email: data.email},{$set: { status:"Active" }},{upsert: false}, function(err, doc) {
        res.redirect("http://localhost:3000/")
    });
})

//  TODO idem, Faire un update depuis son ID, faire un findByIdAndUpdate
const UpdateUser = catchAsync(async (req, res) => {
    data = req.body
    console.log(data.email)
    const userUpdated = await User.findOneAndUpdate(
        {email: data.email},
        {$set: {
                lastname:data.lastname,
                firstname:data.firstname,
                phone:data.phone,
                birthday:data.birthday,
                role:data.role
            }
        },
        {upsert: false}
    )
    res.status(200).json({
        status:'success',
        data:{
            userUpdated
        }
    });
})

const getUserConnexion = ((req, res) => {


    User.findOne({email: req.query.email, password: req.query.pw})
        .then(result => 
            res.status(200).json(result == null ? 
                'Mot de passe ou Email incorrect': 
                new jwt_token = jwt.sign({ id: result.id }),
                new Cookies(req,res).set('access_token',jwt_token , {
                    httpOnly: true,
                    secure: true
                }),
                 'Tu es connecté')
            )
        .catch(() => res.status(404).json({msg: 'Not Found'}))
})

module.exports = {
    createUser,
    getAllUsers,
    activateAccount,
    UpdateUser,
    getUserConnexion
}