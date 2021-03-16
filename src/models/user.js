const mongoose = require('../database');

const UserSchema = new mongoose.Schema({  
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase:true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
    select: false,
  },
  createAt: {
    type: Date,
    defalt: Date.now,
  }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;