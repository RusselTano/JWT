const router = require('express').Router();
const UserModel = require('../database/models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { privateKey } = require('../env/keys');

router.post('/', async (req, res) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email}).exec();
  if (user) {
    if(bcrypt.compareSync(body.password, user.password)){
      const token = jwt.sign({},privateKey,{
        subject: user._id.toString(),
        expiresIn: 60 * 60 * 24 * 7,
        algorithm: 'RS256'
      });
      res.cookie('token', token);
      res.json(user);
    }
    else {
      res.status(400).json('Mot de passe incorrect.');
    }
  }
  else{
    res.status(400).json('Cet email est déjà utilisé.');
  }
});


module.exports = router;