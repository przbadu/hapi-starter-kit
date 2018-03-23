import Authentication from '../models/authentication';

export default {
  auth: (req, h) => {
    const auth = new Authentication(req.payload);
    return auth.authenticate()
  }
}
