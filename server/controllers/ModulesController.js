const Modules = require('../models/Modules.js')
const nodemailer = require('nodemailer');
const { cloudinary } = require('../utils/cloudinary');
require('dotenv').config()
const { json } = require('body-parser');
const bcrypt = require('bcrypt')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');


const createModules = catchAsync(async(req, res, next) => {
    let data = req.body;
    //Take datas we want only
    const newModules = await Modules.create(data);

    console.log(data)

    // Send result json if success else catch error with catch Async and send error name
    res.status(200).json({
            status: 'success',
            data: {
                newModules
            },
            message : "Event module created."
        }
    );

})

const deleteModules = catchAsync(async(req, res) => {
    data = req.body
    let result = await Modules.deleteOne(
        {id_event:data.id_event}
    )
    res.status(200).json({
        status: 'success',
        data: {
            result
        },
        message : "Les modules ayant pour iDevent " + data.id_event + "ont été supprimés"
    })
})

const updateModules = catchAsync(async(req, res) => {
    data = req.body

    /* Recuperation des modules grace a l'id_event */
    let modules = await Modules.findOne(
        {id_event:data.id_event}
    )
    
    /* Modifications des modules en fonction de la data recuperée */
    for (const key of Object.keys(data)) {
        console.log(key);
        if(key != "id_event")
            if(modules[key] != data[key] && typeof(data[key]) != "undefined"){
                modules[key] = data[key]
            }
    }

    /* Remplacement des modules par les nouveaux */
    const result = await Modules.replaceOne({id_event:data.id_event},modules)

    res.status(200).json({
        status: 'success',
        data: {
            result
        },
        message : "Les modules ayant pour iDevent " + data.id_event + "ont été modifiés"
    })
})

const getAllModules = catchAsync(async(req, res) => {
    data = req.query
    console.log(data)
    let modules = await Modules.find(data)
    res.status(200).json({
        status : 'success', 
        data: {
            modules
        },
        message: "voici tout les modules"
    })
})

const getModulesByEventId = catchAsync(async(req, res) => {
    data = req.query
    console.log(data)
    let modules = await Modules.find(data)
    let eventModules = []
    modules.forEach(modules => function(){
            if(module.id_event == data.id_event){
                return eventModules.push(modules)
            }
        })

    res.status(200).json({
        status: 'success', 
        data: {
            eventModules
        },
        message : "voici tout les modules dans l'event ayant x pour ID"
    })
})

const uploadsModule = catchAsync(async(req, res) => {
    const data = req.body
    let modules = await Modules.findOne({id_event:data.event})
    console.log(modules)
    if(modules != null){
        let count
    
        switch (data.module) {

            case 'photos_videos':
                if(data.file){
                    /* const fileStr = data.file;
                    const uploadResponse = await cloudinary.uploader.upload(fileStr, {upload_preset: 'modules',}); */
 
                    count = modules.photos_videos.medias.size
                    
                    console.log(count)
                    let infosPhotosVideos = {}
                    
                    infosPhotosVideos['photos_videos.medias.media'+count] = {
                            content : data.file,
                            id_author : data.author
                    }
                    console.log(infosPhotosVideos)
                
                    const result = await Modules.updateOne({ id_event: data.event}, { "$set": infosPhotosVideos })
                    
                    console.log(result)
        
                    return res.status(200).json({
                        status: 'success',
                        data: {
                            result
                        },
                        message : "upload reussi module photos_videos , url du fichier : " + data.file
                    })
                }else{
                    err = "Pas de photo ou video dans le body"
                    return res.status(500).json({
                        status: 'error',
                        data: {
                            err
                        },
                        message : "Rien n'a été upload"
                    })
                }
     
            case 'livre_d_or': 
                console.log("test")
                count = modules.livre_d_or.messages.size
                let infosChat = {}
                if(data.file && modules.livre_d_or.videos == true){
                    /* const fileStr = data.file;
                    const uploadResponse = await cloudinary.uploader.upload(fileStr, {upload_preset: 'modules'}); */
                    
                    infosChat['livre_d_or.messages.message'+count] = {
                            content : { 
                                video :data.file,
                                message: data.message
                            },
                            id_author : data.author
                    }
                }else {
                    
                    infosChat['livre_d_or.messages.message'+count] = {
                            content : { 
                                message: data.message
                            },
                            id_author : data.author
                    }
                }
                console.log(infosChat)
                
                const result = await Modules.updateOne({ id_event: data.event}, { "$set": infosChat })
                
                console.log(result)
    
                return res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    },
                    message : "upload reussi module photos_videos , url du fichier : " + data.file
                })
            
            case 'chat':

                count = modules.chat.messages.size
                                
                let infosMessage = {}
            
                infosMessage['chat.messages.message'+count] = {
                    content : data.message,
                    id_author : data.author
                }
                console.log(infosMessage)
            
                result = await Modules.updateOne({ id_event: data.event}, { "$set": infosMessage })
                
                console.log(result)
    
                return res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    },
                    message : "Upload du message module chat a été effectué avec succès"
                })
            
            default:
              console.log('le module ' + data.module + " n'existe pas");
        }
    }else{
        err = "Pas de variable event dans le body, ou alors celui ci ne correspond a aucun id_event de la collection modules"
        return res.status(500).json({
            status: 'error',
            data: {
                err
            },
            message : "Rien n'a été upload"
        })
    }
      

})

module.exports = {
    createModules,
    deleteModules,
    getAllModules,
    getModulesByEventId,
    updateModules,
    uploadsModule
}