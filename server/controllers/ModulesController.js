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


const uploadsFilesModulesPhotosVideos = catchAsync(async(req, res) => {
    const data = req.body
    const fileStr = data.file;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'modules',
    });
    console.log(uploadResponse)
    let count
    let modules = await Modules.findOne({id_event:data.event})
    if(!modules.photos_videos.medias){
        count = 0
    }else{  
        count = modules.photos_videos.medias.size
    }
    console.log(count)
    
    let infosImage = {}

    infosImage['photos_videos.medias.media'+count] = {
            content : uploadResponse.url,
            id_author : data.author
    }

    const result = await Modules.updateOne({ id_event: data.event}, { "$set": infosImage })

    console.log(result)

    res.json({ msg: "upload reussi, url de l'image : " + uploadResponse.url });
})

module.exports = {
    createModules,
    deleteModules,
    getAllModules,
    getModulesByEventId,
    updateModules,
    uploadsFilesModulesPhotosVideos
}