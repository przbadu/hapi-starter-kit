import Knex from '../../config/knex';

/**
 * GET /birds
 */
const list = (req, h) => {
  return Knex('birds')
    .where({ isPublic: true })
    .select('name', 'species', 'picture_url')
    .then(data => {
      return { data, status: 200 }
    })
    .catch(error => {
      return { error }
    })
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
