const ModelProducts = require('../models/Products')

const createProduct = (req, res) => {
  ModelProducts.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Product created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating product', err })
    })
}
const findAllProducts = (req, res) => {
  ModelProducts.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ messsage: 'Error listing products', err })
    })
}
const findOneProduct = (req, res) => {
  ModelProducts.findOne(req.params.idProduct)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ messsage: 'Error listing product', err })
    })
}
const updateOneProduct = (req, res) => {
  ModelProducts.update(req.params.idProduct, req.body)
    .then(row => {
      res.status(200).send({ message: 'Product updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating product', err })
    })
}
const destroyOneProduct = (req, res) => {
  ModelProducts.destroy(req.params.idProduct)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying product', err })
    })
}
const softDeleteOneProduct = (req, res) => {
  ModelProducts.softDelete(req.params.idProduct)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error soft deleting product', err })
    })
}
module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateOneProduct,
  destroyOneProduct,
  softDeleteOneProduct
}
