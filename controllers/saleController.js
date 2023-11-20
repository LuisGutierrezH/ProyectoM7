const ModelSales = require('../models/Sales')

const createSale = (req, res) => {
  ModelSales.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Sale created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating sale', err })
    })
}
const findAllSales = (req, res) => {
  ModelSales.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ messsage: 'Error listing sales', err })
    })
}
const findOneSale = (req, res) => {
  ModelSales.findOne(req.params.idSale)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ messsage: 'Error listing sale', err })
    })
}
const updateOneSale = (req, res) => {
  ModelSales.update(req.params.idSale, req.body)
    .then(row => {
      res.status(200).send({ message: 'Sa,e updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating sale', err })
    })
}
const destroyOneSale = (req, res) => {
  ModelSales.destroy(req.params.idSale)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying sale', err })
    })
}
const softDeleteOneSale = (req, res) => {
  ModelSales.softDelete(req.params.idSale)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error soft deleting sale', err })
    })
}
module.exports = {
  createSale,
  findAllSales,
  findOneSale,
  updateOneSale,
  destroyOneSale,
  softDeleteOneSale
}
