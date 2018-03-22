// import required modules
import Hapi from 'hapi';
// node-config
import config from 'config';

// import routes
import routes from './config/routes';
// import loggerConfig
import loggerOptions from './config/logger';

// grab configurations
const { host, port } = config.get('server');
const secretKey = config.get('secretKeyBase');

// initialize Hapi server
const server = new Hapi.Server({ host, port });

// configure routes
server.route(routes);

/*
 * Start / Stop server
 */
const init = async () => {
  // register hapi-auth-jwt2
  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: secretKey,
    verifyOptions: { algorithms: ['HS256'] }
  });
  server.auth.default('jwt');

  // register good logger
  await server.register({
    plugin: require('good'),
    options: loggerOptions,
  });

  // start server
  await server.start();

  // display console message about the server's url
  console.log(`Server running at: ${server.info.uri}`);
}

// unhandled rejection
process.on('unhandledRejection', error => {
  console.log(error);
  process.exit(1);
});

init();
