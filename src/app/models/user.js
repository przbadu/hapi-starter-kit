import Bcrypt from 'bcrypt';
import Boom from 'boom';
import Joi from 'joi';
import Knex from './../../config/knex';


export default class User {
  constructor(params = {}) {
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.username = params.username;
    this.email = params.email;
    this.password = params.password;
  }

  // Joi validation schema
  // Usage: before inserting into database
  schema() {
    return Joi.object().keys({
      first_name: Joi.string().min(3).max(50).required(),
      last_name: Joi.string().min(3).max(50).required(),
      username: Joi.string().min(3).max(30).required(),
      email: Joi.strict().email(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
    })
  }
}
