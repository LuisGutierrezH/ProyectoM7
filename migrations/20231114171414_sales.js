/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sales', function (table) {
        table.increments('sale_id').primary() // primary() quiere decir que es la llave primaria
        table.integer('product_id').unsigned().references('products.product_id')
        table.integer('customer_id').unsigned().references('customers.customer_id')
        table.integer('store_id').unsigned().references('stores.store_id')
        table.integer('amount').notNullable()
        table.boolean('active').notNullable().defaultTo(true) // defaultTo() quiere decir un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // fn.now() es una función de knex que nos da la fecha y hora actual
      })
    }
  })
}
/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('sales')
    }
  })
}
