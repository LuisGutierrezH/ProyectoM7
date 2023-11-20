const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body)
    .into('sales')

    .returning('*')
}
const findAll = () => {
  return knex
    .select('*')
    .from('sales')
    .where('active', true)
}
const findOne = (saleId) => {
  return knex
    .select('*')
    .from('sales')
    .where('sale_id', saleId)
    .where('active', true)
}
const update = (saleId, body) => {
  return knex
    .update(body)
    .from('sales')
    .where('sale_id', saleId)
    .returning('*')
}
const destroy = (saleId) => {
  return knex
    .del()
    .from('sales')
    .where('sale_id', saleId)
}
const softDelete = (saleId) => {
  return knex
    .update({ active: false })
    .from('sales')
    .where('sale_id', saleId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete

}
