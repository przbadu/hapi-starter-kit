import User from '../models/user';

export default {
  auth: (req, h) => {
    return User.authenticate(req.payload);
  }
}
