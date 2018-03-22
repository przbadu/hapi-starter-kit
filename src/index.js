// import required modules
import Hapi from 'hapi';

// import routes
import routes from './config/routes';

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
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

// unhandled rejection
process.on('unhandledRejection', error => {
  console.log(error);
  process.exit(1);
});

init();
