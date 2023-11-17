/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('sales').del()
  await knex('sales').insert([
    {
      product_id: 204,
      customer_id: 211,
      store_id: 205,
      amount: 150
    },
    {
      product_id: 205,
      customer_id: 212,
      store_id: 206,
      amount: 75
    },
    {
      product_id: 206,
      customer_id: 213,
      store_id: 207,
      amount: 200
    },
    {
      product_id: 207,
      customer_id: 214,
      store_id: 208,
      amount: 50
    },
    {
      product_id: 208,
      customer_id: 214,
      store_id: 209,
      amount: 120
    },
    {
      product_id: 209,
      customer_id: 215,
      store_id: 210,
      amount: 90
    },
    {
      product_id: 210,
      customer_id: 216,
      store_id: 211,
      amount: 180
    },
    {
      product_id: 211,
      customer_id: 219,
      store_id: 212,
      amount: 30
    },
    {
      product_id: 212,
      customer_id: 220,
      store_id: 213,
      amount: 95
    },
    {
      product_id: 213,
      customer_id: 221,
      store_id: 214,
      amount: 120
    },
    {
      product_id: 214,
      customer_id: 222,
      store_id: 215,
      amount: 65
    },
    {
      product_id: 215,
      customer_id: 223,
      store_id: 216,
      amount: 150
    },
    {
      product_id: 216,
      customer_id: 223,
      store_id: 217,
      amount: 80
    },
    {
      product_id: 217,
      customer_id: 224,
      store_id: 218,
      amount: 110
    },
    {
      product_id: 218,
      customer_id: 225,
      store_id: 220,
      amount: 40
    },
    {
      product_id: 219,
      customer_id: 226,
      store_id: 221,
      amount: 75
    },
    {
      product_id: 220,
      customer_id: 227,
      store_id: 222,
      amount: 95
    },
    {
      product_id: 221,
      customer_id: 228,
      store_id: 223,
      amount: 200
    },
    {
      product_id: 222,
      customer_id: 229,
      store_id: 224,
      amount: 50
    },
    {
      product_id: 223,
      customer_id: 230,
      store_id: 225,
      amount: 95
    },
    {
      product_id: 224,
      customer_id: 231,
      store_id: 226,
      amount: 120
    },
    {
      product_id: 225,
      customer_id: 232,
      store_id: 227,
      amount: 150
    },
    {
      product_id: 226,
      customer_id: 233,
      store_id: 228,
      amount: 65
    },
    {
      product_id: 227,
      customer_id: 239,
      store_id: 229,
      amount: 180
    },
    {
      product_id: 228,
      customer_id: 238,
      store_id: 230,
      amount: 30
    },
    {
      product_id: 229,
      customer_id: 238,
      store_id: 231,
      amount: 120
    },
    {
      product_id: 229,
      customer_id: 237,
      store_id: 232,
      amount: 95
    },
    {
      product_id: 227,
      customer_id: 211,
      store_id: 214,
      amount: 150
    }
  ])
}
