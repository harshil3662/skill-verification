const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    mobile: {
      type: Number,
      required: true,
      unique: true
    },
    website: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
