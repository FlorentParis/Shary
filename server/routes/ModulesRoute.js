const express = require('express')
const router = express.Router()

const {
    createModules,
    deleteModules
} = require('../controllers/ModulesController.js')

router.post('/createModules', createModules)
router.post('/deleteModules', deleteModules)


module.exports = router