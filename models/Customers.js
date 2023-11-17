const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body)
    .into('customers')

    .returning('*')
}
const findAll = () => {
  return knex
    .select('*')
    .from('customers')
    .where('active', true)
}
const findOne = (customerId) => {
  return knex
    .select('*')
    .from('customers')
    .where('customer_id', customerId)
    .where('active', true)
}
const update = (customerId, body) => {
  return knex
    .update(body)
    .from('customers')
    .where('customer_id', customerId)
    .returning('*')
}
const destroy = (customerId) => {
  return knex
    .del()
    .from('customers')
    .where('customer_id', customerId)
}
const softDelete = (customerId) => {
  return knex
    .update({ active: false })
    .from('customers')
    .where('customer_id', customerId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete

}
