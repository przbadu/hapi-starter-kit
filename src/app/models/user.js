import Bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import Knex from './../../config/knex';

const secretKey = config.get('secretKeyBase');

export default {
  authenticate: ({ username, password }) => {
    if (!username) return { data: 'username is missing' }
    if (!password) return { data: 'password is missing' }

    return Knex('users').where({ username })
      .select('guid', 'password')
      .then(user => {
        if (!user) return { data: 'Invalid username or password', status: 401 }

        // compare password using bcrypt
        let token;

        if(Bcrypt.compare(password, password)) {
          token = jwt.sign(
            { username, scope: user.guid},
            secretKey,
            { algorithm: 'HS256', expiresIn: '2h' }
          )
        }

        return { token }
      })
      .catch(error => {
        return { data: 'Something went wrong!', status: 500 }
      })
  }
}
