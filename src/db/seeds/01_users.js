
exports.seed = function(knex, Promise) {
  const tableName = 'users';

  const rows = [
    {
      first_name: 'Pushpa',
      last_name: 'Raj Badu',
      username: 'przbadu',
      email: 'przbadu@gmail.com',
      password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm', // secret
      guid: 'f03ede7c-b121-4112-bcc7-130a3e87988c'
    },
  ]

  return knex(tableName)
    // Deletes ALL existing entries
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
