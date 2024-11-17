const router = require('express').Router();
const UserModel = require('../database/models/user.model');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new UserModel({ username, email, password: await bcrypt.hash(password, 10) });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement.', error: err.message });
  }
  
});


module.exports = router;