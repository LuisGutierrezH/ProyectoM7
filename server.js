const express = require('express')
// Importar las rutas de mi vista (Home)
const productRoutes = require('./routes/productRoutes')
const customerRoutes = require('./routes/customerRoutes')
const storeRoutes = require('./routes/storeRoutes')
const saleRoutes = require('./routes/saleRoutes')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */
app.use('/api/v1', productRoutes, customerRoutes, storeRoutes, saleRoutes)

/* Levantar el servidor */
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
