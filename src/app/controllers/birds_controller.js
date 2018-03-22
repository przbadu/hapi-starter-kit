/**
 * GET /birds
 */
const list = (req, h) => {
  return { name: 'list of birds goes here' }
}

/**
 * GET /birds/:id
 */
const get = (req, h) => {
  return { name: `Find a bird with id ${req.params.id}` }
}

/**
 * POST /birds
 */
const create = (req, h) => {
  return { name: `Create a bird here` }
}

/**
 * PUT /birds/:id
 */
const update = (req, h) => {
  return { name: `Update a bird with id ${req.params.id}` }
}

/**
 * DELETE /birds/:id
 */
const destroy = (req, h) => {
  return { name: `Delete a bird with id ${req.params.id}` }
}

export default {
  list,
  get,
  create,
  update,
  destroy
}
