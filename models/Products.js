// El modelo trae los datos de la base de datos
// NO se encarga de validar los datos, ni resolver promesas,
// eso es trabajo del Controlador en MVC

// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de la conexión de la base de datos
const knex = require('../config')

// Paso #2 Es crear una función que traiga los datos que yo requiera de la base de datos
const create = (body) => {
  // Paso #3 Escribir la consulta de SQL usando Knex
  return knex
    .insert(body) // ¿Qué datos voy a insertar?
    .into('products') // ¿En qué tabla?
    // .returning('*') // ¿Qué datos voy a retornar?
    .returning(['product_id', 'product_name', 'product_description', 'price', 'sku', 'active', 'created_at'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true) // Traemos los campos que no tengan soft delete
}

const findOne = (productId) => {
  return knex
    .select('*')
    .from('products')
    .where('product_id', productId)
    .where('active', true)
}
const update = (productId, body) => {
  return knex
    .update(body)
    .from('products')
    .where('product_id', productId)
    .returning('*')
}

const destroy = (productId) => {
  return knex
    .del()
    .from('products')
    .where('product_id', productId)
}
const softDelete = (productId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where('product_id', productId)
}
/*

// Voy a borrar de manera REAL un registro de la base de datos
const destroy = (houseId) => {
  return knex
    .del()
    .from('homes')
    .where('house_id', houseId)
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where('product_id', houseId)
}  */

// Paso #4 Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
