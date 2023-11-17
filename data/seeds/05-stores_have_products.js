/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stores_have_products').del()
  await knex('stores_have_products').insert([
    {
      product_id: 205,
      store_id: 210,
      quantity: 20
    },
    {
      product_id: 206,
      store_id: 212,
      quantity: 15
    },
    {
      product_id: 207,
      store_id: 216,
      quantity: 30
    },
    {
      product_id: 208,
      store_id: 220,
      quantity: 25
    },
    {
      product_id: 209,
      store_id: 224,
      quantity: 10
    },
    {
      product_id: 210,
      store_id: 204,
      quantity: 18
    },
    {
      product_id: 211,
      store_id: 232,
      quantity: 22
    },
    {
      product_id: 212,
      store_id: 205,
      quantity: 12
    },
    {
      product_id: 213,
      store_id: 207,
      quantity: 27
    },
    {
      product_id: 214,
      store_id: 214,
      quantity: 8
    },
    {
      product_id: 215,
      store_id: 216,
      quantity: 14
    },
    {
      product_id: 216,
      store_id: 225,
      quantity: 19
    },
    {
      product_id: 217,
      store_id: 210,
      quantity: 23
    },
    {
      product_id: 218,
      store_id: 204,
      quantity: 17
    },
    {
      product_id: 219,
      store_id: 215,
      quantity: 28
    },
    {
      product_id: 220,
      store_id: 227,
      quantity: 13
    },
    {
      product_id: 221,
      store_id: 204,
      quantity: 21
    },
    {
      product_id: 222,
      store_id: 230,
      quantity: 16
    },
    {
      product_id: 223,
      store_id: 232,
      quantity: 9
    },
    {
      product_id: 224,
      store_id: 208,
      quantity: 24
    },
    {
      product_id: 225,
      store_id: 209,
      quantity: 22
    },
    {
      product_id: 226,
      store_id: 204,
      quantity: 28
    },
    {
      product_id: 227,
      store_id: 224,
      quantity: 14
    },
    {
      product_id: 228,
      store_id: 220,
      quantity: 9
    },
    {
      product_id: 229,
      store_id: 205,
      quantity: 12
    },
    {
      product_id: 230,
      store_id: 211,
      quantity: 7
    },
    {
      product_id: 231,
      store_id: 231,
      quantity: 5
    },
    {
      product_id: 232,
      store_id: 211,
      quantity: 18
    }
  ])
}
