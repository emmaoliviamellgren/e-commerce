// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({

  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }

});

const Users = mongoose.model('Users', usersSchema)

module.exports = Users;