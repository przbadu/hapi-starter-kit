const config = require('config');

const {
  client,
  host,
  database,
  user,
  password,
  charset,
  tableName,
  migrationDirectory,
  seedDirectory,
} = config.get('databaseConfig');

const defaultOptions = {
  client,
  connection: {
    host,
    database,
    user,
    password,
    charset,
  },
  migrations: {
    tableName,
    directory: migrationDirectory,
  },
  seeds: {
    directory: seedDirectory
  }
};

// Update with your config settings.
module.exports = {
  development: defaultOptions,
  production: defaultOptions
};
