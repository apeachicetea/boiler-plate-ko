const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlngth: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.model('User', userSchema)
//userSchema를 DB에 User라는 이름의 collection에 등록하라는 뜻

module.exports = { User }