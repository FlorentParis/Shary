const express = require('express')
const router = express.Router()

const {
    createModules,
    deleteModules,
    getAllModules,
    getModulesByEventId,
    updateModules,
    uploadsModule

} = require('../controllers/ModulesController.js')

router.post('/createModules', createModules)
router.post('/deleteModules', deleteModules)
router.get('/getAllModules', getAllModules)
router.get('/getModulesByEventId', getModulesByEventId)
router.post('/updateModules', updateModules)
router.post('/uploadsModule', uploadsModule)

module.exports = router