import birdsController from '../app/controllers/birds_controller';

/**
 * USAGE:
 *
 * Authorization header is required by default,
 * To skip authorization in public routs add config: { auth: false }
 *
 * { method: 'GET', path: '/', config: { auth: false }, handler: (req, h) => { return '' }}
 *
 */
export default [
  // root routes
  { method: 'GET', path: '/', config: { auth: false }, handler: (req, h) => { return "Hello World"; } },

  /**
   * Birds
   * */
  { method: 'GET', path: '/birds', config: { auth: false }, handler: birdsController.list },
  { method: 'GET', path: '/birds/{id}', handler: birdsController.get },
  { method: 'POST', path: '/birds', handler: birdsController.create },
  { method: 'PUT', path: '/birds', handler: birdsController.update },
  { method: 'DELETE', path: '/birds', handler: birdsController.destroy },
]
