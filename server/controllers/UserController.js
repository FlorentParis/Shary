const User = require('../models/User.js')
var nodemailer = require('nodemailer');  
var xoauth2 = require('xoauth2');  

const createUser = ((req, res) => {
    User.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))

        var data = req.body; 
        // login  
        var transporter = nodemailer.createTransport({  
          service: 'gmail',  
          auth: {  
              type: "OAuth2",
              user: "symchowiczbenji@gmail.com",  
              clientId: "828571010780-5qkqqvb2d0ensbl7qqtq8scsi967r6cc.apps.googleusercontent.com",  
              clientSecret: "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",  
              refreshToken: "1//04u-kOoe01-kBCgYIARAAGAQSNwF-L9IrnCfP21UpZPBSnWO7jKEjZYfFbu-EqrN9Cv1ht-6FM_eRzCWibjEpr4J-uJXTv6Tg2sE"  
          }  
        });  
        var message = {  
            from: "symchowiczbenji@gmail.com", // sender address  
            to: data.email, // list of receivers  
            subject: "Verfication de votre compte Shary !", // Subject line  
            text: "data.contenu", // plaintext body  
            html: "Salut a toi <b>" + data.firstname + " " + data.lastname + "</b><br/>Pourrais tu nous confirmer qu'il s'agit bien de ton mail : " + data.email + "<br/>Si c'est bien le cas, cliques ici pour nous le confirmer : <a href='http://localhost:3030/emailVerification/?lastname=" + data.lastname + "&firstname=" + data.firstname + "'> CLIQUES ICI POTO !!!</a><br/> Merci et a bientot !<br/>Shary" // html body  
        }  
        transporter.sendMail(message, function(error, info){  
            if(error){  
              console.log(error);  
              res.status(400);  
              res.json(data);        
              next();  
            }    
            else{  
              res.json(data);        
              next();  
            }     
          });    
})

const getUsers = ((req, res) => {
    User.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const EmailVerification = ((req, res, next) => {
    data = req.query
    User.findOneAndUpdate({lastname: data.lastname,firstname: data.firstname},{$set: { status:"Active" }},{upsert: true}, function(err, doc) {
        res.redirect("http://localhost:3000/")
    });
})


module.exports = {
    createUser,
    getUsers,
    EmailVerification
}