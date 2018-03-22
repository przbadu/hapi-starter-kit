/**
 * GET /birds
 */
exports.list = (req, h) => {
  return { name: 'list of birds goes here' }
}

/**
 * GET /birds/:id
 */
exports.get = (req, h) => {
  return { name: `Find a bird with id ${req.params.id}` }
}

/**
 * POST /birds
 */
exports.create = (req, h) => {
  return { name: `Create a bird here` }
}

/**
 * PUT /birds/:id
 */
exports.update = (req, h) => {
  return { name: `Update a bird with id ${req.params.id}` }
}

/**
 * DELETE /birds/:id
 */
exports.destroy = (req, h) => {
  return { name: `Delete a bird with id ${req.params.id}` }
}
