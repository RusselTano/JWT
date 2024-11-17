const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // role: String,
  // created_at: Date,
  // updated_at: Date
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;