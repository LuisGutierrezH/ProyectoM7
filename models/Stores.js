const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body)
    .into('stores')

    .returning('*')
}
const findAll = () => {
  return knex
    .select('*')
    .from('stores')
    .where('active', true)
}
const findOne = (storeId) => {
  return knex
    .select('*')
    .from('stores')
    .where('store_id', storeId)
    .where('active', true)
}
const update = (storeId, body) => {
  return knex
    .update(body)
    .from('stores')
    .where('store_id', storeId)
    .returning('*')
}
const destroy = (storeId) => {
  return knex
    .del()
    .from('stores')
    .where('store_id', storeId)
}
const softDelete = (storeId) => {
  return knex
    .update({ active: false })
    .from('stores')
    .where('store_id', storeId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete

}
