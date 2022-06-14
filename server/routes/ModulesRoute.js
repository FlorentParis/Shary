const express = require('express')
const router = express.Router()

const {
    createModules,
    deleteModules,
    updateModules

} = require('../controllers/ModulesController.js')

router.post('/createModules', createModules)
router.post('/deleteModules', deleteModules)
router.post('/updateModules', updateModules)


module.exports = router