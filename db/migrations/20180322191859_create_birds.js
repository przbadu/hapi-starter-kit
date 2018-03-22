
exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('birds', t => {
    // primary key
    t.increments();

    // association
    t.string('owner', 36).references('guid').inTable('users');

    // columns
    t.string('name', 250).notNullable();
    t.string('species', 250).notNullable();
    t.string('picture_url', 250).notNullable();
    t.string('guid', 36).notNullable().unique();
    t.boolean('isPublic').notNullable().defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('birds');
};
