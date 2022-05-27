const Event = require('../models/Event.js')
var nodemailer = require('nodemailer');
require('dotenv').config()


const createEvent = ((req, res) => {
    var data = req.body;

        Event.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))

 /*         // Envoie mail :
            if(data.email){
                var transporter = nodemailer.createTransport({  
                    service: 'gmail',  
                    auth: {  
                        type: "OAuth2",
                        user: "symchowiczbenji@gmail.com",  
                        clientId: "828571010780-5qkqqvb2d0ensbl7qqtq8scsi967r6cc.apps.googleusercontent.com",  
                        clientSecret: process.env.GOOGLE_OAUTH2_KEYS,
                        refreshToken: "1//04u-kOoe01-kBCgYIARAAGAQSNwF-L9IrnCfP21UpZPBSnWO7jKEjZYfFbu-EqrN9Cv1ht-6FM_eRzCWibjEpr4J-uJXTv6Tg2sE"  
                    }  
                });  
                var message = {  
                    from: "symchowiczbenji@gmail.com", // sender address  
                    to: data.email, // list of receivers  
                    subject: "Verfication de votre compte Shary !", // Subject line  
                    text: "data.contenu", // plaintext body  
                    html: "Salut a toi <b>" + data.firstname + " " + data.lastname + "</b><br/>Pourrais tu nous confirmer qu'il s'agit bien de ton mail : " + data.email + "<br/>Si c'est bien le cas, cliques ici pour nous le confirmer : <a href='http://localhost:3030/emailVerification/?email=" + data.email + "'> CLIQUES ICI POTO !!!</a><br/> Merci et a bientot !<br/>Shary" // html body  
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
                    }
                );  
            }
           
        }else{
            return res.status(409).json({'error': 'user already exist'})
        }*/     
    })
module.exports = {

    createEvent

}