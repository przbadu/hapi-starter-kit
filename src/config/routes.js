import birdsController from '../app/controllers/birds_controller';

export default [
  // root routes
  { method: 'GET', path: '/', handler: (req, h) => { return "Hello World"; } },

  /**
   * Birds
   * */
  { method: 'GET', path: '/birds', handler: birdsController.list },
  { method: 'GET', path: '/birds/{id}', handler: birdsController.get },
  { method: 'POST', path: '/birds', handler: birdsController.create },
  { method: 'PUT', path: '/birds', handler: birdsController.update },
  { method: 'DELETE', path: '/birds', handler: birdsController.destroy },
]
