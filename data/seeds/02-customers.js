/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main Street',
      neighborhood: 'Downtown',
      postal_code: '10001',
      city: 'New York'
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      phone: '+1 (555) 987-6543',
      address: '456 Oak Avenue',
      neighborhood: 'Suburbia',
      postal_code: '20002',
      city: 'Los Angeles'
    },
    {
      first_name: 'Robert',
      last_name: 'Johnson',
      email: 'robert.johnson@example.com',
      phone: '+1 (555) 456-7890',
      address: '789 Pine Lane',
      neighborhood: 'Quietville',
      postal_code: '30003',
      city: 'Chicago'
    },
    {
      first_name: 'Eva',
      last_name: 'Miller',
      email: 'eva.miller@example.com',
      phone: '+1 (555) 789-0123',
      address: '567 Elm Street',
      neighborhood: 'Sunnyville',
      postal_code: '40004',
      city: 'Houston'
    },
    {
      first_name: 'Daniel',
      last_name: 'Brown',
      email: 'daniel.brown@example.com',
      phone: '+1 (555) 234-5678',
      address: '890 Maple Avenue',
      neighborhood: 'Greenfield',
      postal_code: '50005',
      city: 'Phoenix'
    },
    {
      first_name: 'Sophia',
      last_name: 'Taylor',
      email: 'sophia.taylor@example.com',
      phone: '+1 (555) 678-9012',
      address: '234 Cedar Street',
      neighborhood: 'Hillside',
      postal_code: '60006',
      city: 'Philadelphia'
    },
    {
      first_name: 'David',
      last_name: 'Wong',
      email: 'david.wong@example.com',
      phone: '+1 (555) 123-4567',
      address: '789 Pine Lane',
      neighborhood: 'Meadowview',
      postal_code: '70007',
      city: 'San Antonio'
    },
    {
      first_name: 'Emma',
      last_name: 'Anderson',
      email: 'emma.anderson@example.com',
      phone: '+1 (555) 456-7890',
      address: '567 Oak Street',
      neighborhood: 'Riverfront',
      postal_code: '80008',
      city: 'San Diego'
    },
    {
      first_name: 'Michael',
      last_name: 'Lewis',
      email: 'michael.lewis@example.com',
      phone: '+1 (555) 789-0123',
      address: '123 Maple Avenue',
      neighborhood: 'Lakeside',
      postal_code: '90009',
      city: 'Dallas'
    },
    {
      first_name: 'Olivia',
      last_name: 'Hernandez',
      email: 'olivia.hernandez@example.com',
      phone: '+1 (555) 234-5678',
      address: '890 Cedar Lane',
      neighborhood: 'Mountainview',
      postal_code: '10010',
      city: 'San Jose'
    },
    {
      first_name: 'William',
      last_name: 'Jones',
      email: 'william.jones@example.com',
      phone: '+1 (555) 345-6789',
      address: '456 Pine Lane',
      neighborhood: 'Woodside',
      postal_code: '11011',
      city: 'Austin'
    },
    {
      first_name: 'Ava',
      last_name: 'Davis',
      email: 'ava.davis@example.com',
      phone: '+1 (555) 456-7890',
      address: '789 Cedar Street',
      neighborhood: 'Sunnydale',
      postal_code: '12012',
      city: 'Seattle'
    },
    {
      first_name: 'Alexander',
      last_name: 'White',
      email: 'alexander.white@example.com',
      phone: '+1 (555) 567-8901',
      address: '123 Oak Lane',
      neighborhood: 'Highland',
      postal_code: '13013',
      city: 'Denver'
    },
    {
      first_name: 'Mia',
      last_name: 'Martinez',
      email: 'mia.martinez@example.com',
      phone: '+1 (555) 678-9012',
      address: '456 Maple Avenue',
      neighborhood: 'Greenview',
      postal_code: '14014',
      city: 'Portland'
    },
    {
      first_name: 'James',
      last_name: 'Taylor',
      email: 'james.taylor@example.com',
      phone: '+1 (555) 789-0123',
      address: '789 Cedar Lane',
      neighborhood: 'Lakeview',
      postal_code: '15015',
      city: 'Charlotte'
    },
    {
      first_name: 'Ava',
      last_name: 'Jones',
      email: 'ava.jones@example.com',
      phone: '+1 (555) 890-1234',
      address: '234 Pine Lane',
      neighborhood: 'Riverside',
      postal_code: '16016',
      city: 'San Francisco'
    },
    {
      first_name: 'Elijah',
      last_name: 'Garcia',
      email: 'elijah.garcia@example.com',
      phone: '+1 (555) 234-5678',
      address: '567 Elm Street',
      neighborhood: 'Hillcrest',
      postal_code: '17017',
      city: 'Fort Worth'
    },
    {
      first_name: 'Emma',
      last_name: 'Smith',
      email: 'emma.smith@example.com',
      phone: '+1 (555) 345-6789',
      address: '890 Cedar Lane',
      neighborhood: 'Meadowview',
      postal_code: '18018',
      city: 'Jacksonville'
    },
    {
      first_name: 'Jackson',
      last_name: 'Hernandez',
      email: 'jackson.hernandez@example.com',
      phone: '+1 (555) 456-7890',
      address: '123 Oak Lane',
      neighborhood: 'Sunnyville',
      postal_code: '19019',
      city: 'Columbus'
    },
    {
      first_name: 'Sophia',
      last_name: 'Clark',
      email: 'sophia.clark@example.com',
      phone: '+1 (555) 567-8901',
      address: '456 Pine Street',
      neighborhood: 'Woodside',
      postal_code: '20020',
      city: 'Indianapolis'
    },
    {
      first_name: 'William',
      last_name: 'Smith',
      email: 'william.smith@example.com',
      phone: '+1 (555) 678-9012',
      address: '789 Maple Lane',
      neighborhood: 'Greenfield',
      postal_code: '21021',
      city: 'San Francisco'
    },
    {
      first_name: 'Ava',
      last_name: 'Jones',
      email: 'ava.jones@example.com',
      phone: '+1 (555) 789-0123',
      address: '234 Cedar Street',
      neighborhood: 'Riverfront',
      postal_code: '22022',
      city: 'San Diego'
    },
    {
      first_name: 'Oliver',
      last_name: 'Garcia',
      email: 'oliver.garcia@example.com',
      phone: '+1 (555) 890-1234',
      address: '567 Elm Lane',
      neighborhood: 'Lakeview',
      postal_code: '23023',
      city: 'Dallas'
    },
    {
      first_name: 'Sophia',
      last_name: 'Wong',
      email: 'sophia.wong@example.com',
      phone: '+1 (555) 234-5678',
      address: '890 Oak Street',
      neighborhood: 'Sunnydale',
      postal_code: '24024',
      city: 'San Jose'
    },
    {
      first_name: 'Lucas',
      last_name: 'Lee',
      email: 'lucas.lee@example.com',
      phone: '+1 (555) 345-6789',
      address: '123 Cedar Lane',
      neighborhood: 'Highland',
      postal_code: '25025',
      city: 'Austin'
    },
    {
      first_name: 'Emma',
      last_name: 'Perez',
      email: 'emma.perez@example.com',
      phone: '+1 (555) 456-7890',
      address: '456 Pine Avenue',
      neighborhood: 'Greenview',
      postal_code: '26026',
      city: 'Seattle'
    },
    {
      first_name: 'Ethan',
      last_name: 'Taylor',
      email: 'ethan.taylor@example.com',
      phone: '+1 (555) 567-8901',
      address: '789 Oak Lane',
      neighborhood: 'Riverfront',
      postal_code: '27027',
      city: 'Denver'
    },
    {
      first_name: 'Olivia',
      last_name: 'Johnson',
      email: 'olivia.johnson@example.com',
      phone: '+1 (555) 678-9012',
      address: '234 Pine Street',
      neighborhood: 'Woodside',
      postal_code: '28028',
      city: 'Portland'
    },
    {
      first_name: 'Liam',
      last_name: 'Martin',
      email: 'liam.martin@example.com',
      phone: '+1 (555) 789-0123',
      address: '567 Maple Lane',
      neighborhood: 'Meadowview',
      postal_code: '29029',
      city: 'Charlotte'
    },
    {
      first_name: 'Sophia',
      last_name: 'Brown',
      email: 'sophia.brown@example.com',
      phone: '+1 (555) 890-1234',
      address: '890 Cedar Street',
      neighborhood: 'Lakeview',
      postal_code: '30030',
      city: 'San Francisco'
    }

  ])
}
