const ModelCustomers = require('../models/Customers')

const createCustomer = (req, res) => {
  ModelCustomers.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Customer creted', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating customer', err })
    })
}
const findAllCustomers = (req, res) => {
  ModelCustomers.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing customers', err })
    })
}
const findOneCustomer = (req, res) => {
  ModelCustomers.findOne(req.params.idCustomer)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing product', err })
    })
}
const updateOneCustomer = (req, res) => {
  ModelCustomers.update(req.params.idCustomer, req.body)
    .then(row => {
      res.status(200).send({ message: 'Product updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating product', err })
    })
}
const destroyOneCustomer = (req, res) => {
  ModelCustomers.destroy(req.params.idCustomer)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying customer', err })
    })
}
const softDeleteOneCustomer = (req, res) => {
  ModelCustomers.softDelete(req.params.idCustomer)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error soft deleting customer', err })
    })
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findOneCustomer,
  updateOneCustomer,
  destroyOneCustomer,
  softDeleteOneCustomer
}
