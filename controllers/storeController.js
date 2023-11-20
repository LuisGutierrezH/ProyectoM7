const ModelStores = require('../models/Products')

const createStore = (req, res) => {
  ModelStores.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Store created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating store', err })
    })
}
const findAllStores = (req, res) => {
  ModelStores.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ messsage: 'Error listing stores', err })
    })
}
const findOneStore = (req, res) => {
  ModelStores.findOne(req.params.idStore)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ messsage: 'Error listing store', err })
    })
}
const updateOneStore = (req, res) => {
  ModelStores.update(req.params.idStore, req.body)
    .then(row => {
      res.status(200).send({ message: 'Store updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating store', err })
    })
}
const destroyOneStore = (req, res) => {
  ModelStores.destroy(req.params.idStore)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying store', err })
    })
}
const softDeleteOneStore = (req, res) => {
  ModelStores.softDelete(req.params.idStore)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error soft deleting store', err })
    })
}
module.exports = {
  createStore,
  findAllStores,
  findOneStore,
  updateOneStore,
  destroyOneStore,
  softDeleteOneStore
}
