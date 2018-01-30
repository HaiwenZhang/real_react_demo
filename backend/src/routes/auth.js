import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/', (req, res) => {
  const { data } = req.body;
  User.findOne({ email: data.email }).then(user => {
    if(user && user.isValidPassword(data.password)) {
      res.json({ user: user.toAuthJSON()});
    } else {
      res.status(404).json({ errors: { global: "Invalid User"}});
    }
  })
})

export default router;