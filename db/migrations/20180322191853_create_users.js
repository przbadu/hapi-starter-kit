
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('users', t => {
      // Primary key
      t.increments();

      // Data
      t.string('first_name', 50).notNullable();
      t.string('last_name', 50).notNullable();
      t.string('username', 50).notNullable().unique();
      t.string('email', 250).notNullable().unique();
      t.string('password', 128).notNullable();
      t.string('guid', 50).notNullable().unique();

      t.timestamp('created_at').notNullable();
    })
};

exports.down = function(knex, Promise) {
  // extra layer of security with `.ifExists`
  return knex.schema.dropTableIfExists('users');
};
