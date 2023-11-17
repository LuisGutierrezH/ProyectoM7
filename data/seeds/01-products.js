/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      product_name: 'Laptop',
      product_description: 'Powerful laptop with high-performance specifications.',
      price: 999,
      sku: 'LT123456'
    },
    {
      product_name: 'Smartphone',
      product_description: 'Latest smartphone with advanced features and camera.',
      price: 699,
      sku: 'SP789012'
    },
    {
      product_name: 'Coffee Maker',
      product_description: 'Automatic coffee maker with built-in grinder.',
      price: 129,
      sku: 'CM345678'
    },
    {
      product_name: 'Running Shoes',
      product_description: 'High-performance running shoes for all terrains.',
      price: 79,
      sku: 'RS901234'
    },
    {
      product_name: 'Smartwatch',
      product_description: 'Fitness tracker with heart rate monitoring.',
      price: 149,
      sku: 'SW567890'
    },
    {
      product_name: 'Headphones',
      product_description: 'Over-ear headphones with noise-canceling technology.',
      price: 129,
      sku: 'HP123456'
    },
    {
      product_name: 'Desk Chair',
      product_description: 'Ergonomic desk chair for long hours of comfortable work.',
      price: 199,
      sku: 'DC789012'
    },
    {
      product_name: 'Digital Camera',
      product_description: 'High-resolution digital camera for professional photography.',
      price: 599,
      sku: 'DC345678'
    },
    {
      product_name: 'Hiking Backpack',
      product_description: 'Durable backpack with multiple compartments for hiking enthusiasts.',
      price: 89,
      sku: 'HB901234'
    },
    {
      product_name: 'Wireless Mouse',
      product_description: 'Sleek wireless mouse for improved productivity.',
      price: 29,
      sku: 'WM567890'
    },
    {
      product_name: 'Yoga Mat',
      product_description: 'High-quality yoga mat for home or studio workouts.',
      price: 49,
      sku: 'YM123456'
    },
    {
      product_name: 'External Hard Drive',
      product_description: 'Portable external hard drive for data backup and storage.',
      price: 79,
      sku: 'HD789012'
    },
    {
      product_name: 'Gaming Keyboard',
      product_description: 'Mechanical gaming keyboard with customizable RGB lighting.',
      price: 129,
      sku: 'GK345678'
    },
    {
      product_name: 'Wireless Earbuds',
      product_description: 'True wireless earbuds with long battery life.',
      price: 89,
      sku: 'WE901234'
    },
    {
      product_name: 'Printed T-Shirt',
      product_description: 'Comfortable cotton T-shirt with a unique print.',
      price: 19,
      sku: 'TS567890'
    },
    {
      product_name: 'Air Purifier',
      product_description: 'HEPA air purifier for a cleaner and healthier indoor environment.',
      price: 149,
      sku: 'AP123456'
    },
    {
      product_name: 'Bluetooth Speaker',
      product_description: 'Portable Bluetooth speaker for music on the go.',
      price: 59,
      sku: 'BS789012'
    },
    {
      product_name: 'Power Bank',
      product_description: 'High-capacity power bank for charging devices on the move.',
      price: 39,
      sku: 'PB345678'
    },
    {
      product_name: 'Travel Backpack',
      product_description: 'Compact and versatile backpack for travel enthusiasts.',
      price: 69,
      sku: 'TB901234'
    },
    {
      product_name: 'Dumbbell Set',
      product_description: 'Adjustable dumbbell set for home workouts.',
      price: 149,
      sku: 'DS567890'
    },
    {
      product_name: 'Wireless Router',
      product_description: 'High-speed wireless router for seamless internet connectivity.',
      price: 79,
      sku: 'WR123456'
    },
    {
      product_name: 'Sunglasses',
      product_description: 'Stylish sunglasses with UV protection.',
      price: 29,
      sku: 'SG789012'
    },
    {
      product_name: 'Fitness Tracker',
      product_description: 'Slim fitness tracker with heart rate monitoring and sleep tracking.',
      price: 59,
      sku: 'FT345678'
    },
    {
      product_name: 'Wireless Charging Pad',
      product_description: 'Qi-compatible wireless charging pad for smartphones and other devices.',
      price: 19,
      sku: 'CP901234'
    },
    {
      product_name: 'Robot Vacuum Cleaner',
      product_description: 'Smart robot vacuum with app control and automatic navigation.',
      price: 249,
      sku: 'VC567890'
    },
    {
      product_name: 'Bluetooth Headset',
      product_description: 'Comfortable Bluetooth headset with noise-canceling microphone.',
      price: 89,
      sku: 'BH123456'
    },
    {
      product_name: 'Portable Monitor',
      product_description: 'Lightweight portable monitor for on-the-go productivity.',
      price: 169,
      sku: 'PM789012'
    },
    {
      product_name: 'Wireless Gaming Mouse',
      product_description: 'Gaming mouse with customizable buttons and RGB lighting.',
      price: 79,
      sku: 'GM345678'
    },
    {
      product_name: 'Smart Thermostat',
      product_description: 'Wi-Fi-enabled smart thermostat for efficient home temperature control.',
      price: 129,
      sku: 'ST901234'
    }

  ])
}
