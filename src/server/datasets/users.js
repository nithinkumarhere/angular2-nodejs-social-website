var mongoose = require('mongoose');
var friends = require("mongoose-friends");
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};


let follower = new mongoose.Schema(
  {
    userId: {required: true, type: String},
    date: Date,
    statut: String,
    image:String,
    username:String
  });

let schema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email address is required',

  },
  username: {
    type: String
  },
  password: {
    type: String,
    required: "mot de passe Mongoose required"
  },
  website: String,
  gender: String,
  image: String,
  cover: String,
  location: String,
  modifiedAt: {
    type: Date,
    default: Date.now
  },
  bio: String,
  role: Number,
  mail: String,
  isConnected: Boolean,
  following: [follower]
});

schema.plugin(friends({pathName: "friendManagement"}));

module.exports = mongoose.model('User', schema);

