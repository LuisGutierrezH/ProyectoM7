const express = require('express')
const router = express.Router()
const saleController = require('../controllers/saleController')

// Si la ruta es homes, ejecute homeController y la función createHome
router.post('/sales', saleController.createSale)
router.get('/sales', saleController.findAllSales)
router.get('/sales/:idSale', saleController.findOneSale)
router.patch('/sales/:idSale', saleController.updateOneSale)
router.delete('/sales/:idSale', saleController.softDeleteOneSale)
router.delete('/sales/destroy/:idSale', saleController.destroyOneSale)

module.exports = router
