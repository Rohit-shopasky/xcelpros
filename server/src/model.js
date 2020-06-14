const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email:{type:String,default:""},
    password: {type:String,default:""},
    token: {type:String},
    loginAt: {type:Date,default:new Date()},
    createdAt:{type:Date,default:new Date()}
  },
  
);

module.exports = mongoose.model("users", usersModel);