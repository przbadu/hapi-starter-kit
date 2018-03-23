import Bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import Boom from 'boom';
import Joi from 'joi';

import Knex from './../../config/knex';
const secretKey = config.get('secretKeyBase');

export default class Authentication {
  constructor(args = {}) {
    const { username, password } = args;
    this.username = username;
    this.password = password;
    this.alg = { algorithm: 'HS256', expiresIn: '2h' };
  }

  // Joi validation schema
  // Usage: before inserting into database
  schema() {
    return Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    })
  }

  // Find user by username and return guid and password in javascript object.
  findByUsername() {
    return Knex('users')
      .where({ username: this.username })
      .select('guid', 'password')
      .first();
  }

  // validate({username: '', password: ''})
  // => if invalid, return false
  // => if valid, generate and return JWT token
  validate(user) {
    if(!user) return false;
    const payload = { username: this.username, scope: user.guid };
    const success = Bcrypt.compareSync(this.password, user.password)
    if(!success) return false;
    return jwt.sign(payload, secretKey, this.alg)
  }

  // Authenticate user.
  authenticate() {
    let token;

    const { error } = Joi.validate({
      username: this.username,
      password: this.password
    }, this.schema())

    // Joi validation error
    if (error) return Boom.badRequest("Username or password can't be blank");

    // check credentials
    return this.findByUsername()
      .then(user => {
        token = this.validate(user); // validate user in database
        if(token == false) return Boom.unauthorized('Invalid username or password')
        return { token }
      })
      .catch(error => {
        return Boom.badImplementation(error);
      })
  }
}
