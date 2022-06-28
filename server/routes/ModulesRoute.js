const express = require('express')
const router = express.Router()

const {
    createModules,
    deleteModules,
    getAllModules,
    getModulesByEventId,
    updateModules,
    uploadsFilesModulesPhotosVideos

} = require('../controllers/ModulesController.js')

router.post('/createModules', createModules)
router.post('/deleteModules', deleteModules)
router.get('/getAllModules', getAllModules)
router.get('/getModulesByEventId', getModulesByEventId)
router.post('/updateModules', updateModules)
router.post('/uploadsFilesModulesPhotosVideos', uploadsFilesModulesPhotosVideos)

module.exports = router