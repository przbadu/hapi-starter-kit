import knex from 'knex';
import config from 'config';

const { client, host, database, user, password, charset } = config.get('databaseConfig');

export default knex({
  client,
  connection: {
    host,
    user,
    password,
    database,
    charset,
  }
});
