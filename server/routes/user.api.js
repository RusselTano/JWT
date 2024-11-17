const router = require("express").Router();
const UserModel = require("../database/models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { publicKey } = require("../env/keys");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new UserModel({
    username,
    email,
    password: await bcrypt.hash(password, 10),
  });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de l'enregistrement.",
      error: err.message,
    });
  }
});

router.get("/current", async (req, res) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, publicKey);
      const user = await UserModel.findById(decoded.sub).exec();

      if (user) {
        res.json(user);
      } else {
        res.status(404).json(null);
      }
    } catch (err) {
      res.json(null);
    }
  } else {
    res.json(token);
  }
});

module.exports = router;
