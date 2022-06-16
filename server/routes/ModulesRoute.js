const express = require('express')
const router = express.Router()

const {
    createModules,
    deleteModules,
    getAllModules,
    getModulesByEventId
} = require('../controllers/ModulesController.js')

router.post('/createModules', createModules)
router.post('/deleteModules', deleteModules)
router.get('/getAllModules', getAllModules)
router.get('/getModulesByEventId', getModulesByEventId)


module.exports = router