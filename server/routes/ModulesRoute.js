const express = require('express')
const router = express.Router()

const {
    createModules,
    deleteModules,
<<<<<<< HEAD
    getAllModules,
    getModulesByEventId
=======
    updateModules

>>>>>>> 7df02fa858b9cb7dcca0dad18377e22ae2740bf6
} = require('../controllers/ModulesController.js')

router.post('/createModules', createModules)
router.post('/deleteModules', deleteModules)
<<<<<<< HEAD
router.get('/getAllModules', getAllModules)
router.get('/getModulesByEventId', getModulesByEventId)
=======
router.post('/updateModules', updateModules)
>>>>>>> 7df02fa858b9cb7dcca0dad18377e22ae2740bf6


module.exports = router