const router = require('express').Router();
const UserModel = require('../database/models/user.model');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new UserModel({ username, email, password: await bcrypt.hash(password, 10) });
  await user.save();
  res.json({ message: 'User created' });
});


module.exports = router;