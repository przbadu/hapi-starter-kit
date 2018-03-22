
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('birds', t => {
      t.timestamp('created_at').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('birds', t => {
      t.dropColumn('created_at');
    })
};
