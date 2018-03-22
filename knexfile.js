// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'birdbase_development',
      user:     'root',
      password: '',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  test: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'birdbase_test',
      user:     'root',
      password: '',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './app/db/migrations'
    },
    seeds: {
      directory: './app/db/seeds/seed'
    }
  }
};
