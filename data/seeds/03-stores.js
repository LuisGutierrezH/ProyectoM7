/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stores').del()
  await knex('stores').insert([
    {
      store_name: 'Fantastic Mart',
      store_address: '123 Main Street, Cityville'
    },
    {
      store_name: 'Sunny Corner Store',
      store_address: '456 Oak Avenue, Townsville'
    },
    {
      store_name: 'Urban Emporium',
      store_address: '789 Elm Street, Metropolis'
    },
    {
      store_name: 'Cosmic Bazaar',
      store_address: '101 Galaxy Lane, Star City'
    },
    {
      store_name: 'Mystic Marketplace',
      store_address: '222 Enchanted Avenue, Fairyland'
    },
    {
      store_name: 'Oceanic Outlet',
      store_address: '333 Seaside Boulevard, Atlantis'
    },
    {
      store_name: 'Tech Haven',
      store_address: '444 Silicon Street, Techopolis'
    },
    {
      store_name: 'Green Valley Emporium',
      store_address: '555 Nature Trail, Greensville'
    },
    {
      store_name: 'Sky High Mart',
      store_address: '666 Cloud Avenue, Skyland'
    },
    {
      store_name: 'Astral Bazaar',
      store_address: '777 Celestial Circle, Cosmos City'
    },
    {
      store_name: 'Golden Corner Store',
      store_address: '888 Gold Street, Preciousville'
    },
    {
      store_name: 'Evergreen Emporium',
      store_address: '999 Evergreen Lane, Greentown'
    },
    {
      store_name: 'City Lights Mart',
      store_address: '101 Bright Street, Lumina City'
    },
    {
      store_name: 'Thunderstruck Bazaar',
      store_address: '202 Thunder Avenue, Stormville'
    },
    {
      store_name: 'Petal Paradise',
      store_address: '303 Bloom Lane, Flowerfield'
    },
    {
      store_name: 'Arctic Outlet',
      store_address: '404 Frosty Street, Polar Town'
    },
    {
      store_name: 'Solar Emporium',
      store_address: '505 Sunbeam Boulevard, Sunnyville'
    },
    {
      store_name: 'Moonlight Mart',
      store_address: '606 Lunar Lane, Moon City'
    },
    {
      store_name: 'Midnight Bazaar',
      store_address: '707 Nightfall Avenue, Shadowtown'
    },
    {
      store_name: 'Aurora Haven',
      store_address: '808 Dawn Street, Horizon Heights'
    },
    {
      store_name: 'Silver Star Outlet',
      store_address: '909 Stardust Lane, Silveropolis'
    },
    {
      store_name: 'Wilderness Emporium',
      store_address: '123 Wilderness Trail, Wildsville'
    },
    {
      store_name: 'Tropical Mart',
      store_address: '456 Palm Street, Tropicana'
    },
    {
      store_name: 'Castle Corner Store',
      store_address: '789 Royal Avenue, Kingdom City'
    },
    {
      store_name: 'Vibrant Bazaar',
      store_address: '101 Spectrum Lane, Rainbowtown'
    },
    {
      store_name: 'Cozy Corner Emporium',
      store_address: '202 Comfort Street, Snuggleville'
    },
    {
      store_name: 'Chill Zone Mart',
      store_address: '303 Frost Lane, Chillington'
    },
    {
      store_name: 'Majestic Marketplace',
      store_address: '404 Majesty Street, Royalville'
    },
    {
      store_name: 'Whimsical Outlet',
      store_address: '505 Whimsy Avenue, Dreamland'
    }
  ])
}
