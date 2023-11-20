const express = require('express')
const router = express.Router()
const storeController = require('../controllers/storeController')

// Si la ruta es homes, ejecute homeController y la función createHome
router.post('/stores', storeController.createStore)
router.get('/stores', storeController.findAllStores)
router.get('/stores/:idStore', storeController.findOneStore)
router.patch('/stores/:idStore', storeController.updateOneStore)
router.delete('/stores/:idStore', storeController.softDeleteOneStore)
router.delete('/stores/destroy/:idStore', storeController.destroyOneStore)

module.exports = router
