/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('stores_have_products').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('stores_have_products', function (table) {
        table.integer('product_id').unsigned().references('products.product_id')
        table.integer('store_id').unsigned().references('stores.store_id')
        table.integer('quantity').notNullable()
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
  return knex.schema.hasTable('stores_have_products').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('stores_have_products')
    }
  })
}
