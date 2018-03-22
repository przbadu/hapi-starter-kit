// import required modules
import Hapi from 'hapi';

// import routes
import routes from './config/routes';
// import loggerConfig
import loggerOptions from './config/logger';

// initialize Hapi server
const server = new Hapi.Server({
  host: 'localhost',
  port: '3000',
});

// configure routes
server.route(routes);

/*
 * Start / Stop server
 */
const init = async () => {
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
