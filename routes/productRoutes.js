const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// Si la ruta es homes, ejecute homeController y la función createHome
router.post('/products', productController.createProduct)
router.get('/products', productController.findAllProducts)
router.get('/products/:idProduct', productController.findOneProduct)
router.patch('/products/:idProduct', productController.updateOneProduct)
router.delete('/products/:idProduct', productController.softDeleteOneProduct)
router.delete('/products/destroy/:idProduct', productController.destroyOneProduct)

module.exports = router
